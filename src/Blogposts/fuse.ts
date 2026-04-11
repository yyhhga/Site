import Fuse from 'fuse.js'
// import data from './fuselist.json'
import {
   CompiledMetaData,
   fetchOldIndexMdxFile,
} from './mdxUtils'

//TODO: replace indexMdxFile to json import when buildMetaDataIndex is complete
export const searchFuse = async (
   mdxMetaData: CompiledMetaData[],
   searchTerm: string,
) => {
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

   const mdxFileData = mdxMetaData
   const fuse = new Fuse(mdxFileData, fuseOptions)
   // const fuse = new Fuse(await data, fuseOptions)
   // Change the pattern
   // const searchPattern = 'test'
   // return {
   //    posts: fuse.search(searchPattern),
   //    path: mdxFileData.path,
   // }
   return fuse.search(searchTerm)
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
   const mdxFileData = await fetchOldIndexMdxFile()
   // const fuseIndex = Fuse.createIndex(mdxFileData)
   return 1
}

// const index = await oldIndexMdxFile()
// searchFuse(oldIndexMdxFile(), "")
//    // .then((result) => console.log(result))
//    .catch((err) => console.error(err))
