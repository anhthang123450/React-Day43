import config from "@/config";
import DefaultLayout from "@/layouts/DefaultLayout";
import NoFooterLayout from "@/layouts/NoFooterLayout";
import NoHeaderLayout from "@/layouts/NoHeaderLayout";
import User from "@/pages/User";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Products from "@/pages/Product";
import ProductDetail from "@/pages/ProductDetail";
import Register from "@/pages/Register";

const routes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.products,
        component: Products,
        layout: DefaultLayout,
        protected: true,
    },
    {
        path: config.routes.productDetail,
        component: ProductDetail,
        layout: null,
        // No Layout
    },
    {
        path: config.routes.notFound,
        component: NotFound,
    },
    {
        path: config.routes.contact,
        component: NoFooterLayout,
    },
    {
        path: config.routes.introduce,
        component: NoHeaderLayout,
    },

    {
        path: config.routes.register,
        component: Register,
    },

    {
        path: config.routes.user,
        component: User,
    },

    {
        path: config.routes.login,
        component: Login,
    },
];

export default routes;
