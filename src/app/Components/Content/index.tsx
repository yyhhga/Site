import { FC } from 'react'
import styles from './content.module.css'

export enum contentType {
   Simple,
   Variant1,
   Variant2,
}

type cssRules = 'bgColor' | 'gradient' | 'bgImage'

export type cssOptionsRecord = {
   [K in cssRules]?: string
}

type sectionProps = {
   type: contentType
   options?: cssOptionsRecord
}

export const Content: FC<sectionProps> = ({
   type,
   options,
}) => {
   const i = 0
   const classNames = options
      ? Object.entries(options)
           .map(
              ([key, value]) => `${key}:${value}`,
           )
           .join('; ') + ';'
      : ''

   return (
      <section className={styles.container}>
         <h1>potato {classNames}</h1>
      </section>
   )
}
