import { createRouter, createWebHistory } from "vue-router";
import login from "./pages/login.vue";
import register from "./pages/register.vue";
import home from "./pages/home.vue";
import dashboard from "./pages/dashboard.vue";

const routes = [
    { path: "/", name: "Home", component: home  , meta: { Auth: false } },
    { path: "/login", name: "Login", component: login  , meta: { Auth: false }},
    { path: "/register", name: "Register", component: register , meta: { Auth: false } },
    { path: "/dashboard", name: "Dashboard", component: dashboard , meta: { Auth: true }},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    const token = localStorage.getItem("token");
    if (to.meta.Auth && !token) { //auth like your any word of guard that is used in routes
        return { name: "Login" };
    }
    if (to.meta.Auth == false && token) {
        return { name: "Dashboard" };
    }
});

export default router;
