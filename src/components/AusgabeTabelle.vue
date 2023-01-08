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
      <td><button type="button" class="delete" v-on:click="deleteBetrag(geld.id)"> x </button></td>
    </tr>
    </tbody>
  </table>
  </div>
</template>

<script>

export default {
  data () {
    return {
      id: '',
      gelder: []
    }
  },
  methods: {
    deleteBetrag(id) {
      const endpoint = process.env.VUE_APP_BASE_URL + '/api/v1/gelder/' + id
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };

      fetch(endpoint, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    },
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

.delete {
  background-color: rgba(37, 169, 255, 1);;
  color: white;
  font-weight: 600;
  padding: 2px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 50%;
  border: none;
}
</style>
