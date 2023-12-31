import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import connexion from "./services/connexion";

import App from "./App";
import VideoUnit from "./components/VideoUnit";
import Administration from "./pages/admin/Administration";
import AdminVideo from "./pages/admin/AdminVideo";
import DashBoard from "./pages/admin/DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      return connexion.get(`/videos`).then((res) => res.data);
    },
  },
  {
    path: "/videos/:id",
    element: <VideoUnit />,
    loader: async ({ params }) => {
      return connexion.get(`/videos/${params.id}`).then((res) => res.data);
    },
  },
  {
    path: "/administration/",
    element: <Administration />,
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
