// composables/useAuth.ts
export const useAuth = () => {
    const checkAccess = (): boolean => {
        if (process.server) return false
        return localStorage.getItem('private_access') === 'true'
    }

    const setAccess = (value: boolean): void => {
        if (process.server) return
        localStorage.setItem('private_access', value.toString())
    }

    return {
        checkAccess,
        setAccess
    }
}