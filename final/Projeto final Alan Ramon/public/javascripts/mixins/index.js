// Componente executado em todas as páginas
const mixinAuth = {
    created: function () {
        let auth = Cookies.get('auth') // pega o cookie da autenticação
        if (auth != 'true') {
            this.$router.push({ name: 'login' })
        }
    }
}