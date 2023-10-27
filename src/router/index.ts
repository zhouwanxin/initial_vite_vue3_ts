import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    { path: "/", redirect: "/home" },
    { path: "/home", name: "home", component: () => import("@/views/Home.vue") }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
});

export default router;
