<template>
  <div class="table-responsive">
  <table class="table">
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Betrag</th>
      <th scope="col">Name</th>
      <th scope="col">Entfernen</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="geld in gelder" :key="geld.id">
      <th scope="row">{{geld.id}}</th>
      <td>{{ geld.geldBetrag }}</td>
      <td>{{geld.name}}</td>
      <td><delete-button/></td>
    </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import DeleteButton from '@/components/DeleteButton.vue'
export default {
  components: {
    DeleteButton
  },
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
.table-responsive {
  margin-top: 50px;
  width: 70%;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
