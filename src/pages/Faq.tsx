import React from 'react';

const Faq: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Central de Ajuda</h1>
      <p className="mb-12 text-gray-700">Perguntas frequentes e suporte.</p>

      {/* Formulário de Contato */}
      <div className="bg-green-50 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Precisa de Ajuda?</h2>
        <p className="text-gray-700 mb-6">
          Preencha o formulário abaixo e entraremos em contato o mais breve possível.
        </p>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Nome</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label className="block text-gray-700">E-mail</label>
              <input
                type="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                placeholder="Seu e-mail"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-gray-700">Mensagem</label>
            <textarea
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              rows={5}
              placeholder="Como podemos ajudar?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition duration-300"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>

      {/* Perguntas Frequentes */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-green-700 mb-8 text-center">Perguntas Frequentes</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Como funciona a consultoria de telhados verdes?</h3>
            <p className="text-gray-700">
              Nossa equipe avalia as necessidades do seu projeto e oferece soluções personalizadas para implementar telhados verdes de forma eficaz.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quais são os benefícios dos telhados verdes?</h3>
            <p className="text-gray-700">
              Telhados verdes ajudam a reduzir a temperatura urbana, melhoram a qualidade do ar e proporcionam isolamento térmico, entre outros benefícios.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Como posso agendar uma consulta?</h3>
            <p className="text-gray-700">
              Você pode entrar em contato conosco através do formulário acima ou pelo nosso e-mail de suporte para agendar uma consulta.
            </p>
          </div>
          {/* Adicione mais FAQs conforme necessário */}
        </div>
      </div>
    </div>
  );
};

export default Faq;
