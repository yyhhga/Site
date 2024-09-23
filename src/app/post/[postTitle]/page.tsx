// export const dynamicParams = true
//TODO: explore error handling at route level with route segment config
import {
   extractMdxContent,
   indexMdxFile,
   parsePath,
} from '@/Blogposts/mdxUtils'
import { Badge } from '@/components/ui/badge'
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
   const tags =
      frontmatter.tags && Array.isArray(frontmatter.tags)
         ? frontmatter.tags
         : [frontmatter.tags]
   return (
      <div className="flex flex-col px-6 w-full h-full bg-orange-400  pt-10 m-auto md:w-[70%] md:items-center ">
         <header>
            <h1 data-id="title">{frontmatter.title}</h1>
         </header>

         <div data-id="tags" className="mt-4">
            {tags.map((tagName, index) => (
               <Badge
                  variant="outline"
                  key={`${tagName}${index}`}
               >
                  {tagName}
               </Badge>
            ))}
         </div>

         {/* <div
            data-id="dateauthor"
            className="italic text-xs mt-4 w-1/2 items-start"
         > */}
         <div
            data-id="dateauthor"
            className="italic text-xs mt-4 w-full"
         >
            published: {frontmatter.date}
         </div>
         <div data-id="content" className="pt-14">
            <div className="">
               {content && <MDXRemote source={content} />}
            </div>
         </div>
      </div>
   )
}
