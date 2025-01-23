export default {
    cookieControl: {
        colors: {
            barBackground: '#222',
            barButtonBackground: '#fff',
            barButtonColor: '#222',
            barButtonHoverBackground: '#282834',
            barButtonHoverColor: '#fff',
            barTextColor: '#fff',
        },

        cookies: {
            necessary: [
                {
                    description: {
                        it: 'Utilizzato per il controllo dei cookie.',
                        en: 'Used for cookie control.',
                    },
                    name: {
                        it: 'Cookie Necessari',
                        en: 'Necessary Cookie',
                    },
                }
            ],
            optional: [
                {
                    id: 'op',
                    name: 'Optional Cookie',
                    links: {
                        'https://www.google.com/analytics': 'Google Analytics',
                    },
                    targetCookieIds: ['_o', '_p', '_t'],
                },
            ],
        },
        locales: ['en', 'it'],
    }
}