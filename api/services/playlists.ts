// api/services/playlists.ts

import axios from '../config/axios'
import type { Playlist } from '../types'

export const usePlaylistService = () => {
    const getPlaylists = async (): Promise<Playlist[]> => {
        try {
            const { data } = await axios.get('/playlists')
            return data
        } catch (error) {
            console.error('Errore nel recupero delle playlist:', error)
            throw error
        }
    }

    const getPlaylistByIdentifier = async (identifier: string): Promise<Playlist | undefined> => {
        try {
            const playlists = await getPlaylists()
            return playlists.find(playlist => playlist.identifier === identifier)
        } catch (error) {
            console.error(`Errore nel recupero della playlist ${identifier}:`, error)
            throw error
        }
    }

    const getSortedPlaylists = async (): Promise<Playlist[]> => {
        try {
            const playlists = await getPlaylists()
            return playlists.sort((a, b) => a.order - b.order)
        }
        catch (error) {
            console.error('Errore nel recupero e ordinamento delle playlist:', error)
            throw error
        }
    }

    return {
        getPlaylists,
        getPlaylistByIdentifier,
        getSortedPlaylists
    }
}

