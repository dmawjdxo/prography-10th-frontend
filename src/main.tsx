// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ApplicationForm from './pages/ApplicationForm/ApplicationForm';
import ApplicationComplete from './pages/ApplicationComplete/ApplicationComplete';
import './App.css';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/apply', element: <ApplicationForm /> },
  { path: '/complete', element: <ApplicationComplete /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
