<template>

  <!-- Button trigger modal -->
  <button type="button" class="btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    +
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title" id="exampleModalLabel">Betrag hinzufügen</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <label> Betrag:</label>
            <input type="number" required v-model="betrag">
            <div v-if="betragError" class="error"> {{betragError}} </div>

            <label> Name:</label>
            <input type="text" required v-model="name">

            <label> Typ </label>
            <select v-model="typ">
              <option value="true"> Einnahme </option>
              <option value="false"> Ausgabe </option>
            </select>
          </form>
          <button class="button" type="submit" @click.prevent="handleSubmit">Bestätigen</button>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      betrag: '',
      name: '',
      typ: false,
      betragError: ''
    }
  },
  methods: {
     handleSubmit() {
       const endpoint = process.env.VUE_APP_BASE_URL + '/api/v1/gelder'

       var myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");

       var raw = JSON.stringify({
         "name": this.name,
         "geldBetrag": this.betrag,
         "einnahme": this.typ
       });

       var requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: raw,
         redirect: 'follow'
       };

       fetch(endpoint, requestOptions)
         .catch(error => console.log('error', error));
    }
  }
}
</script>

<style>
form {
  max-width: 350px;
  margin: 10px auto;
  background: aliceblue;
  text-align: left;
  padding: 10px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input, select {
  display:block;
  padding: 1px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid;
  background: aliceblue;
  color: #555;
}
.button {
  background-color: #0b6dff;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 20px;
  cursor: pointer;
  border-radius: 30px;
}
.error {
  color: darkred;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
.btn-primary{
  background-color: #0b6dff;
  border: none;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 50px;
  border-radius: 50%;
}
.modal-title{
  margin-left: 100px;
  font-size: 2em;
}
.modal-header{
  background-color: aliceblue;
}
.modal-body{
  background-color: aliceblue;
}

.modal-content{
  width: 450px;
  height: 250px;
}

</style>
