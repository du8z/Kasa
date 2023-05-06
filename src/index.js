import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Propos from './pages/A_propos/A_propos'
import Error from './pages/404/404'
import Logement from './pages/Fiche_Logement/FicheLogement';
import ScrollToTop from './utils/style/ScrollTop/ScrollTop';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement : <Error/>
  },
  {
    path: '/aPropos',
    element: <Propos/>,

  },
  {
    path: '/logement/:uid',
    element: <Logement/>,
    errorElement : <Error/>

  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />

)


reportWebVitals();
