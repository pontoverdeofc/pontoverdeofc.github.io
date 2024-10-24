import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../Configurations/firebaseConfig";

export default function Home() {
  const [deals, setDeals] = useState([]);
  const [filteredDeals, setFilteredDeals] = useState([]);
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    const dealsRef = ref(db, 'flightDeals');
    onValue(dealsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedDeals = Object.values(data);
        setDeals(loadedDeals);
        setFilteredDeals(loadedDeals);
      }
    });
  }, []);

  useEffect(() => {
    if (filterType === 'all') {
      setFilteredDeals(deals);
    } else {
      const filtered = deals.filter(deal => deal.type === filterType);
      setFilteredDeals(filtered);
    }
  }, [filterType, deals]);

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-sky-300 p-6 rounded-lg shadow-lg mb-10 mt-4">
        <nav className="flex space-x-6 items-center text-sm text-gray-700">
          <button 
            onClick={() => handleFilterChange('all')} 
            className={`flex flex-col items-center ${filterType === 'all' ? 'text-blue-700 font-bold' : 'text-black'}`}
          >
            <i className="fas fa-box"></i>
            <span>Todos</span>
          </button>
          <button 
            onClick={() => handleFilterChange('pacotes')} 
            className={`flex flex-col items-center ${filterType === 'pacotes' ? 'text-blue-700 font-bold' : 'text-black'}`}
          >
            <i className="fas fa-box"></i>
            <span>Pacotes</span>
          </button>
          <button 
            onClick={() => handleFilterChange('passagens')} 
            className={`flex flex-col items-center ${filterType === 'passagens' ? 'text-blue-700 font-bold' : 'text-black'}`}
          >
            <i className="fas fa-plane"></i>
            <span>Passagens</span>
          </button>
          <button 
            onClick={() => handleFilterChange('hoteis')} 
            className={`flex flex-col items-center ${filterType === 'hoteis' ? 'text-blue-700 font-bold' : 'text-black'}`}
          >
            <i className="fas fa-hotel"></i>
            <span>Hotéis</span>
          </button>
          <button 
            onClick={() => handleFilterChange('cruzeiros')} 
            className={`flex flex-col items-center ${filterType === 'cruzeiros' ? 'text-blue-700 font-bold' : 'text-black'}`}
          >
            <i className="fas fa-ship"></i>
            <span>Cruzeiros</span>
          </button>
          <button 
            onClick={() => handleFilterChange('carros')} 
            className={`flex flex-col items-center ${filterType === 'carros' ? 'text-blue-700 font-bold' : 'text-black'}`}
          >
            <i className="fas fa-car"></i>
            <span>Carros</span>
          </button>
        </nav>

        <div className="flex space-x-4 mt-6">
          <button className="bg-blue-700 text-white px-4 py-2 rounded-md">
            Aéreo + Hotel
          </button>
          <button className="bg-white text-blue-700 px-4 py-2 rounded-md border border-blue-700">
            Combos
          </button>
        </div>

        <div className="flex mt-6 space-x-4">
          <input
            type="text"
            placeholder="Origem"
            className="border px-4 py-2 rounded-md flex-1"
          />
          <input
            type="text"
            placeholder="Destino"
            className="border px-4 py-2 rounded-md flex-1"
          />
          <input
            type="date"
            placeholder="Início"
            className="border px-4 py-2 rounded-md"
          />
          <input
            type="date"
            placeholder="Fim"
            className="border px-4 py-2 rounded-md"
          />
          <select className="border px-4 py-2 rounded-md">
            <option>1 Quarto - 1 Hóspede</option>
            <option>1 Quarto - 2 Hóspedes</option>
            <option>2 Quartos - 4 Hóspedes</option>
          </select>
          <button className="bg-sky-600 text-white px-4 py-2 rounded-md">
            Buscar
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Passagens Aéreas
        </h2>
        <p className="text-lg text-gray-600 mb-10 text-center">
          Promoções encontradas nas últimas 12h!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredDeals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{deal.title}</h3>
                <p className="text-gray-600">{deal.description}</p>
                <span className="inline-block bg-purple-600 text-white px-3 py-1 mt-4 rounded-full text-sm">
                  Oferta Imbatível
                </span>
                <div className="flex justify-between items-center mt-6">
                  <p className="text-gray-800 text-xl font-bold">R$ {deal.price}</p>
                  {deal.discount > 0 && (
                    <span className="text-green-600 font-bold">-{deal.discount}%</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
