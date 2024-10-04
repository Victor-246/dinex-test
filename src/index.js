import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Root from "./routes/main.js";
import Nosotros from './routes/nosotros.js';
import ErrorPage from './routes/errorpage.js';
import Servicios from './routes/servicios.js';
import Suministros from './routes/suministros.js';
import Contacto from './routes/contacto.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: '/nosotros',
    element: <Nosotros />,
  },
  {
    path: '/servicios',
    element: <Servicios />
  },
  {
    path: '/suministros',
    element: <Suministros />
  },
  {
    path: '/contacto',
    element: <Contacto />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
