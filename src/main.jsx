import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Blog from './pages/blog'
import SinglePost from './pages/singlepost'
import Pages from './pages/pages'
import ContactUs from './pages/contactus'
import Layout from './components/layout'
import NotFound from './pages/notfound'
import PostCard from './pages/post-card'


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
        path: "singlepost",
        element: <SinglePost />,
      },
      {
        path: "pages",
        element: <Pages />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
