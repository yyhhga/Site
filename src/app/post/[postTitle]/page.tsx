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
      <div className="flex flex-col px-6 w-full min-h-full max-h-fit pb-8 m-auto md:w-[75%] md:items-center ">
         <div className="w-full min-h-full ">
            <div className="flex flex-col relative z-10">
               <header className="m-auto">
                  <h1 data-id="title">
                     {frontmatter.title}
                  </h1>
               </header>
               <div
                  data-id="tags"
                  className="flex space-x-4 mt-4 mx-auto"
               >
                  {tags.map((tagName) => (
                     <Badge
                        variant="outline"
                        key={`${tagName}`}
                     >
                        {tagName}
                     </Badge>
                  ))}
               </div>
               <div
                  data-id="dateauthor"
                  className="italic text-xs mt-4 mx-auto "
               >
                  published on {frontmatter.date}
               </div>
               <div
                  data-id="content"
                  className="w-full pt-14 md:pt-2"
               >
                  <div className="min-h-[65vh] bg-slate-400/20 backdrop-blur rounded-xl p-4 border-solid border-[1px] shadow-md border-white/20">
                     {content && (
                        <MDXRemote source={content} />
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
