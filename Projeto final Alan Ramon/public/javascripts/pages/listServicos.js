const listServicosComponent = {
    mixins: [mixinAuth],
    template: '#list-servico-template',
    data: function () {
        return {
            servicos: []
        }
    },
    created: function () {
        this.load()
    },
    methods: {
        load: function() {
            let that = this

            servicoRequest.findAll()
                .then(function (servicos) {
                    servicos = servicos.data
                    that.servicos = servicos
                }).catch(function (err) {
                    alert('Erro ao Buscar Serviços: ' + err.message)
                })
        },
        editar: function (servico) {
            this.$router.push({ name: 'servicoEdit', params: { id: servico._id } })
        },
        remover: function (servico) {
            let that = this
            servicoRequest.remove(servico._id)
                .then(function () {
                    that.load()
                }).catch(function (err) {
                    alert('Não foi possível remover o serviço: ' + err.message)
                })
        }
    }
}