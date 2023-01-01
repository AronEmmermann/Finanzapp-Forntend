<template>
  <form @submit.prevent="handleSubmit">
    <label> Betrag:</label>
    <input type="number" required v-model="betrag">
    <label> Name:</label>
    <input type="text" required v-model="name">
    <label> Typ </label>
    <select v-model="typ">
      <option value="einnahme"> Einnahme </option>
      <option value="ausgabe"> Ausgabe </option>
    </select>
    <button class="button">Bestätigen</button>
  </form>


</template>

<script>
export default {
  data() {
    return {
      betrag: '',
      name: '',
      typ: ''

    }
  },
  methods: {
    handleSubmit() {
      console.log('bestätigt')
    }
  }
}
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: aliceblue;
  text-align: left;
  padding: 40px;
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
  padding: 10px 6px;
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
  margin-top: 20px ;
  cursor: pointer;
  border-radius: 16px;
  text-align: center;
}

</style>
