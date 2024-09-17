// export const dynamicParams = true
//TODO: explore error handling at route level with route segment config
import {
   extractMdxContent,
   indexMdxFile,
   parsePath,
} from '@/Blogposts/mdxUtils'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
   const entries = await indexMdxFile()
   const paths = entries.map((entry) => ({
      postTitle: parsePath(entry.fileName),
   }))
   return paths
}

export default async function Post({
   params,
}: Readonly<{
   params: { postTitle: string }
}>) {
   const { postTitle: fileName } = params
   const { content, frontmatter } = await extractMdxContent(
      `${fileName}.mdx`,
   )
   return (
      <div className="flex flex-col px-6 w-full h-full pt-10 md:w-full md:px-14 ">
         <header>
            <h1 data-id="title">{frontmatter.title}</h1>
         </header>

         <div data-id="tags" className="mt-4">
            tags: {frontmatter.tags}
         </div>

         <div
            data-id="dateauthor"
            className="italic text-xs mt-4"
         >
            {frontmatter.date} <br />
            by: {frontmatter.by}
         </div>
         <div data-id="content" className="pt-8">
            <div className="">
               {content && <MDXRemote source={content} />}
            </div>
         </div>
      </div>
   )
}
