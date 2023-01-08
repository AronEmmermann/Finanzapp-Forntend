this.refs$input

<template>
  <div class="center">
  <div class="home">
    <h1 class="h1"> Dein Konto</h1>
    <div v-for="geld in gelder.slice(0, 1)" :key="geld.id" >
      <h1 class="h2">{{showSum(geld,gelder)}} €</h1>
      </div>
  <geld-form/>
  </div>
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
      sum: ' ',
      gelder: []
    }
  },
 methods: { showSum (geld, gelder) {
      let sum = 0;
      for (geld of gelder) {
        sum += geld.geldBetrag;
      }
      return sum;
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

<style>
.h1 {
  padding-top: 70px;
  color: white;
}
.h2 {
  padding-top: 50px;
  color: white;
}
.center {
  background: rgba(37, 169, 255, .4);
  width: 400px;
  height: 400px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
}
.home {
  align-self: center;
  margin-left: auto;
  margin-right: auto;
}

</style>
