// api/services/artists.ts

import axios from '../config/axios'
import type { Artist } from '../types'

export const useArtistService = () => {
    const getArtists = async (): Promise<Artist[]> => {
        try {
            const { data } = await axios.get('/artists')
            return data
        } catch (error) {
            console.error('Errore nel recupero degli artisti:', error)
            throw error
        }
    }

    const getArtistByIdentifier = async (identifier: string): Promise<Artist | undefined> => {
        try {
            const artists = await getArtists()
            return artists.find(artist => artist.identifier === identifier)
        } catch (error) {
            console.error(`Errore nel recupero dell'artista ${identifier}:`, error)
            throw error
        }
    }

    const getSortedArtists = async (): Promise<Artist[]> => {
        try {
            const artists = await getArtists()
            return artists.sort((a, b) => a.order - b.order)
        } catch (error) {
            console.error('Errore nel recupero e ordinamento degli artisti:', error)
            throw error
        }
    }

    return {
        getArtists,
        getArtistByIdentifier,
        getSortedArtists
    }
}

