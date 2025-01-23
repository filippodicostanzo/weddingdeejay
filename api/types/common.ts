// api/types/common.ts
export interface BaseEntity {
    id: number;
    identifier: string;
    created_at: string;
    updated_at: string;
    published_at: string;
}

export interface ImageFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null | string;
    size: number;
    width: number;
    height: number;
}

export interface Image {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
        large?: ImageFormat;
        small: ImageFormat;
        medium: ImageFormat;
        thumbnail: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: null | any;
    created_at: string;
    updated_at: string;
}

export interface Contact {
    id: number;
    phone: string;
    email: string;
    website: string;
}

export interface Social {
    id: number;
    facebook: string;
    instagram: string;
    youtube: string;
}

export interface Category {
    id: number;
    identifier: string;
    name: string;
    description: null | string;
    published_at: string;
    created_at: string;
    updated_at: string;
    order: number | null;
}