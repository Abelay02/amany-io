<template>
  <div class="blog-post">
    <router-link to="/blog" class="back-button">←Back</router-link>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BlogPost",
  data() {
    return {
      post: {}, // Initialize with an empty object
    };
  },

  async created() {
    const slug = this.$route.params.slug;
    try {
      const resp = await axios.get(
        `https://my-json-server.typicode.com/Abelay02/amany-io/posts?slug=${slug}`
      );
      this.post = resp.data[0];
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.blog-post {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 100px;
}

/* Back button styles */
.back-button {
  text-decoration: none;
  color: #000; /* Set text color to black */
  display: flex;
  align-items: center; /* Vertically center text and arrow */
  margin-left: -300px; /* Offset to align with left edge of cards */
}
</style>
