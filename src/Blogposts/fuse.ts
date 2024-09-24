import Fuse from 'fuse.js'
// import data from './fuselist.json'
import { CompiledMetaData, indexMdxFile } from './mdxUtils'

//TODO: replace indexMdxFile to json import when buildMetaDataIndex is complete
export const searchFuse = async () => {
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

   const mdxFileData = await indexMdxFile()
   const fuse = new Fuse(mdxFileData, fuseOptions)
   // const fuse = new Fuse(await data, fuseOptions)
   // Change the pattern
   const searchPattern = 'test'
   // return {
   //    posts: fuse.search(searchPattern),
   //    path: mdxFileData.path,
   // }
   console.log('this was run!' + mdxFileData)
   return fuse.search(searchPattern)
}

/**
 * Index and Writes to file from indexed data in fuse.js, saved in local dir
 *
 * @param metaData - compiled metadata from mdx files
 *
 * @returns status - status to display if write is successful.
 */
const buildMetaDataIndex = async (
   metaData: CompiledMetaData[],
): Promise<number> => {
   const mdxFileData = await indexMdxFile()

   return 1
}

searchFuse()
   .then((result) => console.log(result))
   .catch((err) => console.error(err))
