<template>
  <div class='header-container'>
    <span class="header">Fabulous Stats</span>
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
  text-align: center;
}
.header {
  font-size: 5em;
  font-family: 'avenir';
  font-weight: 700;
  color: #1EA896;
}
</style>
