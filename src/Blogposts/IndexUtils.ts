import { existsSync, readdirSync } from 'node:fs'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// to remove yaml fontmatter from output, see below. use it in getstaticprops probably, see nextjs docs
//what about popualting initial data on page? Still cant preprocess list of files- rewrite in commonjs?
/**
 * https://rivea0.github.io/blog/converting-mdx-files-with-frontmatter-into-an-mdx-component-nextjs-13
 * https://mdxjs.com/guides/frontmatter/
 */

/**
 * Steps to parse index
 * 1) Read each mdx file, and build index array for fusejs
 * 2) read each file, parse the content as string and extract for the metadata
 * 3) use fuseJS indexing to read the resulting array and parse into usable index
 *
 * Alt: use nextjs/mdx import {meta} from 'sample.mdx'
 * WE need to load a whole list of files - only way through dynamic imports. Not feasible for scale.
 */
//use this only in getstaticsideprops - fs does not work in client component otherwise
export const indexMdxFile = async () => {
   //to change to relative filepath
   const blogPostsDir = './src/Blogposts'
   let fuseArr: any[] = []
   //construct array of all filenames
   if (existsSync(blogPostsDir)) {
      const files = readdirSync(blogPostsDir).filter(
         (file) => path.extname(file) === '.mdx',
      )
      for (const file of files) {
         const fuseEntry = await extractMdxContent(file)
         fuseArr.push(fuseEntry.frontmatter)
      }
   }
   // console.log(fuseArr)
   //TODO: sort by date so links retain correct addresses ALT: have filepath be by filename
   return fuseArr
}

/**
 * Reads file and extracts the variable in string from mdx
 *
 * @param file: string that represents a mdx file raw string metadata output
 *
 * @returns the metadata as object
 */
export const extractMdxContent = async (file: string) => {
   const fileContent = fs.readFileSync(
      `./src/Blogposts/${file}`,
      'utf-8',
   )
   // Parse front matter using gray-matter
   const { data, content } = matter(fileContent)
   return { content: content, frontmatter: data }
}
