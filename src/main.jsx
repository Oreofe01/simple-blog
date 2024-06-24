import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Blog from './pages/blog'
import ContactUs from './pages/contactus'
import Layout from './components/layout'
import NotFound from './pages/notfound'
import PostCard from './pages/post-card'
import About from './pages/about'
import Profile from './pages/profile'
import RegisterForm from './pages/registerForm'
import LoginForm from './pages/loginform'
import { AuthContextProvider } from './context/auth-context.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:id",
        element: <PostCard />,
      },
      {
        path: ":profile",
        element: <Profile />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ]
  },
  {
    path: "register",
    element: <RegisterForm />,
  },
  {
    path: "login",
    element: <LoginForm />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);