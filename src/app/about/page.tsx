import {
   ContentType,
   Content,
} from '@/custom components/Content'
import Image from 'next/image'

import profilePic from '../../../public/cartoon-potato-icon-png.png'
export default function About() {
   return (
      <Content type={ContentType.SIMPLE}>
         <div className="flex flex-row text-black opacity-100 m-auto items-center w-3/6">
            <div className="flex-wrap hidden md:flex ">
               <Image src={profilePic} alt="Potato" />
            </div>
            <div className="grow">
               <h1>
                  Hi.
                  <div className="flex-wrap h-4 w-4 block md:hidden ">
                     <Image src={profilePic} alt="Potato" />
                  </div>
               </h1>
               <br />
               <p>
                  I'm a software engineer who has built and
                  driven tech initiatives for 7 years.
               </p>
               <p>
                  I'm passionate about melding business and
                  technical fundamentals - I find that the
                  bridge between the 2 disciplines is
                  required for successful outcomes.
               </p>
               <br />
               Welcome to my side of the web.
            </div>
         </div>
      </Content>
   )
}
