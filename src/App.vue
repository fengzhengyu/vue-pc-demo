<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>{{totalPrice}}</div>
     <Apple></Apple>
     <Banana></Banana>
  </div>
</template>
<script>
import Apple from '@/components/HelloWorld'
import Banana from '@/components/banana'
export default {
  name: 'App',
  computed: {
    totalPrice (){
      return this.$store.state.totalPrice
    }
  },
  components: {
    Apple,
    Banana
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
