export default {
  template: `
  <div
    v-if='visivel'
    class='modal'
  >
    <div class='modal-content'>
      <p>Tem certeza?</p>
      <div class='botoes'>
        <button @click="fechar(); $emit('confirmado')">Sim</button>
        <button @click='fechar()'>Não</button>
      </div>
    </div>
  </div>
`,

  data() {
    return {
      visivel: false
    }
  },

  methods: {
    abrir() {
      this.visivel = true
    },
    fechar() {
      this.visivel = false
    }
  }
}