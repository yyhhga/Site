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

export const Navbar: FC<any> = () => {
   return (
      // use another NavigationMenu for the correct contextmenu to open on hover - bug in radixui
      <NavigationMenu>
         <NavigationMenuList>
            <NavigationMenu>
               <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                     <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                     >
                        Home
                     </NavigationMenuLink>
                  </Link>
               </NavigationMenuItem>
            </NavigationMenu>
         </NavigationMenuList>
      </NavigationMenu>
   )
}
