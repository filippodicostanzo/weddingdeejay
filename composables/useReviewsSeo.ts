// composables/useReviewsSeo.ts
import { reviewsSeo } from '~/seo/pages/reviews';
import { generateSeoMeta } from '~/config/seo';
import type { Review } from '~/api/types/review';

// Funzione di utilità per convertire il rating testuale in numero
const getRatingValue = (rating: Review['value']): number => {
    const ratings = { 'One': 1, 'Two': 2, 'Three': 3, 'Four': 4, 'Five': 5 };
    return ratings[rating] || 5;
};

export function useReviewsSeo(reviews: Review[] = []) {
    // Base meta configuration
    const baseMeta = reviewsSeo.meta;

    // Creiamo uno schema dinamico che include tutte le recensioni
    const dynamicSchema = {
        ...reviewsSeo.schema,
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": reviews.map((review, index) => ({
                "@type": "Review",
                "position": index + 1,
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": getRatingValue(review.value),
                    "bestRating": 5
                },
                "author": {
                    "@type": "Person",
                    "name": review.couple
                },
                "datePublished": review.date,
                "reviewBody": review.review,
                "itemReviewed": {
                    "@type": "Service",
                    "name": "Wedding DJ Entertainment",
                    "provider": {
                        "@type": "Organization",
                        "name": "Wedding Deejay",
                        "areaServed": "Amalfi Coast"
                    }
                }
            }))
        }
    };

    // Applichiamo la configurazione SEO
    useHead(generateSeoMeta(baseMeta));
    useHead({
        script: [{
            type: 'application/ld+json',
            innerHTML: JSON.stringify(dynamicSchema)
        }]
    });
}