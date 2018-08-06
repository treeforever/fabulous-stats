<template>
  <div class='stats-container'>
    <span class="stats-content">{{ content }}</span>
    <!-- <span>
      <a href="https://twitter.com/intent/tweet?button_hashtag=beautifulcanvas&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet</a>
    </span> -->
  </div>
</template>

<script>
// import statsData from '../stats.json';

export default {
  data() {
    return {};
  },

  props: ['stats'],

  computed: {
    content() {
      return this.stats.text;
    },
  },

  methods: {
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

