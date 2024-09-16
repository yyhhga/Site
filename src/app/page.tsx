import {
   Content,
   ContentType,
} from '../custom components/Content'

import { testFuse } from '@/Blogposts/fuse'
import { compareDesc } from 'date-fns'
import Link from 'next/link'
import { parseDate, parsePath } from '@/Blogposts/mdxUtils'

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
            <div className="m-auto my-12 text-center">
               Records of the life of a nameless Software
               Engineer
            </div>

            <div className="flex-col m-auto w-8/12">
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
                        <p className="text-gray-400">
                           {blog.item.tags}
                        </p>
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
