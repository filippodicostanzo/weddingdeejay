// api/types/youtube.ts

export interface YoutubeVideo {
  video_id: string
  title: string
  description: string
  thumbnail: string
  link: string
  published_at: string
  view_count: number
  like_count: number
  comment_count: number
  duration: string
}
