import { Navbar } from './custom components/NavBar'
import { Footer } from './custom components/Footer'
import {
   Content,
   contentType,
} from './custom components/Content'

export default function Home() {
   return (
      <>
         <main>
            <div
               className={
                  'flex sticky justify-center min-h-min min-w-full top-0 bg-navBar shadow-md'
               }
            >
               <Navbar />
            </div>
            <Content type={contentType.Simple}>
               <div className="text-black opacity-100">
                  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                     Hi.
                  </h1>
                  <br />
                  <p>
                     I'm a software engineer and have been
                     in the industry for 7 years.
                     <br />
                     Welcome to my sides of the web.
                     <br />
                     This page is still in progress!
                     <br />
                  </p>
               </div>
            </Content>
            <Content type={contentType.Alternate}>
               test
            </Content>
         </main>
         <Footer />
      </>
   )
}
