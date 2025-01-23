import { ref, computed } from 'vue'
import _ from 'lodash'
import { useArtistService } from '~/api/services/artists'
import { usePackageService } from '~/api/services/packages'
import type { Artist, Package } from '~/api/types'

export const useFetchData = () => {
    const artists = ref<Artist[]>([])
    const packages = ref<Package[]>([])
    const artistService = useArtistService()
    const packageService = usePackageService()

    // Definisci l'ordine delle categorie (escluso deejay che è gestito separatamente)
    const categoryOrder = ['saxophonist', 'percussionist', 'vocalist', 'performer']

    // Computed per categorizzare gli artisti
    const categorizedArtists = computed(() => {
        return _.groupBy(artists.value, 'category.identifier')
    })

    // Computed per ottenere solo i DJ
    const deejays = computed(() => {
        return _.chain(artists.value)
            .filter((item: { category: { identifier: string } }) => item.category.identifier === 'deejay')
            .orderBy(['order'], ['asc'])
            .value()
    })

    // Computed per ottenere le categorie disponibili nell'ordine specificato (escluso deejay)
    const availableCategories = computed(() => {
        const categories = _.chain(artists.value)
            .map((item: { category: any }) => item.category)
            .uniqBy('identifier')
            .filter((category: { identifier: string }) => category.identifier !== 'deejay') // Escludiamo deejay
            .value()

        // Ordina le categorie secondo l'ordine specificato
        return _.sortBy(categories, (category: { identifier: string }) => {
            const index = categoryOrder.indexOf(category.identifier)
            return index === -1 ? categoryOrder.length : index
        })
    })

    // Recupera gli artisti usando il service
    const fetchArtists = async () => {
        try {
            artists.value = await artistService.getSortedArtists()
        } catch (error) {
            console.error('Error fetching artists:', error)
            throw error
        }
    }

    // Recupera i pacchetti usando il service
    const fetchPackages = async () => {
        try {
            packages.value = await packageService.getSortedPackages()
        } catch (error) {
            console.error('Error fetching packages:', error)
            throw error
        }
    }

    // Helper per ottenere gli artisti per categoria
    const getArtistsByCategory = (categoryId: string) => {
        return _.chain(artists.value)
            .filter((item: { category: { identifier: string } }) => item.category.identifier === categoryId)
            .orderBy(['order'], ['asc'])
            .value()
    }

    // Helper per ottenere un artista specifico
    const getArtistByIdentifier = async (identifier: string) => {
        return await artistService.getArtistByIdentifier(identifier)
    }

    // Helper per ottenere un pacchetto specifico
    const getPackageByIdentifier = async (identifier: string) => {
        return await packageService.getPackageByIdentifier(identifier)
    }

    return {
        fetchArtists,
        fetchPackages,
        deejays,
        packages: computed(() => packages.value),
        availableCategories,
        getArtistsByCategory,
        getArtistByIdentifier,
        getPackageByIdentifier,
        categorizedArtists
    }
}