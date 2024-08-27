import axios from 'axios'
import { useState, useEffect } from 'react'
import { BlogData, StrapiDto } from '../types'

export function useStrapi(): BlogData | null {
   const [data, setData] = useState<StrapiDto>()

   useEffect(() => {
      axios
         .get<StrapiDto>(
            'http://localhost:1337/api/restaurants',
         )
         .then((response) => {
            setData(response.data)
         })
   }, [])

   if (data) {
      return {
         pages: data.meta.pagination,
         articles: data.data,
      }
   }
   return null
}
