import React from "react";
import { FaLeaf, FaCity, FaLightbulb } from "react-icons/fa";
import greenRoofIa from '../images/WhatsApp Image 2024-11-04 at 16.54.44.jpeg';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-white">
      {/* Hero Section */}
      <section className="text-center py-20 bg-green-600 text-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold">
          Bem-vindo à <span className="text-yellow-300">PONTO VERDE</span>
        </h1>
        <h2 className="mt-4 text-2xl font-semibold">
          Natureza no topo, futuro verde
        </h2>
      </section>

      {/* Nosso Produto Section */}
      <section className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-3xl font-bold text-green-700 mb-6">
            Nosso Produto
          </h3>
          <p className="text-gray-800 leading-relaxed">
            Transforme os pontos de ônibus de sua cidade em oásis urbanos com nossas consultorias especializadas em telhados verdes. Oferecemos soluções sustentáveis que não apenas embelezam os espaços públicos, mas também contribuem para a melhoria da qualidade do ar e a redução do efeito de ilhas de calor.
          </p>
          <p className="mt-6 text-gray-800 leading-relaxed">
            Nossa equipe de especialistas está pronta para auxiliar prefeituras e empresas de transporte a implementar telhados verdes em pontos de ônibus. Juntos, podemos criar ambientes mais agradáveis para os usuários, promovendo bem-estar e responsabilidade ambiental em sua comunidade.
          </p>
        </div>
        <div className="order-1 md:order-2 flex items-center justify-center">
          <div className="w-full max-w-md">
            <img
              src={greenRoofIa}
              alt="Telhado Verde"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Nossa Missão Section */}
      <section className="mt-24">
        <h3 className="text-3xl font-bold text-green-700 mb-12 text-center">
          Nossa Missão
        </h3>
        <div className="flex flex-col md:flex-row justify-around items-start md:items-center">
          <div className="flex flex-col items-center mb-12 md:mb-0">
            <FaLeaf className="text-green-600 text-6xl mb-4" />
            <h4 className="text-xl font-semibold">Sustentabilidade</h4>
            <p className="text-center text-gray-600 mt-2 max-w-xs">
              Promovemos práticas que respeitam e preservam o meio ambiente.
            </p>
          </div>
          <div className="flex flex-col items-center mb-12 md:mb-0">
            <FaCity className="text-green-600 text-6xl mb-4" />
            <h4 className="text-xl font-semibold">Inovação Urbana</h4>
            <p className="text-center text-gray-600 mt-2 max-w-xs">
              Transformamos espaços urbanos com soluções verdes inteligentes.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaLightbulb className="text-green-600 text-6xl mb-4" />
            <h4 className="text-xl font-semibold">Impacto Social</h4>
            <p className="text-center text-gray-600 mt-2 max-w-xs">
              Melhoramos a qualidade de vida das comunidades através da sustentabilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-24 text-center bg-green-50 py-16 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold text-green-700 mb-6">
          Junte-se a Nós na Transformação Verde!
        </h3>
        <p className="text-gray-700 mb-8 text-lg">
          Com nossos telhados verdes, vamos criar um futuro mais verde, fresco e saudável para todos.
        </p>
      </section>
    </div>
  );
};

export default Home;
