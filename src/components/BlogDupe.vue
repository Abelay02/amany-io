<template>
  <div class="blog-list">
    <!-- Back Button -->
    <router-link to="/" class="back-button">←Back</router-link>

    <!-- Blog Post Cards (Grid Layout) -->
    <div class="post-list" style="width: 80%">
      <div
        v-for="post in displayedPosts"
        :key="post.id"
        class="post-card"
        style="width: 60%"
      >
        <img
          src="../assets/twitter.png"
          alt="Project Image"
          style="width: 100%"
        />
        <h2>
          {{ post.title }}
        </h2>
        <p>{{ post.description }}</p>
        <!-- <router-link :to="`/blog/${post.slug}`">Read More</router-link> -->
      </div>
    </div>

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
// import axios from "axios";

export default {
  name: "BlogSectionDupe",
  data() {
    return {
      //   posts: [],
      postsPerPage: 10,
      currentPage: 1,
      currentlyDisplayed: false,
      postTitle: null,
      postContent: null,
      posts: [
        // Define your project data here
        {
          id: 1,
          title: "Crispresso2align",
          description: "Description of Project 1...",
          image: "../assets/coffee-cup.png",
          github: "https://github.com/yourusername/project1",
        },
        {
          id: 2,
          title: "PyHangman",
          description: "Description of Project 2...",
          image: "../assets/hangman-game.png",
          github: "https://github.com/yourusername/project2",
        },
        {
          id: 3,
          title: "Sentimental Scraper",
          description: "Description of Project 3...",
          image: "../assets/twitter.png",
          github: "https://github.com/yourusername/project2",
        },
        {
          id: 4,
          title: "Link Away",
          description: "Description of Project 4...",
          image: "../assets/unlink.png",
          github: "https://github.com/yourusername/project2",
        },
        {
          id: 5,
          title: "Portfolio Website",
          description: "Description of Project 5...",
          image: "../assets/web.png",
          github: "https://github.com/yourusername/project2",
        },
        // Add more project objects as needed
      ],
    };
  },
  //   async created() {
  //     try {
  //       const resp = await axios.get("http://192.168.86.25:3000/posts");
  //       this.posts = resp.data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
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
  color: #000;
  display: flex;
  align-items: center;
  margin-left: -300px;
}

/* Blog post card styles with hover effect */
.post-list {
  display: grid; /* Use a grid layout */
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  grid-column-gap: 5px; /* Reduce the horizontal gap between columns */
  gap: 10px;
  justify-items: center; /* Center items horizontally */
  width: 75%;
}

/* Blog post card styles */
.post-card {
  background-color: white;
  border-radius: 5px;
  padding: 5px;
  width: 75%; /* Half the width with reduced spacing */
  transition: background-color 0.3s ease;
}

/* Hover effect */
.post-card:hover {
  background-color: #ccc;
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

@media (max-width: 1000px) {
  .post-list {
    display: grid; /* Use a grid layout */
    grid-template-columns: repeat(1, 1fr); /* One column */
    grid-column-gap: 5px; /* Reduce the horizontal gap between columns */
    gap: 10px;
    justify-items: center; /* Center items horizontally */
    width: 75%;
  }
  h2 {
    margin-left: -100%;
    margin-right: -100%;
  }
}
</style>
