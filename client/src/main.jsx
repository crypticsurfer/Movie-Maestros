import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Home from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Login from './pages/Login';
import Recommended from './pages/Recommended.jsx';
import SignUp from './pages/Signup.jsx';
import WatchList from './pages/WatchList.jsx';

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
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/watch-list',
        element: <WatchList />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
