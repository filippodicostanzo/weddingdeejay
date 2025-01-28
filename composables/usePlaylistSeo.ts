// composables/usePlaylistsSeo.js
import { playlistsSeo } from '~/seo/pages/playlists';
import { generateSeoMeta } from '~/config/seo';
import type { Playlist } from '~/api/types';

export function usePlaylistsSeo(playlists: Playlist[] = []) {
    const baseMeta = playlistsSeo.meta;

    const dynamicSchema = {
        ...playlistsSeo.schema,
        "hasPart": playlists.map(playlist => ({
            "@type": "MusicPlaylist",
            "name": playlist.name,
            "description": playlist.name,
            "url": `${process.env.NUXT_PUBLIC_SITE_URL}/playlists#${playlist.identifier}`,
            "genre": "Wedding Music"
        }))
    };

    useHead(generateSeoMeta(baseMeta));
    useHead({
        script: [{
            type: 'application/ld+json',
            innerHTML: JSON.stringify(dynamicSchema)
        }]
    });
}