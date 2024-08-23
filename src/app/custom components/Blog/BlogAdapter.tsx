import { useStrapi } from './adapters/useStrapi'

export function useBlogPosts() {
   return useStrapi()
}
