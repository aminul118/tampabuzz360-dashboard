import DashboardLayout from "@/layouts/DashboardLayout";
import AddNews from "@/pages/AddNews/AddNews";
import AllNews from "@/pages/AllNews/AllNews";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
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
]);

export default router;
