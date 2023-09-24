// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Redux & Redux Toolkit
import { store } from './redux/store';
import { Provider } from 'react-redux';
// Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Components & Css file
import App from './App';
import ErrorPage from './components/ErrorPage';
import Posts from './components/BlogList';
import BlogDetails from './components/BlogDetails';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/index.css';


// Create Route
// Use App component as root component
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Posts />
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />
      }
    ]
  }
])

// Use React router provider & Redux provider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);