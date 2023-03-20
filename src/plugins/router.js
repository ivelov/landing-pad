import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";

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
    ],
    mode: "history",
});

export default router;
