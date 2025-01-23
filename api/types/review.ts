// api/types/review.ts
import type { BaseEntity } from './common'
import type { Artist } from './artist'
import type { Location } from './location'

export interface Review extends BaseEntity {
    couple: string;
    date: string;
    location: string;  // nome della location
    review: string;
    value: 'Five' | 'Four' | 'Three' | 'Two' | 'One';
    artists: Artist[];  // artisti associati alla review
    locations?: Location; // location associata (opzionale)
}