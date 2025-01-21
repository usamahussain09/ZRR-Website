import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import ProjectDetails from './pages/ProjectDetails';
import ProjectsShowcase from './pages/ProjectsShowcase';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "mywork", element: <ProjectsShowcase/> },
      { path: 'mywork/:id', element: <ProjectDetails /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;

