// seo/pages/private/songs.js
export const songsSeo = {
    meta: {
        title: 'Request Songs - Wedding Deejay Client Area',
        description: 'Private area for Wedding Deejay clients to submit song requests and playlists for their event.',
        robots: 'noindex, nofollow',
        image: '/images/header-songs.webp',
        url: '/private/songs'
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "WebForm",
        "name": "Wedding Song Request Form",
        "description": "Form for submitting wedding event songs and playlists",
        "provider": {
            "@type": "Organization",
            "name": "Wedding Deejay"
        },
        "step": [
            {
                "@type": "HowToStep",
                "name": "Event Information",
                "position": "1"
            },
            {
                "@type": "HowToStep",
                "name": "Song Selections",
                "position": "2"
            },
            {
                "@type": "HowToStep",
                "name": "Playlists",
                "position": "3"
            },
            {
                "@type": "HowToStep",
                "name": "Additional Requests",
                "position": "4"
            },
            {
                "@type": "HowToStep",
                "name": "Review and Submit",
                "position": "5"
            }
        ]
    }
};