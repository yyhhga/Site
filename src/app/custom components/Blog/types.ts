export type StrapiDto = {
   data: StrapiBlogPost[]
   meta: Metadata
}

export type StrapiBlogPost = {
   id: number
   attributes: StrapiBlogContent
}

export type StrapiBlogContent = {
   name: string
   description: StrapiBlogParagraphs
   createdAt: string
   updatedAt: string
   publishedAt: string
}

export type StrapiBlogParagraphs = {
   type: string
   children: StrapiBlogText
}

export type StrapiBlogText = {
   type: string
   text: string
}

export type Metadata = {
   pagination: PageDetails
}

export type PageDetails = {
   page: number
   pageSize: number
   pageCount: number
   total: number
}

export type BlogData = {
   articles: StrapiBlogPost[]
   pages: PageDetails
}
