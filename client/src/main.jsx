import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Home from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
// import Signup from './pages/Signup';
import Login from './pages/Login';
import Recommended from './pages/Recommended.jsx';
import MyLikes from './pages/MyLikes.jsx';
import SignUp from './pages/SignUp.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/login',
        element: <Login />
      }, 
      {
        path: '/recommended',
        element: <Recommended />
      },
      {
        path: '/my-likes',
        element: <MyLikes />
      },
      {
        path: '/signup',
        element: <SignUp />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
