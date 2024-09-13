// export const dynamicParams = true
//TODO: explore error handling at route level with route segment config
import { parsePath } from '@/Blogposts/mdxUtils'
import {
   extractMdxContent,
   indexMdxFile,
} from '@/Blogposts/mdxUtils'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
   const entries = await indexMdxFile()
   const paths = entries.map((entry) => ({
      postTitle: parsePath(entry.fileName.toString()),
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
      <div className="flex-col  w-full h-full">
         {/* <div className="m-auto w-1/2">
            content is {content}
            <br></br>
            meta is :
            {Object.entries(frontmatter).map(
               ([key, value]) => (
                  <>
                     <br></br>
                     {key} : {value}
                  </>
               ),
            )}
         </div>
         <br></br> */}
         <div
            data-id="content"
            className="m-auto w-1/2 border-dashed "
         >
            <div data-id="tags">{frontmatter.tags}</div>
            <div data-id="dateauthor">
               {frontmatter.date}
               by: {frontmatter.by}
            </div>
            <div>
               {content && <MDXRemote source={content} />}
            </div>
         </div>
      </div>
   )
}
