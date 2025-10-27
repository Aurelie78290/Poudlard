import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router'

import './index.css';
import App from './App';
import Home from "./pages/Home";
import Houses from './pages/Houses';
import Characters from './pages/Characters';

const router = createBrowserRouter ([
  {
    element: <App />,
    children : [
      {
        path : '/',
        element : <Home />
      },
      {
        path : '/Houses',
        element : <Houses />
      },
      {
        path : '/Characters',
        element : <Characters />
      }
    ]
  }
])

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
