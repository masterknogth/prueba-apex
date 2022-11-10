<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Dashboard from './components/Dashboard.vue'
</script>

<template style="background:red">  
  <div >    
    <Dashboard/>
  </div>
</template>

<script>
export default {
  name: 'App',

  components: {
    Dashboard
  },

  data: () => ({
    //
  }),
}
</script>

<style >

</style>
