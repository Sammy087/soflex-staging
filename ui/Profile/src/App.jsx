import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Iphone } from "./screens/Iphone";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Iphone />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
