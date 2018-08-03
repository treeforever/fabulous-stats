<template>
  <div class='header-container'>
    <span class="header">Fabulous Stats</span>
    <img src='../../static/umbrella.png' class="logo"/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {

    };
  },
  methods: {
    openArticle: () => {
      // console.log('clicked');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
.header {

  font-size: 5em;
  font-family: 'avenir';
  font-weight: 700;
  color: #1EA896;
}
.logo {
  width: 10em;
  margin-left: auto;
  margin-right: auto;
}
</style>
