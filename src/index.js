import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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

// Defina o basename somente para o ambiente de produção
const basename = process.env.NODE_ENV === 'production' ? '/pontoverdeofc.github.io' : '';

checkAndLoadData();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename={basename}>
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Container>
  </Router>
);

reportWebVitals();
