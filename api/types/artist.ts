// api/types/artist.ts
import type { BaseEntity, Image, Contact, Social, Category } from './common'
import type { Review } from './review'

export interface Artist extends BaseEntity {
    fullname: null | string;
    name: string;
    biography: string;
    category: Category;
    order: number;
    review: number | null;
    contacts: Contact;
    social: Social;
    cover: Image;
    carousel: Image[];
    reviews: Review[];
}