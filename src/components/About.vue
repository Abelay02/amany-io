<template>
  <div class="hello">
    <h1>About Section</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: blueviolet;
}
</style>
