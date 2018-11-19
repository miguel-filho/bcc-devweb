const cadastroServicoComponent = {
    template: '#cadastro-servico-template',
    mixins: [mixinAuth],
    data: function () {
        return {
            nome: '',
            tipo: '',
            valor: 0,
            formaPagamento: '',
            parcelas: 1,
            id: null
        }
    },
    created: function() {
        let that = this
        this.id = this.$route.params.id;

        if (this.id) {
            servicoRequest.findOne(this.id)
                .then(function (servico) {
                    servico = servico.data
                    that.nome = servico.nome
                    that.tipo = servico.tipo
                    that.valor = servico.valor
                    that.formaPagamento = servico.formaPagamento
                    that.parcelas = servico.parcelas
                }).catch(function (err) {
                    alert('Não Foi Possível Encontrar o Servico')
                })
        }
    },
    methods: {
        cadastrar: function () {
            let httpMethod

            if (this.id)
                httpMethod = servicoRequest.edit.bind(servicoRequest)
            else
                httpMethod = servicoRequest.save.bind(servicoRequest)

            httpMethod({
                _id: this.id,
                nome: this.nome,
                tipo: this.tipo,
                valor: this.valor,
                formaPagamento: this.formaPagamento,
                parcelas: this.parcelas
            }).then(function() {
                alert('Serviço Salvo com sucesso!')
            }).catch(function (err) {
                alert('erro: ' + err.message)
            }).finally(function () {
                this.nome = ''
                this.tipo = ''
                this.valor = ''
                this.formaPagamento = ''
                this.parcelas = ''
            })
        }
    }
}