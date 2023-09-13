import React, { useEffect, useState } from "react";
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

// const Comp1 = () => {
//   const [st, setSt] = useState(0);
//   const [re, setRe] = useState(4);

//   useEffect(() => {
//     return () => {
//       console.log("re component deleted");
//     };
//   }, [re]);

//   useEffect(() => {
//     return () => {
//       console.log("se component deleted");
//     };
//   }, [st]);

//   useEffect(() => {
//     return () => {
//       console.log("global component deleted");
//     };
//   });

//   return (
//     <div>
//       <input type="text" value={re} onChange={(e) => setRe(e.target.value)} />
//       <h1 onClick={() => setSt((e) => e + 1)}>{st}</h1>
//       {/* <h1>{re}</h1> */}
//       {console.log("html rendered")}
//     </div>
//   );
// };
// root.render(<Comp1 />);
