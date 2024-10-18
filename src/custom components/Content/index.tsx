import { FC } from 'react'
import { cn } from '@/lib/utils'

export enum ContentType {
   SIMPLE,
   ALTERNATE,
   FIRST,
}

type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
   type: ContentType
   // children?: ReactNode dont need to put children, we inherit all div applicable  props including onclick
}

const baseTheme = 'flex w-full text-default border-solid'

const variants: { [key in ContentType]: string } = {
   [ContentType.SIMPLE]: ' bg-transparent min-h-full',
   [ContentType.ALTERNATE]:
      'bg-backgroundAlternate h-[50vh]',
   [ContentType.FIRST]: ' bg-backgroundSection h-[50vh] ',
}

export const Content: FC<SectionProps> = ({
   type,
   ...props
}) => {
   return (
      <section className={cn(` ${baseTheme} `)}>
         <div
            className={cn(
               `flex-col w-full h-full  text-default border-solid
                 ${variants[type]} py-3 `,
            )}
            {...props}
         ></div>
      </section>
   )
}
