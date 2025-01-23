// api/types/vimeo.types.ts
export interface Video {
    uri: string
    name: string
    description: string
    created_time: string
    pictures: {
        sizes: Array<{
            width: number
            height: number
            link: string
        }>
    }
    // Aggiungi altre proprietà del video secondo necessità
}

export interface VimeoResponse {
    total: number
    page: number
    per_page: number
    paging: {
        next: string | null
        previous: string | null
        first: string
        last: string
    }
    data: Video[]
}