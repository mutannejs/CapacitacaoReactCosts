import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { LoginProvider } from './components/context/LoginContext';

/*
import Projects from './components/pages/Projects';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/projects',
      element: <Projects />
    },
    {
      path: '/company',
      element: <Company />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/newproject',
      element: <NewProject />
    },
    {
      path: 'project/:id',
      element: <Project />
    }
  ]
}]);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>
);