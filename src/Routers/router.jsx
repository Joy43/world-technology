import { createBrowserRouter } from "react-router-dom";

import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignIn/Signup";
import HomeProduct from "../Pages/Prouctpage/HomeProduct";
import Dashboad from "../Layout/Dashboad/Dashboad";
import Cart from "../Pages/Dashboad/Dashboad/Cart/Cart";
import PrivateRoute from "./Privaterouter";

import AllUsers from "../Pages/Dashboad/Dashboad/AllUsers/Allusers";

import AddItem from "../Pages/Dashboad/Dashboad/AddItem/AddItem";
import Manageproduct from "../Pages/Dashboad/Dashboad/ManageProduct/Manageproduct";
import UpdateItem from "../Pages/Dashboad/Dashboad/UpdateItem/UpdateItem";
import Adminhome from "../Pages/Dashboad/Dashboad/AdminHome/Adminhome";

import PaymentHistory from "../Pages/Dashboad/payment/pymentstory/Paymentstory";

import CheackPayment from "../Pages/Dashboad/payment/Cheackpayment/CheackPayment";
import Contactus from "../Pages/Contact/Contactus";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "product",
        element: <HomeProduct></HomeProduct>,
      },
      {
        path: "contact",
        element: <Contactus></Contactus>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboad></Dashboad>
      </PrivateRoute>
    ),
    children: [
      // ------------- normal user routes -------------
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <CheackPayment></CheackPayment>,
      },
      //----------- admin router-------------
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "addItems",
        element: <AddItem></AddItem>,
      },
      {
        path: "manageProduct",
        element: <Manageproduct></Manageproduct>,
      },
      {
        path: "updateItem/:id",
        element: <UpdateItem></UpdateItem>,
        loader: ({ params }) =>
          fetch(`https://server-assingment-12.vercel.app/product/${params.id}`),
      },
      {
        path: "adminHome",
        element: <Adminhome></Adminhome>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);
