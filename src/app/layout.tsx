import type { Metadata, Viewport } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/custom components/NavBar'
import { Footer } from '@/custom components/Footer'

const openSans = Open_Sans({
   subsets: ['latin'],
   display: 'swap',
})
export const metadata: Metadata = {
   title: 'Bamboozle',
   description: 'Whimsical Thinking',
}

export const viewport: Viewport = {
   width: 'device-width',
   initialScale: 1,
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body
            className={cn(
               'mt-0 pb-8 max-w-[100vw] min-h-screen max-h-fit bg-[#1E293A] bg-gradient-to-tr from-backgroundSection via-slate-800 to-stone-900 backdrop-blur-3xl antialiased text-base text-default',
               openSans.className,
            )}
         >
            <nav
               className={
                  'flex fixed justify-center min-h-min min-w-full bg-navBar px-4 z-50'
               }
            >
               <Navbar />
            </nav>
            <main className="pt-16">{children}</main>
            {/* <footer>
               <Footer />
            </footer> */}
         </body>
      </html>
   )
}
