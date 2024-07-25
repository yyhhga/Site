import { FC } from 'react'
import styles from './section.module.css'

export enum sectionType {
   Simple,
   Variant1,
   Variant2,
}

type cssRules = 'bgColor' | 'gradient' | 'bgImage'

export type cssOptionsRecord = {
   [K in cssRules]?: string
}

type sectionProps = {
   type: sectionType
   options?: cssOptionsRecord | undefined
}

export const Section: FC<sectionProps> = ({
   type,
   options,
}) => {
   const i = 0
   const classNames = options
      ? Object.entries(options)
         .map(([key, value]) => `${key}:${value}`)
         .join('; ') + ';'
      : ''

   return (
      <>
         <div className={styles.container}>
            <h1>potato {classNames}</h1>
         </div>
      </>
   )
}
