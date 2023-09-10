import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import About from './views/About/About';
import Project from './views/Project/Project';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/> 
  },
  {
    path:"/about",
    element: <About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/project",
    element:<Project/>
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <RouterProvider router ={router} />);



