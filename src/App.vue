<template>

  <Navbar />
  

  <div class="container my-4">
    <h2>Todos os Exames</h2>

    <SearchBar />

    <div class="row">
      <AddExameCard />
      <ExameCard v-for="index in amountExames" :key="index" :id="index" />
    </div>

  </div>

</template>

<script>
import SearchBar from './components/SearchBar'
import Navbar from './components/Navbar'
import ExameCard from './components/ExameCard'
import AddExameCard from './components/AddExameCard'

export default {
  name: 'App',
  data() {
    return {
      amountExames: 4
    }
  },
  components: {
    SearchBar,
    Navbar,
    ExameCard,
    AddExameCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
