import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from './pages/Home';
import MyWork from './pages/MyWork';
import Services from './pages/Services';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "mywork", element: <MyWork /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

