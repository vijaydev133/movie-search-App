import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./Component/Body";
import Favourites from "./Component/Favourites";
import Watchlist from "./Component/Watchlist";
import { Provider } from "react-redux";
import store from "./utils/store";
import MovieDetail from "./Component/MovieDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/fav",
        element: <Favourites />,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
