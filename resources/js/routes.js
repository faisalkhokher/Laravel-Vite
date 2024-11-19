import { createRouter, createWebHistory } from "vue-router";
import login from "./pages/login.vue";
import register from "./pages/register.vue";

const routes = [
    { path: "/login", name: "Login", component: login },
    { path: "/register", name: "Register", component: register },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
