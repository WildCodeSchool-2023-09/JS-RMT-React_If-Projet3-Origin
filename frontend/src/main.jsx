import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./components/contexts/Auth";
import connexion from "./services/connexion";
import Administration from "./components/administration/Administration";
import AdminVideo from "./components/administration/AdminVideo";
import AdminContact from "./components/administration/AdminContact";
import Signform from "./components/Signform";
import PageVideo from "./pages/PageVideo";
import LoginAdm from "./pages/admin/LoginAdm";

import App from "./App";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <Navbar />,
  },
  {
    path: "/login",
    element: <LoginAdm />,
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
