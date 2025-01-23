// api/types/playlist.ts
import type { BaseEntity } from './common'

export interface Playlist extends BaseEntity {
    name: string;
    url: string;
    order: number;
}