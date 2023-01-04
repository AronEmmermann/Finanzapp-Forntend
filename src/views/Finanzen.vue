<template>
  <h1>Willkommen, hier finden Sie Ihre Finanzübersicht:)</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="geld in gelder" :key="geld.id">
        <div class="card h-100">
          <img :src="getBild(geld)" class="card-img-top" :alt="geld.name +' '+ geld.geldBetrag">
          <div class="card-body">
            <h5 class="card-title">{{ geld.name }} {{ geld.geldBetrag }}</h5>
            <p class="card-text">
              Geld wurde für {{ geld.name }} {{geld.einnahme ? 'eingenommen' : 'ausgegeben'}} es waren {{ geld.geldBetrag }} Euro.
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
      gelder: [ /*
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
        }*/
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
  },
  mounted() {
    const endpoint = process.env.VUE_APP_BASE_URL + '/api/v1/gelder'
    const requestOptions = {
      method:'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(geld => {
        this.gelder.push(geld)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
