import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import connexion from "./services/connexion";
import Administration from "./components/administration/Administration";
import AdminVideo from "./components/administration/AdminVideo";
import PageVideo from "./pages/admin/PageVideo";
import AdminContact from "./components/administration/AdminContact";

import DashBoard from "./pages/admin/DashBoard";

import App from "./App";
import InscriptOrigins from "./pages/admin/InscriptOrigins";
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
    path: "/inscription",
    element: <InscriptOrigins />,
  },

  {
    path: "/videos/:id",
    element: <PageVideo />,
    loader: async ({ params }) => {
      return connexion.get(`/videos/${params.id}`).then((res) => res.data);
    },
  },
  {
    path: "/register",
    element: <InscriptOrigins />,
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
    element: <AdminContact />,
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
