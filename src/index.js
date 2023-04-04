import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Propos from './pages/A_propos/A_propos'
import Error from './pages/404/404'
import Logement from './pages/Fiche_Logement/FicheLogement';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/aPropos',
    element: <Propos/>,

  },
  {
    path: '/Profil',
    element: <Error/>,

  },
  {
    path: '/user/:uid',
    element: <Logement/>,

  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
)

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    
  </React.StrictMode>
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
