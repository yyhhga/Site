import { existsSync, readdirSync } from 'node:fs'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { parse } from 'date-fns'

type mdxMetaData = {
   title: string
   date: string
   by: string
   tags: string | string[]
}

type compiledMetaData = mdxMetaData & {
   fileName: string
}

type mdxFile = {
   content: string
   frontmatter: mdxMetaData
}
// to remove yaml fontmatter from output, see below. use it in getstaticprops probably, see nextjs docs
//what about popualting initial data on page? Still cant preprocess list of files- rewrite in commonjs?
//SOLUTION: just call it in my server components- these are pregenerated!
/**
 * https://rivea0.github.io/blog/converting-mdx-files-with-frontmatter-into-an-mdx-component-nextjs-13
 * https://mdxjs.com/guides/frontmatter/
 */

/**
 * Steps to parse index
 * 1) Read each mdx file, and build index array for fusejs
 *
 * 3) use fuseJS indexing to read the resulting array and parse into usable index
 *
 * Alt: use nextjs/mdx import {meta} from 'sample.mdx'
 * WE need to load a whole list of files - only way through dynamic imports. Not feasible for scale.
 * TODO:
 *    1. Type this function and functions using them.
 *    2. explore running this step as a prebuild step to a json file, and use it instead of running this function.
 *
 */

export const indexMdxFile = async () => {
   //to change to relative filepath and set as static variable at top level scope
   const blogPostsDir = './src/Blogposts'
   let fuseArr: compiledMetaData[] = []
   let files: string[] = []
   //construct array of all filenames
   if (existsSync(blogPostsDir)) {
      files = readdirSync(blogPostsDir).filter(
         (file) => path.extname(file) === '.mdx',
      )
      for (const file of files) {
         const fuseEntry = await extractMdxContent(file)
         fuseArr.push({
            ...fuseEntry.frontmatter,
            fileName: file,
            title: fuseEntry.frontmatter.title,
            date: fuseEntry.frontmatter.date,
            by: fuseEntry.frontmatter.by,
            tags: fuseEntry.frontmatter.tags,
         })
      }
   }
   //TODO: sort by date so links retain correct addresses ALT: have filepath be by filename via appending filename in for loop
   // return fuseArr.sort((a, b) => {
   //    const dateA = parseDate(a.date)
   //    const dateB = parseDate(b.date)
   //    return compareDesc(dateA, dateB)
   // })
   return fuseArr
}

/**
 * Reads file and extracts the variable in string from mdx
 *
 * @param file: string that represents a mdx file raw string metadata output
 *
 * @returns metadata: as object
 *
 * TODO: to abstract filepath to relative
 */
export const extractMdxContent = async (
   file: string,
): Promise<mdxFile> => {
   const fileContent = fs.readFileSync(
      `./src/Blogposts/${file}`,
      'utf-8',
   )
   // Parse front matter using gray-matter
   const { data, content } = matter(fileContent)
   return {
      content: content,
      frontmatter: data as mdxMetaData,
   }
}
export const parseDate = (date: string) => {
   return parse(date, 'dd/MM/yyyy', new Date())
}

export const parsePath = (path: string) => {
   return path.replace(/\.[^.]*$/, '')
}
