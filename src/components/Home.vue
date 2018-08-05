<template>
  <main>
    <div class='header-container'>
      <span class="header">Fabulous Stats</span>
      <img src='../assets/umbrella.png' class="logo"/>
    </div>
    <Stats :currentStatsId="currentStatsId"/>
    <NextButton class="next-button" text="Next"  v-on:next="onNext" />
  </main>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5em;
}
.header {
  font-size: 5em;
  font-family: 'avenir';
  font-weight: 700;
  color: #1ea896;
}
.logo {
  width: 10em;
  margin-left: auto;
  margin-right: auto;
}
.next-button {
  width: 10%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
}
</style>

<script>
import axios from 'axios';
import Stats from './Stats';
import NextButton from './NextButton';
import getNextItemId from '../helpers/utils';

export default {
  name: 'Home',
  data() {
    return {
      currentStatsId: '0',
    };
  },
  components: {
    Stats,
    NextButton,
  },
  methods: {
    onNext() {
      this.currentStatsId = getNextItemId(this.currentStatsId, 10);
      axios
        .get('http://localhost:3000/content?id=789098')
        .then(function(response) {
          console.log('get some response', response.data);
        })
        .catch(function(error) {
          console.log('error: ', error);
        });
    },
  },
};
</script>
