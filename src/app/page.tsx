import {
   Content,
   ContentType,
} from '../custom components/Content'

import { testFuse } from '@/Blogposts/fuse'
import { compareDesc } from 'date-fns'
import Link from 'next/link'
import { parseDate, parsePath } from '@/Blogposts/mdxUtils'
import { Badge } from '@/components/ui/badge'

export default async function Home() {
   const mdxFileData = await testFuse()
   const index = mdxFileData.sort((a, b) => {
      const dateA = parseDate(a.item.date)
      const dateB = parseDate(b.item.date)
      return compareDesc(dateA, dateB)
   })
   return (
      <main className="h-full w-full">
         <Content type={ContentType.FIRST}>
            <div className="m-auto mb-12 text-center">
               Records of the life of a nameless Software
               Engineer
            </div>

            <div className="flex-col mx-4 md:m-auto w-8/12">
               <h3>Thoughts.</h3>
               <br />
               {index.map((blog, index) => (
                  <div
                     key={`${index}${blog.item.date}`}
                     className="py-2 flex justify-between align-middle gap-2"
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
                        <div className="text-gray-400 flex space-x-2 pt-2">
                           {blog.item.tags &&
                           Array.isArray(blog.item.tags) ? (
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
                     <div className="my-auto text-gray-400">
                        <p>{blog.item.date}</p>
                     </div>
                  </div>
               ))}
            </div>
         </Content>
      </main>
   )
}
