// api/types/vimeo.types.ts
export interface Video {
    uri: string
    name: string
    description: string
    created_time: string
    embed: {
        html: string;
        badges: {
            hdr: boolean;
            live: {
                streaming: boolean;
                archived: boolean;
            };
            staff_pick: {
                normal: boolean;
                best_of_the_month: boolean;
                best_of_the_year: boolean;
                premiere: boolean;
            };
            vod: boolean;
            weekend_challenge: boolean;
        };
        interactive: boolean;
    }
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