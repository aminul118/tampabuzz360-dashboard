import MainLayout from "@/layouts/MainLayout";
import AddNews from "@/pages/AddNews/AddNews";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "add-news",
        element: <AddNews />,
      },
    ],
  },
]);

export default router;
