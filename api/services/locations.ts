// api/services/location.ts

import axios from '../config/axios'
import type { Location } from '../types'

export const useLocationService = () => {
    const getLocations = async (): Promise<Location[]> => {
        try {
            const { data } = await axios.get('/locations')
            return data
        } catch (error) {
            console.error('Errore nel recupero delle location:', error)
            throw error
        }
    }

    const getLocationByIdentifier = async (identifier: string): Promise<Location | undefined> => {
        try {
            const locations = await getLocations()
            return locations.find(location => location.identifier === identifier)
        } catch (error) {
            console.error(`Errore nel recupero della location ${identifier}:`, error)
            throw error
        }
    }

    const getSortedLocations = async (): Promise<Location[]> => {
        try {
            const locations = await getLocations()
            return locations.sort((a, b) => a.order - b.order)
        } catch (error) {
            console.error('Errore nel recupero e ordinamento delle location:', error)
            throw error
        }
    }

    return {
        getLocations,
        getLocationByIdentifier,
        getSortedLocations
    }
}