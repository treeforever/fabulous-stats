import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";
import Stats from "../components/Stats";
import JSToolsStats from "../components/JSToolsStats";
import Blog from "../components/Blog";
import AboutMe from "../components/AboutMe";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/Stats",
      name: "Stats",
      component: Stats
    },
    {
      path: "/JSToolsStats",
      name: "JSToolsStats",
      component: JSToolsStats
    },
    {
      path: "/blogs/:id",
      name: "Blog",
      component: Blog
    },
    {
      path: "/aboutme",
      name: "AboutMe",
      component: AboutMe
    }
  ]
});
