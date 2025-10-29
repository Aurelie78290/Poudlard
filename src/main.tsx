import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router'

import App from './App.tsx';
import Home from "./pages/Home.tsx";
import Houses from './pages/Houses.tsx';
import Characters from './pages/Characters.tsx';
import Spells from './pages/Spells.tsx';

import './index.css';

const router = createBrowserRouter ([
  {
    element: <App />,
    children : [
      {
        path : '/',
        element : <Home />
      },
      {
        path : '/houses',
        element : <Houses />
      },
      {
        path : '/characters',
        element : <Characters />
      },
      {
        path:'/spells',
        element: <Spells />
      }
    ]
  }
])

const rootElement = document.getElementById("root");

if (rootElement != null) {
  createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
