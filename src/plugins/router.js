import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import BlogsPage from "../pages/BlogsPage";
import BlogPage from "../pages/BlogPage";
import NotFoundPage from "../pages/NotFoundPage";
import TermsOfServicePage from "../pages/TermsOfServicePage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";


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
        {
            path: "/blogs/:id",
            component: BlogPage,
        },
        {
            path: "/terms-of-service",
            component: TermsOfServicePage,
        },
        {
            path: "/privacy-policy",
            component: PrivacyPolicyPage,
        },
        {
            path: "/:pathMatch(.*)*",
            component: NotFoundPage,
        },
    ],
    mode: "history",
});

export default router;
