<template>
  <div class="about">
    <h1>This is an about page</h1>
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
