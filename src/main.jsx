import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Register from "./components/Register/Register";
import SingIn from './components/singIn/SingIn';
import JobDetails from './components/Home/JobDetails';
import Homepage from "./pages/Home/Homepage";
import { AuthProvider } from "./context/AuthContext";
import JobApplication from "./components/Home/JobApplication";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[{
      path : "/",
      element: <Homepage></Homepage>
    },{   
       path: "job/:id", 
      element: <JobDetails />,
      loader:({params})=>fetch(`http://localhost:5000/job/${params.id}`)
      },
    {   
       path: "jobApplication/:id", 
      element: <JobApplication />,
      loader:({params})=>fetch(`http://localhost:5000/job/${params.id}`)
      },

    ],
    
  }
,  
  {
    path: "register",
    element: <Register/>,


    
  },

  {
    path: "signin",
    element: <SingIn/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
);


