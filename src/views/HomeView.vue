<template>
  <div class="home">
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
  }
}


</script>
