
import axios from '../config/axios'
import type { LiveSet } from '../types'

export const useLiveSetService = () => {
    const getLiveSets = async (): Promise<LiveSet[]> => {
        try {
            const { data } = await axios.get('/livesets')
            return data
        } catch (error) {
            console.error('Errore nel recupero dei live set:', error)
            throw error
        }
    }

    const getLiveSetByIdentifier = async (identifier: string): Promise<LiveSet | undefined> => {
        try {
            const liveSets = await getLiveSets()
            return liveSets.find(liveSet => liveSet.identifier === identifier)
        } catch (error) {
            console.error(`Errore nel recupero del live set ${identifier}:`, error)
            throw error
        }
    }

    const getSortedLiveSets = async (): Promise<LiveSet[]> => {
        try {
            const liveSets = await getLiveSets()
            return liveSets.sort((a, b) => a.order - b.order)
        } catch (error) {
            console.error('Errore nel recupero e ordinamento dei live set:', error)
            throw error
        }
    }

    return {
        getLiveSets,
        getLiveSetByIdentifier,
        getSortedLiveSets
    }
}