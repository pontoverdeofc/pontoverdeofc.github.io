import React from 'react';
import greenRoof from '../images/green-roof.jpeg';

const Sobre: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-white">
      {/* Sobre Nós Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-3xl font-bold text-green-700 mb-6">
            Sobre Nós
          </h3>
          <p className="text-gray-800 leading-relaxed">
            Na <span className="font-semibold">Ponto Verde</span>, acreditamos que o futuro das cidades está enraizado na
            sustentabilidade e na inovação. Nossa startup nasceu com a missão de
            transformar o cenário urbano de Natal, RN, promovendo telhados para pontos de ônibus verdes
            que não apenas embelezam a cidade, mas também melhoram a qualidade de
            vida de seus habitantes.
          </p>
          <p className="mt-6 text-gray-800 leading-relaxed">
            Os telhados verdes oferecem inúmeros benefícios: reduzem a temperatura,
            diminuem o consumo de energia, absorvem parte das chuvas, melhoram a qualidade do ar
            e proporcionam um refúgio para insetos e pássaros locais. Queremos fazer de Natal uma
            referência em sustentabilidade no Brasil, inspirando outras cidades a adotarem
            práticas verdes e inovadoras.
          </p>
        </div>
        <div className="order-1 md:order-2 flex items-center justify-center">
          <div className="w-full max-w-md">
            <img
              src={greenRoof}
              alt="Telhado Verde"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
