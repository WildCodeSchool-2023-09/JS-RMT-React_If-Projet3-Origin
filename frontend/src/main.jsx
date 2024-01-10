import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import connexion from "./services/connexion";
import Administration from "./components/administration/Administration";
import AdminVideo from "./components/administration/AdminVideo";
import PageVideo from "./pages/admin/PageVideo";
import Contact from "./pages/admin/Contact";

import DashBoard from "./pages/admin/DashBoard";

import App from "./App";
import Navbar from "./components/Navbar";
import VideoAcceuil from "./pages/admin/VideoAcceuil";

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
    element: <PageVideo />,
    loader: async ({ params }) => {
      return connexion.get(`/videos/${params.id}`).then((res) => res.data);
    },
  },
  {
    path: "/Home",
    element: <VideoAcceuil />,
  },
  {
    path: "/Video",
    element: <PageVideo />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Connexion",
    element: <Navbar />,
  },
  {
    path: "/Administration/",
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
