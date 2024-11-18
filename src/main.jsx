
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Pages/Layout.jsx';
import Home from './Pages/Home.jsx';
import AllProduct from './Pages/AllProduct.jsx';
import Card from './Pages/Card.jsx';
import Category from './Pages/Category.jsx';
import Profile from './Pages/Profile.jsx';
import Wishlist from './Pages/Wishlist.jsx';
import Login from './Pages/Login.jsx';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './Pages/Signup.jsx';
import SingleProduct from './Pages/SingleProduct.jsx';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="home"
          element={
            // <ProtectedRoute>
            <Home />
            // </ProtectedRoute>
          }
        />
        <Route
          path="allproduct"
          element={
            // <ProtectedRoute>
            <AllProduct />
            // </ProtectedRoute>
          }
        />
        <Route
          path="card"
          element={
            // <ProtectedRoute>
            <Card />
            // </ProtectedRoute>
          }
        />
        <Route
          path="category"
          element={
            // <ProtectedRoute>
            <Category />
            // </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            // <ProtectedRoute>
            <Profile />
            // </ProtectedRoute>
          }
        />
        <Route
          path="wishlist"
          element={
            // <ProtectedRoute>
            <Wishlist />
            // </ProtectedRoute>
          }
        />
      </Route>
    </>
  )
);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
);
