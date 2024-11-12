import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Allproduct from "./pages/Allproduct.jsx";
import Profile from "./pages/Profile.jsx"
import Cart from "./pages/cart.jsx";
import Wishlist from "./pages/wishlist.jsx";
import Catogries from "./pages/Catogries.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="allproducts" element={<Allproduct />} />
        <Route path="catogries" element={<Catogries/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="wishlist" element={<Wishlist/>}/>
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={routes} />
  </>
);
