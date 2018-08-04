<template>
  <button class="btn-green" v-on:click="$emit('next')">{{text}}</button>
</template>

<style>
</style>

<script>
export default {
  props: ['text'],
};
</script>

