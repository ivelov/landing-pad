import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import BlogsPage from "../pages/BlogsPage";
import BlogPage from "../pages/BlogPage";
import NotFoundPage from "../pages/NotFoundPage";
import TermsOfServicePage from "../pages/TermsOfServicePage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";

let $publicPath = process.env.BASE_URL;

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: `${$publicPath}`,
            component: HomePage,
        },
        {
            path: `${$publicPath}services`,
            component: ServicesPage,
        },
        {
            path: `${$publicPath}blogs`,
            component: BlogsPage,
        },
        {
            path: `${$publicPath}blogs/:id`,
            component: BlogPage,
        },
        {
            path: `${$publicPath}terms-of-service`,
            component: TermsOfServicePage,
        },
        {
            path: `${$publicPath}privacy-policy`,
            component: PrivacyPolicyPage,
        },
        {
            path: ":pathMatch(.*)*",
            component: NotFoundPage,
        },
    ],
    mode: "history",
});

export default router;
