// api/types/package.ts
import type { BaseEntity, Image } from './common'

export interface Package extends BaseEntity {
    name: string;
    details: string;
    order: number;
    cover: Image;
}