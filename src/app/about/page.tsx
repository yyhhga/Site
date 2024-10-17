import {
   ContentType,
   Content,
} from '@/custom components/Content'
import Image from 'next/image'

import profilePic from '../../../public/hj.jpeg'
export default function About() {
   return (
      <Content type={ContentType.SIMPLE}>
         <div className="flex flex-col opacity-100 mx-auto px-6 items-center md:w-3/6 md:px-0">
            <div className="flex justify-center ">
               <Image
                  src={profilePic}
                  alt="me"
                  className="w-1/2 md:w-1/3 h-auto rounded-3xl"
               />
            </div>
            <div>
               <h1>Hi.</h1>
               <p>
                  I'm Hao Jian,a software engineer who has
                  built and driven tech initiatives for 7
                  years.
                  <br />
                  I specialise in transformation, with
                  experience both in PM(Project, Product,
                  Program) and also as a engineer, where i
                  started off professionally with Ruby on
                  Rails, then to Node in the current day.
                  <br />
                  From legacy apps, greenfield apps, to
                  transitioning from the 2 as well as post
                  deployment support, from delivery
                  management roles,engineering roles and
                  solutioning, I've done all of it, heck
                  I've led most of it.
               </p>
               <br />
               <h3>My History</h3>
               <p>
                  In 2009, as a aimless boy I joined the
                  Diploma in IT course at Singapore
                  Polytechnic, where I found myself loving
                  the whole tech ecosystem and its
                  possibilities- and I've been enamoured
                  ever since.
                  <br />
                  Since then, I went on to the military and
                  to Uni, graduating from University of
                  Glasgow/Singapore Institute of Technology
                  and happily dabbling away at technology
                  for many years now.
               </p>
               <p>
                  In my free time, I like to explore
                  different hobbies and interests with less
                  hype. For now, outside of tech I'm
                  exploring travel, gym and coffee.
                  Previously I have done kendo, karate,
                  swimming among others.
               </p>
               <br />
               <b>
                  The opinions expressed herein are my own
                  personal opinions and do not represent my
                  employer’s view in any way.
               </b>
            </div>
         </div>
      </Content>
   )
}
