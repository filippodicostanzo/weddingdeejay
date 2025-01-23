// composables/useAxios.ts
import { ref } from 'vue'

export function useAxios() {
    const data = ref(null)
    const error = ref(null)
    const loading = ref(false)

    const execute = async (apiCall: () => any) => {
        loading.value = true
        error.value = null

        try {
            const response = await apiCall()
            data.value = response
            return response
        } catch (e) {
            // @ts-ignore
            error.value = e
            throw e
        } finally {
            loading.value = false
        }
    }

    return {
        data,
        error,
        loading,
        execute
    }
}