import { Footer } from '../custom components/Footer'
import {
   Content,
   ContentType,
} from '../custom components/Content'
import Image from 'next/image'
import profilePic from '../../public/cartoon-potato-icon-png.png'
import { testFuse } from '@/Blogposts/fuse'
import { compareDesc } from 'date-fns'
import Link from 'next/link'
import { parseDate, parsePath } from '@/Blogposts/mdxUtils'

export default async function Home() {
   const mdxFileData = await testFuse()
   // console.log(mdxFileData)
   const index = mdxFileData.sort((a, b) => {
      const dateA = parseDate(a.item.date)
      const dateB = parseDate(b.item.date)
      return compareDesc(dateA, dateB)
   })
   return (
      <>
         <main>
            <Content type={ContentType.SIMPLE}>
               <div className="flex flex-row text-black opacity-100 m-auto items-center w-3/6">
                  <div className="flex-wrap hidden md:flex ">
                     <Image src={profilePic} alt="Potato" />
                  </div>
                  <div className="grow">
                     <h1>
                        Hi.
                        <div className="flex-wrap h-4 w-4 block md:hidden ">
                           <Image
                              src={profilePic}
                              alt="Potato"
                           />
                        </div>
                     </h1>
                     <br />
                     <p>
                        I'm a software engineer who has
                        built and driven tech initiatives
                        for 7 years.
                     </p>
                     <br />
                     <p>
                        I'm passionate about melding
                        business and technical fundamentals
                        - I find that the bridge between the
                        2 disciplines is required for
                        successful outcomes.
                     </p>
                     <br />
                     Welcome to my side of the web.
                     <br />
                     This page is still in progress!
                     <br />
                  </div>
               </div>
            </Content>
            <Content type={ContentType.ALTERNATE}>
               <div className="flex-col m-auto text-black w-8/12">
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
         <Footer />
      </>
   )
}
