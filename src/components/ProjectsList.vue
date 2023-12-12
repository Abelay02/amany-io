<!-- src/components/ProjectsList.vue -->

<template>
  <router-link to="/" class="back-button">←Back</router-link>
  <ul class="projects-card-list">
    <!-- List of project cards -->
    <li class="project-card" v-for="project in projects" :key="project.id">
      <!-- Project Image -->
      <img :src="project.image" alt="Project Image" class="project-image" />

      <!-- Project Title -->
      <h2 class="project-title">{{ project.title }}</h2>

      <!-- Project Description -->
      <p class="project-description">{{ project.description }}</p>

      <!-- GitHub Link Button -->
      <a :href="project.github" target="_blank" class="github-link">
        <img src="github-logo.png" alt="GitHub Logo" class="github-logo" />
        View on GitHub
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProjectsList",
  data() {
    return {
      projects: [
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
};
</script>

<style scoped>
/* Center the project cards in two columns */
.projects-card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center horizontally */
  gap: 20px;
  padding: 20%; /* Remove default padding for <ul> */
  list-style: none; /* Remove default list styling */
}

.project-card {
  flex-basis: calc(50% - 20px); /* Two cards per row with some spacing */
  background-color: #fff; /* Card background color */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  padding: 20px;
  border-radius: 4px;
  transition: transform 0.2s ease-in-out;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.project-card:hover {
  transform: translateY(-5px); /* Add a slight lift on hover */
}

.project-image {
  max-width: 100%;
  height: auto;
}

.project-title {
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
}

.project-description {
  font-size: 16px;
  color: #777; /* Description text color */
}

.github-link {
  display: flex;
  align-items: center;
  color: #0366d6; /* GitHub link color */
  text-decoration: none;
  margin-top: 10px;
}

.github-logo {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.back-button {
  text-decoration: none;
  color: #000; /* Set text color to black */
  /* display: flex; */
  align-items: center; /* Vertically center text and arrow */
  margin-left: -00px; /* Offset to align with left edge of cards */
}
</style>

<!-- <style scoped>
/* Center the project cards in two columns */
.projects-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center horizontally */
  /* gap: 20px; */
  padding: 100px;
}

.project-card {
  flex-basis: calc(50% - 40px); /* Two cards per row with some spacing */
  background-color: #fff; /* Card background color */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  padding: 20px;
  border-radius: 4px;
  transition: transform 0.2s ease-in-out;
  margin-bottom: 20px;
  width: 600px;
}

.project-card:hover {
  transform: translateY(-5px); /* Add a slight lift on hover */
}

.project-image {
  max-width: 100%;
  height: auto;
}

.project-title {
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
}

.project-description {
  font-size: 16px;
  color: #777; /* Description text color */
}

.github-link {
  display: flex;
  align-items: center;
  color: #0366d6; /* GitHub link color */
  text-decoration: none;
  margin-top: 10px;
}

.github-logo {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.back-button {
  text-decoration: none;
  color: #000; /* Set text color to black */
  /* display: flex; */
  align-items: center; /* Vertically center text and arrow */
  /* margin-left: -100px; Offset to align with left edge of cards */
}
</style> -->
