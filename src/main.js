import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

// Import your Vue components that you want to use as routes
import HomePage from "./components/HomePage.vue";
import BlogSection from "./components/Blog.vue";
import AboutSection from "./components/About.vue";
import HelloWorld from "./components/HelloWorld.vue";
import BlogPost from "./components/BlogPost.vue";
import ProjectsSection from "./components/Projects.vue";
// import Contact from './components/Contact.vue';

const app = createApp(App);

// Define your routes
const routes = [
  { path: "/", component: HomePage },
  { path: "/helloworld", component: HelloWorld },
  { path: "/blog", component: BlogSection },
  { path: "/about", component: AboutSection },
  { path: "/blog/:slug", name: "BlogPost", component: BlogPost },
  { path: "/projects", component: ProjectsSection },
  // { path: '/contact', component: Contact },
];

// Create a VueRouter instance
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  mode: "history", // This enables "history" mode for cleaner URLs
});

app.use(router);

app.mount("#app");
