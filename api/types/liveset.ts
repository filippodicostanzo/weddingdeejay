// api/types/liveset.ts
import type { Image } from './common'
import type { Artist } from './artist'
import type { Location } from './location'

export interface LiveSet {
    id: number;
    identifier: string;
    name: string;
    description: string;
    date: string;
    artists: Artist;
    locations: Location;
    url: string;
    iframe: string;
    published_at: string;
    created_at: string;
    updated_at: string;
    order: number;
    cover: Image;
    background: Image;
}