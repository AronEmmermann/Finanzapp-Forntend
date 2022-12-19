<template>
  <h1>Willkommen, hier finden Sie Ihre Finanzübersicht:)</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="geld in gelder" :key="geld.id">
        <div class="card h-100">
          <img :src="getBild(geld)" class="card-img-top" :alt="geld.bezeichnung +' '+ geld.geldBetrag">
          <div class="card-body">
            <h5 class="card-title">{{ geld.bezeichnung }} {{ geld.geldBetrag }}</h5>
            <p class="card-text">
              Geld wurde für {{ geld.bezeichnung }} {{geld.einnahme ? 'eingenommen' : 'ausgegeben'}} es waren {{ geld.geldBetrag }} Euro.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Finanzen',
  data () {
    return {
      gelder: [
        {
          id: 1,
          bezeichnung: 'Breze',
          geldBetrag: 5,
          einnahme: false
        },
        {
          id: 2,
          bezeichnung: 'urlaubsgeld',
          geldBetrag: 55,
          einnahme: true
        }
      ]
    }
  },
  methods: {
    getBild(geld){
      if (geld.einnahme === true){
        return require('../assets/einnahme.png')
      }else if (geld.einnahme === false){
        return require('../assets/ausgabe.png')
      }
    }
  }
}
</script>

<style scoped>

</style>
