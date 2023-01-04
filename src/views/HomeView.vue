<template>
  <div class="home">
    <h1> Dein Konto</h1>
    <div v-for="geld in gelder" :key="geld.id">
    <h2 > {{showSum(geld, gelder)}}</h2>
    </div>
    <geld-form/>
  </div>
</template>

<script>
// @ is an alias to /src

import GeldForm from '@/components/GeldForm.vue'
export default {
  name: 'HomeView',
  components: {
    GeldForm
  },
  data() {
    return {
      gelder: []
    }
  },
  methods: {

    showSum(geld, gelder) {
      let sum = 0;
      for (geld of gelder) {
        sum += geld.geldBetrag;
      }
      return sum ;
    }
  },

  mounted() {
    const endpoint = process.env.VUE_APP_BASE_URL + '/api/v1/gelder'
    const requestOptions = {
      method: 'GET',
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
