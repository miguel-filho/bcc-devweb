const homeComponent = {
    mixins: [mixinAuth],
    template: '#home-template',
    data: function () {
        return {
        }
    },
    methods: {
        sair: function () {
            Cookies.remove('auth')
            this.$router.push({ name: 'login' })
        }
    }
}