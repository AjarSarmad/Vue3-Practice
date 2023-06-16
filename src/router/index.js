import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import SignupForm from "../components/SignupForm.vue";
import JobList from "../views/JobList.vue";
import JobDetail from "../views/JobDetail.vue";
import InfiniteScroller from "../views/InfiniteScroller.vue";
import AGvDT from "../views/AGvDT.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/SignupForm",
    name: "signup",
    component: SignupForm,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobList,
  },
  {
    path: "/jobs/:id",
    name: "job",
    component: JobDetail,
    props: true,
  },
  {
    path: "/infinite-scroll",
    name: "infiniteScroll",
    component: InfiniteScroller,
  },
  {
    path: "/AGvDT",
    name: "AGvDT",
    component: AGvDT,
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
