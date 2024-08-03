import styles from './page.module.css'
import {
   cssOptionsRecord,
   Content,
   contentType,
} from './Components/Content'
import { Navbar } from './Components/NavBar'
import { Footer } from './Components/Footer'

export default function Home() {
   const properties: cssOptionsRecord = {
      bgColor: 'white',
      gradient: '',
   }
   return (
      <>
         <main>
            <Navbar item={'test'} />
            <Content
               type={contentType.Simple}
               options={properties}
            />
            <Content type={contentType.Simple} />
         </main>
         <Footer />
         
      </>
   )
}
