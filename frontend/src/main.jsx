import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";
import Administration from "./components/administration/Administration";
import AdminVideo from "./components/administration/AdminVideo";
import AdminContact from "./components/administration/AdminContact";
import Signform from "./components/Signform";
import PageVideo from "./pages/PageVideo";

import App from "./App";
import InscriptOrigins from "./pages/admin/InscriptOrigins";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/inscription",
    element: <InscriptOrigins />,
  },
  {
    path: "/Home",
    element: <Navbar />,
  },
  {
    path: "/contact",
    element: <AdminContact />,
  },
  {
    path: "/Connexion",
    element: <Signform />,
  },
  {
    path: "/Administration/",
    element: <Administration />,
    children: [
      {
        path: "video",
        element: <AdminVideo />,
      },
      {
        path: "consultation",
        element: <PageVideo />,
        loader: async () => {
          return connexion.get(`/videos`).then((res) => res.data);
        },
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
