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
import { cn } from '@/lib/utils'

const notos = Noto_Sans({
   weight: '800',
   style: 'italic',
   variable: '--font-title',
   subsets: ['latin'],
})

export const Navbar: FC<any> = () => {
   return (
      <>
         <div
            className={cn(
               'mr-auto text-lg h-full self-center',
               notos.className,
            )}
         >
            <Link href="/" legacyBehavior passHref>
               yyhga
            </Link>
         </div>
         <NavigationMenu>
            <NavigationMenuList>
               <NavigationMenuItem>
                  <Link
                     href="/about"
                     legacyBehavior
                     passHref
                  >
                     <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                     >
                        About
                     </NavigationMenuLink>
                  </Link>
               </NavigationMenuItem>
               <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                     <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                     >
                        Blog
                     </NavigationMenuLink>
                  </Link>
               </NavigationMenuItem>
            </NavigationMenuList>
         </NavigationMenu>
      </>
   )
}
