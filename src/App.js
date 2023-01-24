import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Error from "./Components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Hotels from "./Components/Hotels";

const Flights = lazy(() => import("./Components/Flights"));
const HomeStay = lazy(() => import("./Components/HomeStay"));
const Activities = lazy(() => import("./Components/Activities"));

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Hotels />,
      },
      {
        path: "/book-hotel",
        element: <Hotels />,
      },
      {
        path: "/book-flight",
        element: (
          <Suspense>
            <Flights />
          </Suspense>
        ),
      },
      {
        path: "/book-homestay",
        element: (
          <Suspense>
            <HomeStay />
          </Suspense>
        ),
      },
      {
        path: "/book-activity",
        element: (
          <Suspense>
            <Activities />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerConfig} />);
