<template>
  <main>
    <div class='header-container'>
      <span class="header">Fabulous Stats</span>
      <img src='../assets/umbrella.png' class="logo"/>
    </div>
    <Stats :stats="stats"/>
    <NextButton class="next-button" text="Next"  v-on:next="onNext" />
  </main>
</template>

<script>
import axios from 'axios';
import Stats from './Stats';
import NextButton from './NextButton';
import getNextItemId from '../helpers/utils';

const fetchStats = async function(id) {
  const res = await axios.get(`http://localhost:3000/content?id=${id}`);
  return res.data[0];
};

export default {
  name: 'Home',

  data() {
    return {
      currentStatsId: '0',
      stats: { text: '' },
    };
  },

  created: async function() {
    const result = await fetchStats(this.currentStatsId);
    this.stats = result;
  },

  components: {
    Stats,
    NextButton,
  },

  methods: {
    onNext: async function() {
      this.currentStatsId = getNextItemId(this.currentStatsId, 13);
      this.stats = await fetchStats(this.currentStatsId);
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

