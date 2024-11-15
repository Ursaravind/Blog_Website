import React from "react";
import ReactDOM from "react-dom/client";  // Corrected to ReactDOM
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";  // Ensure you're using react-router-dom v6 or later
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Login from "./pages/Login.jsx";

// Define the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[{
      path:"/",
      element:<Home/>
      
    },{
    path:"/blog",
    element:<Blog/>
    },{
      path:"/about",
      element:<About/>
    },{
      path:"/contact",
      element:<Contact/>

    },{
      path:"/services",
      element:<Services/>
    },{
      path:"/login",
      element:<Login/>
    
    }
  ]
  },
]);

// Rendering the app using createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    {/* Import React.StrictMode */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
