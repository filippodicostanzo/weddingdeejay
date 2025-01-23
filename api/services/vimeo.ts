// api/services/vimeo.service.ts
import type { VimeoResponse, Video } from '../types'

export const useVimeoService = () => {
    const vimeoUrl = 'https://api.vimeo.com/users/151602992/videos'
    const headers = {
        Accept: 'application/json',
        Authorization: 'Bearer 4b6f8b599830b497b6be580e2cc1c74b'
    }

    const getVideos = async (): Promise<VimeoResponse> => {
        try {
            const response = await fetch(vimeoUrl, {
                headers
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            return await response.json()
        } catch (error) {
            console.error('Errore nel recupero dei video:', error)
            throw error
        }
    }

    const getVideoById = async (videoId: string): Promise<Video | undefined> => {
        try {
            const videos = await getVideos()
            return videos.data.find(video => video.uri.includes(videoId))
        } catch (error) {
            console.error(`Errore nel recupero del video ${videoId}:`, error)
            throw error
        }
    }

    const getSortedVideos = async (): Promise<Video[]> => {
        try {
            const videos = await getVideos()
            return videos.data.sort((a, b) =>
                new Date(b.created_time).getTime() - new Date(a.created_time).getTime()
            )
        } catch (error) {
            console.error('Errore nel recupero e ordinamento dei video:', error)
            throw error
        }
    }

    const getLatestVideos = async (limit: number = 6): Promise<Video[]> => {
        try {
            const sortedVideos = await getSortedVideos()
            return sortedVideos.slice(0, limit)
        } catch (error) {
            console.error(`Errore nel recupero degli ultimi ${limit} video:`, error)
            throw error
        }
    }

    return {
        getVideos,
        getVideoById,
        getSortedVideos,
        getLatestVideos
    }
}