<template>
  <div id="app">
    <Menu id='menu'></Menu>
    <main>
      <a href='/'>
        <img src="./assets/dog.jpg" id='dog' />
      </a>
      <router-view/>
    </main>
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#menu {
  justify-content: flex-start;
}
main {
  flex-grow: 3;
  display: flex;
  flex-direction: column;
  align-content: center;
}
#dog {
  margin-top: auto;
  margin-bottom: 10%;
  justify-content: flex-start;
}
</style>

<script>
import Vue from 'vue';
import AsyncComputed from 'vue-async-computed';
import Menu from './components/Menu';

Vue.use(AsyncComputed);

export default {
  name: 'App',

  components: {
    Menu,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
#home {
  display: flex;
}
</style>
