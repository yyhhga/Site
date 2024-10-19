import { FC } from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type ImageInfo = {
   src: string | StaticImport
   altText: string
}

export const BlogImage: FC<ImageInfo> = ({
   src,
   altText,
}) => {
   //scaling factor
   const aspectRatio = 16 / 9
   const width = 500
   const height = width / aspectRatio

   return (
      <>
         <div className="flex justify-center my-6">
            <Image
               src={src}
               alt={altText}
               width={width}
               height={height}
               className="w-1/2 md:w-5/6 h-full rounded-xl"
            />
         </div>
      </>
   )
}
