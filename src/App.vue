
<template>

  <h1>{{ title }}</h1>
  <div v-if="showModal">
  <ModalVue :header="title" :text="text" theme="sale" @close="showModal = !showModal"></ModalVue>
  </div>
  <div>
  <button @click="showModal = !showModal" >Show Modal</button>
  
  </div>
  <nav class="nav">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'signup' }">Signup</router-link>
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
    <router-link :to="{ name: 'infiniteScroll'}"> Infinite Scroller</router-link>
  </nav>
  <router-view></router-view>
  <!-- <SignupForm></SignupForm> -->
</template>

<script>
import ModalVue from './components/ModalVue.vue'
// import SignupForm from './components/SignupForm.vue'
export default {
  name: 'App',
  components: {
    ModalVue,
    // SignupForm
  },
  data () {
    return {
      title: 'My First Vue app!',
      text: 'Hey there, Its Ajar',
      showModal: false
    }
  },
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav {
  padding: 30px;
  justify-content: space-between;
  display: flex;
  padding: 10px;
  text-align: justify;
  font: 15px/1.5 Arial, Helvetica, sans-serif;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  background-color: lightblue;
  text-decoration: solid;

  
}
</style>
