'use client'
import { Content, ContentType } from '../Content'
import { useBlogPosts } from './BlogAdapter'

export const Blog = () => {
   const payload = useBlogPosts()
   return (
      <Content type={ContentType.SIMPLE}>
         <div className="flex m-auto text-black">
            {payload?.articles.map(
               (article) => article.attributes.name,
            )}
         </div>
      </Content>
   )
}
