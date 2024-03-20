import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Banner from './Components/Banner.jsx';
import About from './Components/About.jsx';
import LogIn from './Components/LogIn.jsx';
import MealsContiner from './Components/MealsContiner.jsx';
import ShowDetails from './Components/ShowDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/Meals",
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?s'),
        element: <MealsContiner></MealsContiner>,
      },
      {
        path: "/Details/:idmeal",
        loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idmeal}`),
        // loader:({params})=>console.log( params),
        element: <ShowDetails></ShowDetails>,
      },
      {
        path: "/About",
        element:<About></About>,
      },
      {
        path: "/LogIn",
        element: <LogIn></LogIn>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
