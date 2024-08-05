import { cn } from '@/lib/utils'
import { FC } from 'react'

export const Footer: FC<any> = (item: any) => {
   return (
      <div className="flex min-w-full min-h-20 border-none">
         <div className="m-auto">
            Built with NextJS and Shadcn
         </div>
      </div>
   )
}
