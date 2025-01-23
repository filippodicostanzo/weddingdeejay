// api/types/service.ts
import type { Image } from './common'

export interface Service {
    id: number;
    identifier: string;
    name: string;
    description: string;
    published_at: string;
    created_at: string;
    updated_at: string;
    order: number;
    cover: Image;
    carousel: Image[];
}