// src/pages/Home.tsx

import React from "react";
import { FaLeaf, FaCity, FaLightbulb } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 bg-green-50 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-green-700">
          Bem-vindo à PONTO VERDE
        </h1>
        <h2 className="mt-4 text-2xl font-semibold text-green-600">
          Natureza no topo, futuro verde
        </h2>
      </section>

      {/* About Us Section */}
      <section className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            Sobre Nós
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Na Ponto Verde, acreditamos que o futuro das cidades está enraizado na
            sustentabilidade e na inovação. Nossa startup nasceu com a missão de
            transformar o cenário urbano de Natal, RN, promovendo telhados para pontos de ônibus verdes
            que não apenas embelezam a cidade, mas também melhoram a qualidade de
            vida de seus habitantes.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Os telhados verdes oferecem inúmeros benefícios: reduzem a temperatura,
            diminuem o consumo de energia, absorvem parte das chuvas, melhoram a qualidade do ar
            e proporcionam um refúgio para insetos e pássaros locais. Queremos fazer de Natal uma
            referência em sustentabilidade no Brasil, inspirando outras cidades a adotarem
            práticas verdes e inovadoras.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="src/images/green-roof.jpeg"
            alt="Telhado Verde"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mt-16">
        <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Nossa Missão
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <FaLeaf className="text-green-600 text-4xl mb-2" />
            <h4 className="text-xl font-semibold">Sustentabilidade</h4>
            <p className="text-center text-gray-600 mt-2">
              Promovemos práticas que respeitam e preservam o meio ambiente.
            </p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <FaCity className="text-green-600 text-4xl mb-2" />
            <h4 className="text-xl font-semibold">Inovação Urbana</h4>
            <p className="text-center text-gray-600 mt-2">
              Transformamos espaços urbanos com soluções verdes inteligentes.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaLightbulb className="text-green-600 text-4xl mb-2" />
            <h4 className="text-xl font-semibold">Impacto Social</h4>
            <p className="text-center text-gray-600 mt-2">
              Melhoramos a qualidade de vida das comunidades através da sustentabilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-green-700 mb-4">
          Junte-se a Nós na Transformação Verde!
        </h3>
        <p className="text-gray-700 mb-6">
          Com nossos telhados verdes, vamos criar um futuro mais verde, fresco e saudável para todos.
        </p>
      </section>
    </div>
  );
};

export default Home;
