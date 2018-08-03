<template>
  <menu id='menu'>
    <a href='/stats'>Stats</a>
    <a href='/jstoolsstats'>JS tools Stats</a>
    <a href='/blogs'>blogs</a>
    <a href='/aboutme'>about me</a>
  </menu>

</template>

<style>
#menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>

<script>
export default {
  name: "CustomMenu",
  data() {
    return {
      message: "right"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
