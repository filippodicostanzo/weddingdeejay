import axios from '../config/axios'
import type { Review } from '../types'

export const useReviewService = () => {
    const getReviews = async (): Promise<Review[]> => {
        try {
            const { data } = await axios.get('/reviews')
            return data
        } catch (error) {
            console.error('Errore nel recupero delle recensioni:', error)
            throw error
        }
    }

    const getReviewByIdentifier = async (identifier: string): Promise<Review | undefined> => {
        try {
            const reviews = await getReviews()
            return reviews.find(review => review.identifier === identifier)
        } catch (error) {
            console.error(`Errore nel recupero della recensione ${identifier}:`, error)
            throw error
        }
    }

    return {
        getReviews,
        getReviewByIdentifier
    }
}