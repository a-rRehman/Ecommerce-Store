import { createWebHistory, createRouter } from "vue-router";
import Login from "../components/Login.vue";
import AllProducts from "../components/AllProducts.vue";
import SingleProduct from "../components/SingleProduct.vue";
import ProductCategories from "../components/ProductCategories.vue";
import AddProduct from "../components/AddProduct.vue";
import SearchProduct from "../components/SearchProduct.vue";
import Home from "../components/Home.vue";
import SpecificCategory from "../components/SpecificCategory.vue";
import TheLogin from "../components/TheLogin.vue";
import LifeCycle from "../components/LifeCycle.vue";

const routes = [
  {
    name: "Login",
    path: "/",
    component: Login,
  },

  {
    name: "AllProducts",
    path: "/AllProducts",
    component: AllProducts,
  },
  {
    name: "SingleProduct",
    path: "/SingleProduct",
    component: SingleProduct,
  },
  {
    name: "ProductCategories",
    path: "/ProductCategories",
    component: ProductCategories,
  },
  {
    name: "AddProduct",
    path: "/AddProduct",
    component: AddProduct,
  },
  {
    name: "LifeCycle",
    path: "/LifeCycle",
    component: LifeCycle,
  },
  {
    name: "SearchProduct",
    path: "/SearchProduct",
    component: SearchProduct,
  },
  {
    name: "Home",
    path: "/Home",
    component: Home,
  },
  {
    name: "SpecificCategory",
    path: "/SpecificCategory",
    component: SpecificCategory,
  },
  {
    name: "TheLogin",
    path: "/TheLogin",
    component: TheLogin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
