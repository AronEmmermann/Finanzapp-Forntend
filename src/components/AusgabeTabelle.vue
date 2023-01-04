<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Betrag</th>
      <th scope="col">Name</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="geld in gelder" :key="geld.id">
      <th scope="row">{{geld.id}}</th>
      <td>{{ geld.geldBetrag }}</td>
      <td>{{geld.name}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data () {
    return {
      gelder: []
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

<style>

</style>
