import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Layouts from '../components/layouts/Layouts';
import Home from '../pages/Home';


const Route = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

export default Route