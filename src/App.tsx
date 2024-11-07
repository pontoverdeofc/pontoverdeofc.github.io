// src/App.tsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Faq from './pages/Faq';
import Servicos from './pages/Servicos';

const App: React.FC = () => {
  const [buttonClicked, setButtonClicked] = useState<string>('');
  const [isLoggedIn] = useState<boolean>(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header 
          buttonClicked={buttonClicked} 
          setButtonClicked={setButtonClicked} 
          isLoggedIn={isLoggedIn} 
        />
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/servicos" element={<Servicos/>}/>
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
