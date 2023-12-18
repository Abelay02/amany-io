<template>
  <div class="blog-list">
    <!-- Back Button -->
    <router-link to="/" class="back-button">←Back</router-link>
    <!-- Blog Post Cards -->
    <ul class="post-list">
      <li v-for="post in displayedPosts" :key="post.id" class="post-card">
        <router-link :to="`/blog/${post.slug}`">
          <h2>{{ post.title }}</h2>
          <p>{{ post.content }}</p>
        </router-link>
      </li>
    </ul>

    <!-- Pagination Controls -->
    <div class="pagination">
      <button
        @click="previousPage"
        :hidden="posts.length <= postsPerPage"
        :disabled="currentPage === 1"
      >
        Prev
      </button>
      <span v-for="page in totalPages" :key="page">
        <button
          @click="goToPage(page)"
          :class="{ active: currentPage === page }"
        >
          {{ page }}
        </button>
      </span>
      <button
        @click="nextPage"
        :hidden="posts.length <= postsPerPage"
        :disabled="currentPage === totalPages"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BlogSection",
  data() {
    return {
      posts: [],
      postsPerPage: 10,
      currentPage: 1,
      currentlyDisplayed: false,
      postTitle: null,
      postContent: null,
    };
  },
  async created() {
    try {
      const resp = await axios.get(
        "https://my-json-server.typicode.com/Abelay02/amany-io/posts"
      );
      this.posts = resp.data;
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    displayedPosts() {
      const startIndex = (this.currentPage - 1) * this.postsPerPage;
      const endIndex = startIndex + this.postsPerPage;
      return this.posts.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.posts.length / this.postsPerPage);
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Center the component horizontally */
.blog-list {
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

/* Blog post card styles with hover effect */
.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Blog post card styles */
.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-card {
  background-color: white;
  border-radius: 5px;
  padding: 5px;
  margin: 2px 0;
  width: 600px;
  transition: background-color 0.3s ease; /* Smooth transition for background color */
}

/* Hover effect */
.post-card:hover {
  background-color: #ccc; /* Grey background on hover */
}

.post-card h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.post-card p {
  font-size: 14px;
  color: #333;
}

/* Pagination styles */
.pagination {
  margin-top: 10px;
}

.pagination button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin: 0 5px;
  padding: 0;
}

.pagination button.active {
  font-weight: bold;
}

.pagination button:disabled {
  color: #999;
  cursor: not-allowed;
}

.post-card a,
.post-card a:visited {
  text-decoration: none; /* Remove underline from links */
  color: inherit; /* Text color should inherit from the parent element */
}

.post-card h2,
.post-card p {
  margin: 0; /* Adjust spacing as needed */
}

@media (max-width: 1000px) {
  .blog-list {
    width: 100%;
  }
  .post-card {
    background-color: white;
    border-radius: 5px;
    padding: 5px;
    margin: 2px 0;
    width: 600px;
    transition: background-color 0.3s ease; /* Smooth transition for background color */
    /* text-align: left; */
  }
}
</style>
