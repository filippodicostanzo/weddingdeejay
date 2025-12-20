import type { YoutubeVideo } from '~/api/types'

export const useYoutubeService = () => {
  const getVideos = async (channelId: string = 'UCbsFSdZDpD2vCNHD6Vyf-PQ', count: number = 10) => {
    try {
      console.log('🎬 Fetching YouTube videos from:', `https://php.localidautore.it/youtube/?channel=${channelId}&count=${count}`)
      const response = await $fetch<YoutubeVideo[]>(`https://php.localidautore.it/youtube/?channel=${channelId}&count=${count}`)
      console.log('🎬 YouTube API Response:', response)
      console.log('🎬 YouTube videos data:', response)
      console.log('🎬 Number of videos:', response?.length)
      
      // L'API ritorna direttamente l'array, lo wrappiamo in un oggetto per consistenza
      return { data: response }
    } catch (error) {
      console.error('❌ Error fetching YouTube videos:', error)
      throw error
    }
  }

  return {
    getVideos
  }
}
