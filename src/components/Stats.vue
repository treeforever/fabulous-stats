<template>
  <div class='stats-container'>
    <article class="stats-content">{{ content }}</article>
    <span class="votes-container">
      <span>votes {{ votes }}</span>
      <button v-on:click="upVote">up</button>
      <button v-on:click="downVote">down</button>
    </span>  
    <!-- <span>
      <a href="https://twitter.com/intent/tweet?button_hashtag=beautifulcanvas&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet</a>
    </span> -->
    <span v-if="error">Some error occured for votes</span>
  </div>
</template>

<script>
import requests from '../helpers/requests';

export default {
  data() {
    return {
      error: false,
    };
  },

  props: ['stats'],

  computed: {
    content() {
      return this.stats.text;
    },
    votes() {
      return this.stats.votes;
    },
  },

  methods: {
    upVote: async function() {
      this.error = false;
      this.stats.votes = this.stats.votes + 1;
      const res = await requests.sendVote(this.stats._id, this.stats.votes);
      if (!res.data.succeeded) {
        this.stats.votes = this.stats.votes - 1;
        this.error = true;
      }
    },
    downVote: async function() {
      this.error = false;
      this.stats.votes = this.stats.votes - 1;
      const res = await requests.sendVote(this.stats._id, this.stats.votes);
      if (!res.data.succeeded) {
        this.stats.votes = this.stats.votes + 1;
        this.error = true;
      }
    },
    // fetchTwitterScript() {
    //   fetch('https://platform.twitter.com/widgets.js');
    // },
  },
};
</script>


<style>
#dog {
  height: 10em;
}

.stats-container {
  margin-left: auto;
  margin-right: auto;
  min-height: 50px;
  width: 500px;
}
.stats-content {
  background-color: #f5e3e0;
  padding: 3% 5%;
  border-radius: 3%;
  text-align: left;
}
.votes-container {
  padding: 1%;
  float: right;
}
</style>

