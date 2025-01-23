// api/types/location.ts
import type { BaseEntity, Image } from './common'

export interface Location extends BaseEntity {
    name: string;
    url: string;
    description: string;
    city: string;
    order: number;
    logo: Image;
    cover: Image;
}