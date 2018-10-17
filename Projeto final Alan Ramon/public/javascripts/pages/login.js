const loginComponent = {
    template: '#login-template',
    data: function () {
        return {
            login: '',
            senha: ''
        }
    },
    methods: {
        logar: function() {
            let that = this
            http.login(this.login, this.senha)
                .then(function (res) {
                    Cookies.set('auth', 'true');
                    that.$router.push({ name: 'home' })
                }).catch(function (err) {
                    Cookies.set('auth', 'false');
                    alert('login inválido!')
                })
        }
    }
}