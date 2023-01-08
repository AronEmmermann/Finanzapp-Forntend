<template>
  <div class="about">
    <h1 class="h1-1">Deine Geldflüße</h1>
    <ausgabe-tabelle/>
  </div>
</template>

<script>
// @ is an alias to /src

import AusgabeTabelle from '@/components/AusgabeTabelle.vue'
export default {
  name: 'AboutView',
  components: {
    AusgabeTabelle
  }
}
</script>

<style>
.h1-1 {
  color: rgba(0, 59, 77, 1);
  margin-top: 30px;
}
</style>
