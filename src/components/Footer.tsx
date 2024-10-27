// src/components/Footer.tsx

import React from "react";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="text-primary-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex-1 md:text-left mb-8 md:mb-0">
            <h3 className="text-lg font-bold text-white mb-4">PONTO VERDE</h3>
            <ul className="text-primary-400">
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Sobre nós
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Sala de Imprensa
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Trabalhe Conosco
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Seja um Franqueado
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1 md:text-center mb-8 md:mb-0">
            <h3 className="text-lg font-bold text-white mb-4">
              Centrais de Atendimento
            </h3>
            <ul className="text-primary-400">
              <li className="mb-2">Suporte Pós Venda 84 8484 8484</li>
              <li className="mb-2">Segunda à Sábado: 09h às 21h</li>
              <li className="mb-2">Sábado e Feriados Nacionais: 09h às 16h</li>
              <li className="mb-2">
                <button
                  onClick={() => navigate("/faq")}
                  className="text-white transition-colors duration-200 mt-4"
                >
                  Central de Ajuda
                </button>
              </li>
            </ul>
          </div>

          <div className="flex-1 md:text-right mb-8 md:mb-0">
            <h3 className="text-lg font-bold text-white mb-4">Termos</h3>
            <ul className="text-primary-400">
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Condições de uso do site
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Condições Gerais
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Política de privacidade
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Código de Conduta Ética
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-primary-600" />

        <div className="text-center text-primary-400">
          &copy; {new Date().getFullYear()} PONTO VERDE. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
