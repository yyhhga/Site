import { FC } from 'react'

export const Footer: FC<any> = (item: any) => {
   return (
      <div className="flex bg-transparent min-w-full min-h-[5vh] bottom-0 border-[0.5px] mt-8">
         <div className="m-auto">
            Built with NextJS and Shadcn
         </div>
      </div>
   )
}
