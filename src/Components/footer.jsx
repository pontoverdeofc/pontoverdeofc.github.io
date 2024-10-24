/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">SÓ VIAGENS</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Sobre nós
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Sala de Imprensa
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Trabalhe Conosco
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Seja um Franqueado
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Centrais de Atendimento</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Suporte Pós Venda 84 8484 8484</li>
              <li className="mb-2">Remarcação de viagens</li>
              <li className="mb-2">Segunda à Sábado: 09h às 21h</li>
              <li className="mb-2">Sábado e Feriados Nacionais: 09h às 16h</li>
              <li className="mb-2">
                <button 
                  onClick={() => navigate('/faq')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Central de Ajuda
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Termos</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Condições de uso do site
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Condições Gerais
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Política de privacidade
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Código de Conduta Ética
                </a>
              </li>
            </ul>
          </div>

        </div>

        <hr className="my-8 border-gray-600" />

        <div className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} SÓ VIAGENS. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
