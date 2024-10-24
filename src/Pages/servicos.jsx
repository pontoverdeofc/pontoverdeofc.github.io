import React from 'react';

const services = [
  {
    title: "Por Esse Céu Azul",
    description: "Explore o Brasil para além do óbvio",
    image: "https://plus.unsplash.com/premium_photo-1679758629516-6fe7a51fad5c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Verde e Azul",
    description: "Destinos de Ecoturismo",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0",
  },
  {
    title: "+ que Hotéis: Resorts",
    description: "Todo tipo de resort, para todo tipo de viagem",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    title: "Cruzeiros",
    description: "Para quem ama curtir e navegar",
    image: "https://images.unsplash.com/photo-1510132310763-2df322eed83f?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Diversão com Personagens",
    description: "Parques temáticos inesquecíveis",
    image: "https://images.unsplash.com/photo-1604883781245-0aca44fff711?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Aventuras e Descobertas",
    description: "Explorando o mundo",
    image: "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Servicos = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Muito mais que aéreo + hotel</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
              <img src={service.image} alt={service.title} className="w-full h-60 object-cover"/>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <p className="text-lg text-white mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicos;
