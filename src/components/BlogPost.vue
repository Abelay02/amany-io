<template>
  <div class="blog-post">
    <router-link to="/blog" class="back-button">←Back</router-link>
    <h2>{{ post.title }}</h2>
    <div v-html="formattedContent" class="markdown-content"></div>
  </div>
</template>

<script>
import axios from "axios";
import MarkdownIt from "markdown-it";

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

  computed: {
    formattedContent() {
      const md = new MarkdownIt();
      return md.render(this.post.content || "");
    },
  },
};
</script>

<style scoped>
.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

/* Back button styles */
.back-button {
  text-decoration: none;
  color: #000; /* Set text color to black */
  display: flex;
  align-items: center; /* Vertically center text and arrow */
  margin-bottom: 20px;
}

/* Markdown content styles */
.markdown-content h1,
.markdown-content h2,
.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
  margin: 20px 0 10px;
  font-weight: bold;
  line-height: 1.2;
}

.markdown-content p {
  margin: 10px 0;
}

.markdown-content pre {
  background: #f6f8fa;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
  font-family: Consolas, "Courier New", Courier, monospace;
}

.markdown-content code {
  background: #f6f8fa;
  padding: 2px 4px;
  border-radius: 3px;
  font-family: Consolas, "Courier New", Courier, monospace;
}

.markdown-content blockquote {
  margin: 10px 0;
  padding-left: 10px;
  border-left: 5px solid #ccc;
  color: #666;
  font-style: italic;
}

.markdown-content ul,
.markdown-content ol {
  margin: 10px 0;
  padding-left: 20px;
}

.markdown-content a {
  color: #0366d6;
  text-decoration: none;
}

.markdown-content a:hover {
  text-decoration: underline;
}
</style>
