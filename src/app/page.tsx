import {
   Content,
   ContentType,
} from '../custom components/Content'

import { searchFuse } from '@/Blogposts/fuse'
import { compareDesc } from 'date-fns'
import Link from 'next/link'
import { parseDate, parsePath } from '@/Blogposts/mdxUtils'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

//TODO: when indexAndSearchFuse() can be used prebuild step, import json directly instead.
export default async function Home() {
   const mdxFileData = await searchFuse()
   const index = mdxFileData.sort((a, b) => {
      const dateA = parseDate(a.item.date)
      const dateB = parseDate(b.item.date)
      return compareDesc(dateA, dateB)
   })
   return (
      <main className="h-full w-full">
         <Content type={ContentType.SIMPLE}>
            <div className="flex-col px-4 w-full md:m-auto md:w-8/12">
               <h1>Thoughts.</h1>
               <br />
               {index.map((blog, index) => (
                  <>
                     <div
                        key={`${index}${blog.item.date}`}
                        className="py-2 mb-2 flex justify-between align-middle"
                     >
                        <div>
                           <h3 className="text-lg font-bold">
                              <Link
                                 href={`/post/${parsePath(blog.item.fileName)}`}
                                 legacyBehavior
                                 passHref
                              >
                                 {blog.item.title}
                              </Link>
                           </h3>

                           <div className="flex flex-wrap flex-grow gap-2 mt-2 mx-auto">
                              {blog.item.tags &&
                              Array.isArray(
                                 blog.item.tags,
                              ) ? (
                                 blog.item.tags.map(
                                    (val, index) => (
                                       <Badge
                                          variant="outline"
                                          key={`${val}${index}`}
                                       >
                                          {val}
                                       </Badge>
                                    ),
                                 )
                              ) : (
                                 <Badge
                                    variant="outline"
                                    key={`${blog.item.tags}${index}`}
                                 >
                                    {blog.item.tags}
                                 </Badge>
                              )}
                           </div>
                        </div>
                        <div className="text-gray-400 pl-4">
                           <p>{blog.item.date}</p>
                        </div>
                     </div>
                     <Separator className="my-4 bg-[#8a9ab9]" />
                  </>
               ))}
            </div>
         </Content>
      </main>
   )
}
