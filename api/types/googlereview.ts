// api/types/googlereview.ts

export interface GoogleReview {
  review_id: string
  review_text: string
  rating: number
  review_datetime_utc: string
  review_timestamp: number
  review_link: string
  review_photos: string[] | null
  review_language: string
  like_count: number
  author_id: string
  author_link: string
  author_name: string
  author_photo_url: string
  author_review_count: number
  owner_response_datetime_utc: string | null
  owner_response_timestamp: number | null
  owner_response_text: string | null
  owner_response_language: string | null
  author_reviews_link: string
  author_local_guide_level: number
  service_quality: any | null
  hotel_rating_breakdown: any | null
  review_form: any | null
  review_source: string
}
