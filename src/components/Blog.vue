<template>
      <div class="blog-list">
    <!-- Back Button -->
    <router-link to="/" class="back-button">←Back</router-link>

    <!-- Blog Post Cards -->
    <ul class="post-list">
      <li v-for="post in displayedPosts" :key="post.id" class="post-card">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
      </li>
    </ul>

     <!-- Pagination Controls -->
    <div class="pagination">
      <button @click="previousPage" :hidden="posts.length <= postsPerPage" :disabled="currentPage === 1">Prev</button>
      <span v-for="page in totalPages" :key="page">
        <button @click="goToPage(page)" :class="{ active: currentPage === page }">{{ page }}</button>
      </span>
      <button @click="nextPage" :hidden="posts.length <= postsPerPage" :disabled="currentPage === totalPages">Next</button>
    </div>

  </div>

  </template>
  
  <script>
  export default {
    name: 'BlogSection',
    data() {
        return {
            posts: [
                { id: 1, title: 'Blog Post 1', content: 'This is the content of Blog Post 1.' },
                { id: 2, title: 'Blog Post 2', content: 'This is the content of Blog Post 2.' },
                { id: 3, title: 'Blog Post 3', content: 'This is the content of Blog Post 3.' },
                { id: 4, title: 'Blog Post 1', content: 'This is the content of Blog Post 1.' },
                { id: 5, title: 'Blog Post 2', content: 'This is the content of Blog Post 2.' },
                { id: 6, title: 'Blog Post 3', content: 'This is the content of Blog Post 3.' },
                { id: 7, title: 'Blog Post 1', content: 'This is the content of Blog Post 1.' },
                { id: 8, title: 'Blog Post 2', content: 'This is the content of Blog Post 2.' },
                { id: 9, title: 'Blog Post 3', content: 'This is the content of Blog Post 3.' },
                { id: 10, title: 'Blog Post 1', content: 'This is the content of Blog Post 1.' },
                { id: 11, title: 'Blog Post 2', content: 'This is the content of Blog Post 2.' },
                { id: 12, title: 'Blog Post 3', content: 'This is the content of Blog Post 3.' },
            ],
            postsPerPage: 10,
            currentPage: 1,
        };
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
  </style>
  