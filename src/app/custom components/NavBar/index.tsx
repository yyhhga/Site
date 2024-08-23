'use client'

import { FC } from 'react'
import {
   NavigationMenu,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { Noto_Sans } from 'next/font/google'

const notos = Noto_Sans({
   weight: '800',
   style: 'italic',
   variable: '--font-title',
   subsets: ['latin'],
})

export const Navbar: FC<any> = () => {
   return (
      // use another NavigationMenu for the correct contextmenu to open on hover - bug in radixui
      <NavigationMenu>
         <NavigationMenuList>
            <NavigationMenu>
               <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                     <NavigationMenuLink
                        className={
                           (navigationMenuTriggerStyle(),
                           notos.className)
                        }
                     >
                        yyhga
                     </NavigationMenuLink>
                  </Link>
               </NavigationMenuItem>
            </NavigationMenu>
         </NavigationMenuList>
      </NavigationMenu>
   )
}
