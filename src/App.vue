<template>
  <div id="app">
    <Menu id='menu'></Menu>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
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
#home {
  display: flex;
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