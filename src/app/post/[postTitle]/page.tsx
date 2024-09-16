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
      <div className="flex-col w-full h-full">
         <div
            data-id="content"
            className="m-auto w-1/2 border-dashed pt-6"
         >
            <h1 data-id="title">{frontmatter.title}</h1>
            <br />

            <div data-id="tags">
               tags: {frontmatter.tags}
            </div>
            <br />
            <div
               data-id="dateauthor"
               className="italic text-xs"
            >
               {frontmatter.date} <br />
               by: {frontmatter.by}
            </div>
            <div className="pt-8">
               {content && <MDXRemote source={content} />}
            </div>
         </div>
      </div>
   )
}
