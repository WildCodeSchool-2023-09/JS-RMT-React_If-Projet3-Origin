import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import VideoUnit from "./components/VideoUnit";
import UserAdmin from "./components/administration/UserAdmin";
import AdminVideo from "./components/administration/AdminVideo";
import DashBoard from "./components/administration/DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/videos`)
        .then((res) => res.data);
    },
  },
  {
    path: "/video/:id",
    element: <VideoUnit />,
    loader: async ({ params }) => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/videos/${params.id}`)
        .then((res) => res.data);
    },
  },
  {
    path: "/administration/",
    element: <UserAdmin />,
    children: [
      {
        path: "",
        element: <DashBoard />,
      },
      {
        path: "video",
        element: <AdminVideo />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
