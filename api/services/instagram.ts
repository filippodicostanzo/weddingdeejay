// api/services/instagram.service.ts
import type { InstagramPost } from '../types/instagram.types'

export const useInstagramService = () => {
    const instagramUrl = 'https://php.localidautore.it/rapidinsta/index.php'
    const params = {
        account: '12352344190',
        count: '9'
    }

    const getPosts = async (): Promise<InstagramPost[]> => {
        try {
            const url = `${instagramUrl}?account=${params.account}&count=${params.count}`
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            return await response.json()
        } catch (error) {
            console.error('Errore nel recupero dei post Instagram:', error)
            throw error
        }
    }

    const getSortedPosts = async (): Promise<InstagramPost[]> => {
        try {
            const posts = await getPosts()
            return posts.sort((a, b) =>
                new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime()
            )
        } catch (error) {
            console.error('Errore nel recupero e ordinamento dei post:', error)
            throw error
        }
    }

    const getLatestPosts = async (limit: number = 6): Promise<InstagramPost[]> => {
        try {
            const sortedPosts = await getSortedPosts()
            return sortedPosts.slice(0, limit)
        } catch (error) {
            console.error(`Errore nel recupero degli ultimi ${limit} post:`, error)
            throw error
        }
    }

    return {
        getPosts,
        getSortedPosts,
        getLatestPosts
    }
}