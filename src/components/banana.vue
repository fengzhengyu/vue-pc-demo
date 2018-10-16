<template>
  <div>
     <h1>{{ msg }}</h1> 
     <button @click="addOne">add one </button>
     <button @click="minusOne">minus one </button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'I am banana',
      price: 10
    }
  },
  methods: {
    addOne(){
      this.$store.commit('increment',this.price)
    },
    minusOne(){
      this.$store.commit('decrement',this.price)
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
