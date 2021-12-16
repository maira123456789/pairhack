import React from "react";
import { Route, Routes, Navigate } from "react-router";
import Auth from "./components/Auth/Auth";
import BrandsList from "./components/BrandsList/BrandsList";
import Cart from "./components/Cart/Cart";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
import EditPerfume from "./components/EditPerfume/EditPerfume";
import Home from "./components/Home/Home";
import Invoic from "./components/Invoic/Invoic";
import News from "./components/News/News";
import Pay from "./components/Pay/Pay";
import ProductsList from "./components/ProductsList/ProductsList";
import Stores from "./components/Stores/Stores";
import { useAuth } from "./context/authContext";
import AdminPage from "./pages/AdminPage";
import Error404 from "./pages/Error404";

const Routing = () => {
  const { user } = useAuth();

  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/products",
      element: <ProductsList />,
      id: 2,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 3,
    },
    {
      link: "/brands",
      element: <BrandsList />,
      id: 4,
    },
    {
      link: "/details/:id",
      element: <DetailsProduct />,
      id: 5,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 6,
    },
    {
      link: "/stores",
      element: <Stores />,
      id: 7,
    },
    {
      link: "/pay",
      element: <Pay />,
      id: 8,
    },
    {
      link: "/invoic",
      element: <Invoic />,
      id: 9,
    },
  ];
  const ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditPerfume />,
      id: 2,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route key={item.id} path={item.link} element={item.element} />
      ))}
      {user
        ? ADMIN_ROUTES.map((item) => (
            <Route
              key={item.id}
              path={item.link}
              element={
                user.email === "tarieltairov1@gmail.com" ? (
                  item.element
                ) : (
                  <Navigate replace to="*" />
                )
              }
            />
          ))
        : null}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Routing;
