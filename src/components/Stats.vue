<template>
  <div class='stats-container'>
    <article class="stats-content">{{ content }}</article>
    <span>
      <span>votes {{ votes }}</span>
      <button v-on:click="upVote">up</button>
      <button v-on:click="downVote">down</button>
    </span>  
    <!-- <span>
      <a href="https://twitter.com/intent/tweet?button_hashtag=beautifulcanvas&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet</a>
    </span> -->
  </div>
</template>

<script>
import requests from '../helpers/requests';

export default {
  data() {
    return {
      votes: 0,
    };
  },

  props: ['stats'],

  computed: {
    content() {
      return this.stats.text;
    },
  },

  methods: {
    upVote() {
      this.votes = this.votes + 1;
      // console.log('dd', sendVote);
      requests.sendVote(4, this.votes);
    },
    downVote() {
      if (this.votes === 0) {
        return;
      }
      this.votes = this.votes - 1;
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
  background-color: #f5e3e0;
  margin-left: auto;
  margin-right: auto;
  min-height: 50px;
  width: 500px;
  padding: 20px;
}
.stats-content {
  text-align: left;
}
</style>

