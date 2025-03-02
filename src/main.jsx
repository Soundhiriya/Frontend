import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Homepage from './routes/homepage/Homepage';
import Dashboardpage from './routes/dashboardpage/Dashboardpage';
import Chatpage from './routes/chatpage/Chatpage';
import Rootlayout from './layouts/rootlayout/Rootlayout';
import Dashboardlayout from "./layouts/rootlayout/dashboardlayout/Dashboardlayout";
import SignInpage from './routes/SignInpage/SignInpage'; 
import SignUppage from './routes/SignUppage/SignUppage'; 

const router =createBrowserRouter([
  {
   element:<Rootlayout/>,
   children:[
    {
      path:"/",
      element:<Homepage/>,

    },
    {
      path:"/sign-in/*",
      element:<SignInpage/>,

    },
    {
      path:"/sign-up/*",
      element:<SignUppage/>,

    },
    {
      element:<Dashboardlayout/>,
      children:[
        {
          path:"/dashboard",
          element:<Dashboardpage/>,
        },
        {
          path:"/dashboard/chats/:id",
          element:<Chatpage/>,
        },
      ],
    },
   ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
