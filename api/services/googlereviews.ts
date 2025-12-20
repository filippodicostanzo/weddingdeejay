// api/services/googlereviews.ts
import axios from '../config/axios'
import type { GoogleReview } from '../types'

export const useGoogleReviewsService = () => {
  const getReviews = async (): Promise<GoogleReview[]> => {
    try {
      const { data } = await axios.get('/googlereviews')
      console.log('🌟 Google Reviews fetched:', data?.length)
      return data
    } catch (error) {
      console.error('❌ Error fetching Google reviews:', error)
      throw error
    }
  }

  return {
    getReviews
  }
}
