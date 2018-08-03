<template>
  <ariticle class="article">
    <h1>{{ blogs[$route.params.id].title }}</h1>
    <p>{{ blogs[$route.params.id].article }}</p>
  </ariticle>
</template>

<script>
import data from "../stats.json";

export default {
  name: "Blog",
  data() {
    return {
      blogs: data
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
