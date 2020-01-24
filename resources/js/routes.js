import Home from "./pages/Home.vue";
import Register from "./pages/Register.vue";
import Thankyou from "./pages/Thankyou.vue";

const routes = [
  {
    path: "/",
    name: Home,
    component: Home
  },
  {
    path: "/register",
    // name: Register,
    component: Register
  },
  {
    path: "/thank-you",
    // name: Register,
    component: Thankyou
  }
];

export default routes;
