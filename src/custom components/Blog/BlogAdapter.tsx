import { useStrapi } from './adapters/useStrapi'
import { BlogData } from './types'

export function useBlogPosts(): BlogData | null {
   return useStrapi()
}
