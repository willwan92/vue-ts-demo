<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <HelloTs msg="ts特性" @add="handleAddFeature"/>
    <Test msg="fasd" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from './components/HelloWorld.vue';
import HelloTs from './components/HelloTs.vue';
import Test from './components/Test.vue';
import { Feature } from './components/HelloTs.vue';

@Component({
  components: {
    // HelloWorld,
    HelloTs,
    Test
  },
})
export default class App extends Vue {
  private handleAddFeature(feature: Feature) {
    console.log(feature);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
