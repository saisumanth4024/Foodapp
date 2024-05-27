import React, { useState, lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import MyHeader from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
// import Grocery from "./components/Grocery";
import RestaurantMenu from "./components/RestaurantMenu";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppContainer = () => {
  // const sai=useState(null)
  // console.log(sai)
  const [userName, setUserName] = useState("");

  // Using method shorthand
  // let calculator = {
  //   userName,
  //   add(a, b) {
  //     return a + b;
  //   },
  //   sub: function () {
  //     return a - b;
  //   },
  //   div: () => {
  //     return a - b;
  //   },
  // };
  // console.log(calculator);
  // debugger;
  useEffect(() => {
    // const data = {
    //   name: "Sai Sumanth",
    // };
    // setUserName(data.name);
  });

  console.log(userName);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          {/* <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element=<Body/> />
      <Route path="/about" element=<About/> />
      <Route path="/contact" element=<Contact/> />
      <Route  element=<NotFound/>>
    </Routes>
    </BrowserRouter>  */}
          {/* {console.log("sai")} */}
          <MyHeader />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>code is being fetched here</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
