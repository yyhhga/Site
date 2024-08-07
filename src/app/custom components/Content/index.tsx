import { FC, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export enum contentType {
   Simple,
   Alternate,
   First,
}

type sectionProps = {
   type: contentType
   children?: ReactNode
}

const baseTheme =
   'flex w-full h-[100vh] items-center justify-center text-default border-solid'

const variants: { [key in contentType]: string } = {
   [contentType.Simple]: ' bg-backgroundSection',
   [contentType.Alternate]: 'bg-backgroundAlternate',
   [contentType.First]: ' bg-backgroundSection h-',
}

// const shadow = 'shadow-md'
// const gradient =
//    'bg-gradient-to-b from-black from-10% via-pink-600 via-50% to-slate-600  backdrop-blur-0'

export const Content: FC<sectionProps> = ({
   type,
   children,
}) => {
   return (
      <section className={cn(` ${baseTheme} `)}>
         <div
            className={cn(
               `${baseTheme}  ${variants[type]} `,
            )}
         >
            {children}
         </div>
      </section>
   )
}
