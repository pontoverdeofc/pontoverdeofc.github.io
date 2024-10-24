import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/home';
import { Sobre } from './Pages/sobre';
import Servicos from './Pages/servicos';
import Login from './Pages/login';
import Signup from './Pages/signup';
import { Container } from './Pages/container';
import Dashboard from './Pages/dashboard';
import ResetPassword from './Pages/reset-password';
import Faq from './Pages/faq';
import { checkAndLoadData } from './Configurations/loadDataToFirebase';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Container />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/sobre', element: <Sobre /> },
        { path: '/servicos', element: <Servicos /> },
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <Signup /> },
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/reset-password', element: <ResetPassword /> },
        { path: '/faq', element: <Faq /> },
      ],
    },
  ]
);

checkAndLoadData();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />,
);

reportWebVitals();
