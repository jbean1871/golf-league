import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/add",
    name: "add",
    component: () => import("../components/UserCreate"),
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../components/UserList"),
  },
  {
    path: "/scoreboard",
    name: "scoreboard",
    component: () => import("../components/ScoreBoard"),
  },
  {
    path: "/teams",
    name: "teams",
    component: () => import("../components/Teams"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("../components/Home"),
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../components/UserEdit"),
  },
  {
    path: "/editTeam/:id",
    name: "editTeam",
    component: () => import("../components/EditTeam"),
  },
  {
    path: "/teamScores/:id",
    name: "teamScores",
    component: () => import("../components/TeamScores"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../components/Register"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../components/Dashboard"),
  },
  {
    path: "/updateRound/:id/:round",
    name: "updateRound",
    component: () => import("../components/UpdateRound"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
