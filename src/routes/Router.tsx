import Loader from "@/components/Loader/Loader";
import DashboardLayout from "@/layouts/DashboardLayout";
import AddNews from "@/pages/News/AddNews";
import AllNews from "@/pages/News/AllNews";
import DeliveryHistory from "@/pages/Products/DeliveryHistory";
import Login from "@/pages/Auth/Login";
import Orders from "@/pages/Products/Orders";
import AddProducts from "@/pages/Products/AddProducts";
import AllProducts from "@/pages/Products/AllProducts";
import HomePagePromotion from "@/pages/Promotion/HomePagePromotion";
import NewsDetailsPagePromotion from "@/pages/Promotion/NewsDetailsPagePromotion";
import Register from "@/pages/Auth/Register";
import { Settings } from "lucide-react";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "add-news",
        element: <AddNews />,
      },
      {
        path: "all-news",
        element: <AllNews />,
      },
      {
        path: "promotion-home-page",
        element: <HomePagePromotion />,
      },
      {
        path: "promotion-news-details-page",
        element: <NewsDetailsPagePromotion />,
      },
      {
        path: "add-products",
        element: <AddProducts />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "delivery-history",
        element: <DeliveryHistory />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "loading",
    element: <Loader />,
  },
]);

export default router;
