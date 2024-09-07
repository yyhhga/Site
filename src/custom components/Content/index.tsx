import { FC, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export enum ContentType {
   SIMPLE,
   ALTERNATE,
   FIRST,
}

type SectionProps = {
   type: ContentType
   children?: ReactNode
}

const baseTheme =
   'flex w-full h-[50vh] text-default border-solid'

const variants: { [key in ContentType]: string } = {
   [ContentType.SIMPLE]: ' bg-backgroundSection',
   [ContentType.ALTERNATE]: 'bg-backgroundAlternate',
   [ContentType.FIRST]: ' bg-backgroundSection ',
}

export const Content: FC<SectionProps> = ({
   type,
   children,
}) => {
   return (
      <section className={cn(` ${baseTheme} `)}>
         <div
            className={cn(
               `flex w-full h-full  text-default border-solid
                 ${variants[type]} py-3 `,
            )}
         >
            {children}
         </div>
      </section>
   )
}
