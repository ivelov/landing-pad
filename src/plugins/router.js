import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import BlogsPage from "../pages/BlogsPage";

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: HomePage,
        },
        {
            path: "/services",
            component: ServicesPage,
        },
        {
            path: "/blogs",
            component: BlogsPage,
        },
    ],
    mode: "history",
});

export default router;
