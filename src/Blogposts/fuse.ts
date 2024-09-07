import Fuse from 'fuse.js'
import data from './fuselist.json'
import { indexMdxFile } from './IndexUtils'

export const testFuse = async () => {
   const fuseOptions = {
      // isCaseSensitive: false,
      // includeScore: false,
      // shouldSort: true,
      // includeMatches: false,
      // findAllMatches: false,
      // minMatchCharLength: 1,
      // location: 0,
      // threshold: 0.6,
      // distance: 100,
      // useExtendedSearch: false,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
      // fieldNormWeight: 1,
      // keys: ['title', 'author.firstName'],
      keys: ['tags', 'by', 'hello'],
   }

   const fuse = new Fuse(await indexMdxFile(), fuseOptions)
   // const fuse = new Fuse(await data, fuseOptions)
   // Change the pattern
   const searchPattern = 'test'
   return fuse.search(searchPattern)
}
