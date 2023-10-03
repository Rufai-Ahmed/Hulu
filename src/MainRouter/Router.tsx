import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Block/Layout";
import ActualMovie from "../Pages/ActualMovie";
import ActualMovie2 from "../Pages/ActualMovie2";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/id/:id",
    element: <ActualMovie />,
  },
  {
    path: "/idd/:idd",
    element: <ActualMovie2 />,
  },
]);
