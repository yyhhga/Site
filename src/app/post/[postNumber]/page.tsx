import {
   extractMdxContent,
   indexMdxFile,
} from '@/Blogposts/IndexUtils'
import { MDXRemote } from 'next-mdx-remote/rsc'

//only for page routing
export async function generateStaticParams() {
   const entries = await indexMdxFile()
   const paths = entries.map((entry) => ({
      postNumber: entry.title.toString(), // Ensure `postNumber` matches the parameter in your route
   }))
   return paths
   //to generate dynamic params based on index file
}

export async function getPostContent() {
   return await extractMdxContent('Sample.mdx')
}

export default async function Post({
   postNumber,
}: {
   postNumber: any
}) {
   const { content, frontmatter } = await getPostContent()
   return (
      <div className="flex-col  w-full h-full">
         <div className="m-auto w-1/2">
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
         <br></br>
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
