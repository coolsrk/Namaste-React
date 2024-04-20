import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./components/class/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { UserContext } from "./utils/contexts/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

  const [userName, setUserName] = useState('default');

  return (
    // We can pass setUserName() into the value or say context variable so 
    // we can globally access it and modify the username from any component.

    <UserContext.Provider value={{loggedInUser: userName, setUserName: setUserName}}>
      <div className="app">
      <HeaderComponent />
      <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About />,
        // errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        // errorElement: <Error />,
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
      },
      {
        path:  "/restaurant/:resId",
        element: <RestaurantMenu/>
      }

    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={router} />);
