import { FC } from 'react'

export const Footer: FC<any> = (item: any) => {
   return (
      <div className="flex min-w-full min-h-[5vh] bottom-0 border-s-black bg-footer">
         <div className="m-auto">
            Built with NextJS and Shadcn
         </div>
      </div>
   )
}
