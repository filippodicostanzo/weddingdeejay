// api/services/services.ts
import axios from '../config/axios'
import type { Service } from '../types'

export const useServiceService = () => {
    const getServices = async (): Promise<Service[]> => {
        try {
            const { data } = await axios.get('/services')
            return data
        } catch (error) {
            console.error('Errore nel recupero dei servizi:', error)
            throw error
        }
    }

    const getServiceByIdentifier = async (identifier: string): Promise<Service | undefined> => {
        try {
            const services = await getServices()
            return services.find(service => service.identifier === identifier)
        } catch (error) {
            console.error(`Errore nel recupero del servizio ${identifier}:`, error)
            throw error
        }
    }

    const getSortedServices = async (): Promise<Service[]> => {
        try {
            const services = await getServices()
            return services.sort((a, b) => a.order - b.order)
        } catch (error) {
            console.error('Errore nel recupero e ordinamento dei servizi:', error)
            throw error
        }
    }

    return {
        getServices,
        getServiceByIdentifier,
        getSortedServices
    }
}