export default defineNuxtRouteMiddleware((to) => {
    const { checkAccess } = useAuth()

    // Verifica se siamo nel server
    if (process.server) return

    // Verifica se l'utente sta cercando di accedere alla pagina songs
    if (to.path.includes('/private/songs')) {
        const hasAccess = checkAccess()

        if (!hasAccess) {
            return navigateTo('/private')
        }
    }
})