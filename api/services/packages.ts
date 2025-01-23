// api/services/packages.ts

import axios from '../config/axios'
import type { Package } from '../types'

export const usePackageService = () => {
    const getPackages = async (): Promise<Package[]> => {
        try {
            const { data } = await axios.get('/packages')
            return data
        } catch (error) {
            console.error('Errore nel recupero dei pacchetti:', error)
            throw error
        }
    }

    const getPackageByIdentifier = async (identifier: string): Promise<Package | undefined> => {
        try {
            const packages = await getPackages()
            return packages.find(pkg => pkg.identifier === identifier)
        } catch (error) {
            console.error(`Errore nel recupero del pacchetto ${identifier}:`, error)
            throw error
        }
    }

    const getSortedPackages = async (): Promise<Package[]> => {
        try {
            const packages = await getPackages()
            return packages.sort((a, b) => a.order - b.order)
        } catch (error) {
            console.error('Errore nel recupero e ordinamento dei pacchetti:', error)
            throw error
        }
    }

    return {
        getPackages,
        getPackageByIdentifier,
        getSortedPackages
    }
}