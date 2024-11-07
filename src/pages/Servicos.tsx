import React from 'react';
import greenRoofIa2 from '../images/142e6c64-6c97-414a-b5f4-d2112fcb7b23.jpg';

const Servicos: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-white">
      {/* Nossos Serviços Section */}
      <section className="grid md:grid-cols-2 gap-12 items-start md:items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-3xl font-bold text-green-700 mb-6">
            Nossos Serviços de Consultoria
          </h3>
          <ol className="list-decimal list-inside text-gray-800 space-y-6">
            <li>
              <h4 className="text-xl font-semibold">Análise e Planejamento Personalizado</h4>
              <p className="mt-2">
                Realizamos um estudo detalhado dos pontos de ônibus para identificar as melhores soluções em telhados verdes, considerando fatores como localização, clima, estrutura e fluxo de pessoas.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-semibold">Projeto e Design de Telhados Verdes</h4>
              <p className="mt-2">
                Desenvolvemos projetos exclusivos que integram estética e funcionalidade, selecionando as espécies vegetais mais adequadas e os materiais sustentáveis para cada ambiente urbano.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-semibold">Assessoria em Licenciamento e Normas Ambientais</h4>
              <p className="mt-2">
                Orientamos sobre a legislação vigente e auxiliamos no processo de obtenção de licenças e autorizações necessárias para a implementação dos telhados verdes.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-semibold">Gestão e Acompanhamento de Obras</h4>
              <p className="mt-2">
                Coordenamos todas as etapas de instalação, garantindo que o projeto seja executado dentro do prazo e do orçamento estabelecidos, com altos padrões de qualidade.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-semibold">Programas de Manutenção e Suporte Técnico</h4>
              <p className="mt-2">
                Oferecemos serviços contínuos de manutenção para assegurar a longevidade e a saúde dos telhados verdes, incluindo monitoramento, irrigação e substituição de plantas quando necessário.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-semibold">Capacitação e Treinamento</h4>
              <p className="mt-2">
                Promovemos workshops e treinamentos para equipes técnicas e comunidades locais, visando conscientizar sobre os benefícios e cuidados com os telhados verdes.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-semibold">Consultoria em Sustentabilidade Urbana</h4>
              <p className="mt-2">
                Fornecemos insights e estratégias para integrar práticas sustentáveis em outros aspectos do ambiente urbano, contribuindo para cidades mais verdes e eficientes.
              </p>
            </li>
          </ol>
          <p className="mt-8 text-gray-800">
            Entre em contato conosco para descobrir como podemos colaborar na transformação dos pontos de ônibus em verdadeiros espaços verdes que beneficiam toda a comunidade.
          </p>
        </div>
        <div className="order-1 md:order-2 flex items-center justify-center">
          <div className="w-full max-w-md">
            <img
              src={greenRoofIa2}
              alt="Telhado Verde"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;
