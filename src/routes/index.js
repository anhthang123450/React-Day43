import config from "@/config";
import AdminLayout from "@/layouts/AdminLayout";
import NoFooterLayout from "@/layouts/NoFooterLayout";
import NoHeaderLayout from "@/layouts/NoHeaderLayout";
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
        layout: AdminLayout,
        // AdminLayout
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
        layout: null,
    },

    {
        path: config.routes.login,
        component: Login,
        layout: null,
    },
];

export default routes;
