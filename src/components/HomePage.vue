<template>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
  </head>
  <div class="homepage">
    <!-- Main Content -->
    <div class="content">
      <img alt="Smiling Amany memoji" src="../assets/memoji_v2.png" />
      <h1 class="name">Amany Belay</h1>

      <!-- Social Media Links -->
      <div class="social-links">
        <a
          href="https://www.linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/amany_belay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <a
          href="https://github.com/Abelay02"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
        <!-- Add more social media links here -->
      </div>

      <p>
        Hi, I'm Amany! Check out my
        <router-link to="/projects">projects</router-link> or
        <router-link to="/blog">blog</router-link> or
        <router-link to="/blogdupe">blogdupe</router-link>
      </p>
    </div>
  </div>
  <div class="footer">(Like me, this site is a W.I.P. Made with ❤️‍🔥)</div>
</template>

<script>
export default {
  name: "HomePage",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Basic styles for the homepage */
.homepage {
  background-color: #fff;
  color: #000;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
  display: flex; /* Use flexbox for vertical centering */
  flex-direction: column; /* Stack children vertically */
  justify-content: center; /* Center vertically */
  min-height: 100vh; /* Make sure the container fills the viewport height */
  height: 100%;
}

/* Navbar styles */
.navbar {
  background-color: #000;
  color: #fff;
  padding: 10px 0;
}

.navbar a {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
}

/* Name styles */
.name {
  font-size: 36px;
  margin-top: 20px;
}

/* Social media links styles */
.social-links {
  margin-top: 20px;
}

.social-links a {
  font-size: 24px;
  color: #000;
  margin: 0 10px;
}

router-link {
  color: #000;
}

img {
  width: 100px;
  height: auto;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #ececec;
  color: #000000;
  text-align: center;
  padding: 10px 0;
  font-family: Arial, sans-serif;
  font-size: smaller;
}

/* Add more specific styles as needed */
</style>
