import React, { useEffect, useState } from 'react';
import { ref, onValue, push, update, remove } from 'firebase/database';
import { db } from '../Configurations/firebaseConfig';

export default function Dashboard() {
  const [trips, setTrips] = useState([]);
  const [newTrip, setNewTrip] = useState({
    title: '',
    description: '',
    price: '',
    discount: 0,
    image: '',
    type: ''
  });
  const [editingTrip, setEditingTrip] = useState(null);

  useEffect(() => {
    const tripsRef = ref(db, 'flightDeals');
    onValue(tripsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const tripsArray = Object.entries(data).map(([key, value]) => ({ id: key, ...value }));
        setTrips(tripsArray);
      }
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTrip({ ...newTrip, [name]: value });
  };

  const handleAddTrip = () => {
    if (newTrip.title && newTrip.price && newTrip.type) {
      push(ref(db, 'flightDeals'), newTrip);
      setNewTrip({ title: '', description: '', price: '', discount: 0, image: '', type: '' });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  const handleEditTrip = (trip) => {
    setEditingTrip(trip);
    setNewTrip(trip);
  };

  const handleUpdateTrip = () => {
    if (editingTrip) {
      const tripRef = ref(db, `flightDeals/${editingTrip.id}`);
      update(tripRef, newTrip);
      setEditingTrip(null);
      setNewTrip({ title: '', description: '', price: '', discount: 0, image: '', type: '' });
    }
  };

  const handleDeleteTrip = (id) => {
    remove(ref(db, `flightDeals/${id}`));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Gerenciamento de Viagens</h2>

      <div className="mb-6">
        <label htmlFor="title" className="block text-gray-700 mb-2">Título da Viagem *</label>
        <input
          type="text"
          name="title"
          value={newTrip.title}
          onChange={handleInputChange}
          placeholder="Ex: Pacote para Porto de Galinhas"
          className="border p-2 mb-4 w-full rounded"
        />

        <label htmlFor="description" className="block text-gray-700 mb-2">Descrição *</label>
        <textarea
          name="description"
          value={newTrip.description}
          onChange={handleInputChange}
          placeholder="Descrição detalhada do pacote"
          className="border p-2 mb-4 w-full rounded"
        />

        <label htmlFor="price" className="block text-gray-700 mb-2">Preço *</label>
        <input
          type="number"
          name="price"
          value={newTrip.price}
          onChange={handleInputChange}
          placeholder="Preço do pacote em reais"
          className="border p-2 mb-4 w-full rounded"
        />

        <label htmlFor="discount" className="block text-gray-700 mb-2">Desconto (%)</label>
        <input
          type="number"
          name="discount"
          value={newTrip.discount}
          onChange={handleInputChange}
          placeholder="Desconto em porcentagem"
          className="border p-2 mb-4 w-full rounded"
        />

        <label htmlFor="image" className="block text-gray-700 mb-2">URL da Imagem *</label>
        <input
          type="text"
          name="image"
          value={newTrip.image}
          onChange={handleInputChange}
          placeholder="URL da imagem representativa do pacote"
          className="border p-2 mb-4 w-full rounded"
        />

        <label htmlFor="type" className="block text-gray-700 mb-2">Tipo *</label>
        <select
          name="type"
          value={newTrip.type}
          onChange={handleInputChange}
          className="border p-2 mb-4 w-full rounded"
        >
          <option value="">Selecione o tipo</option>
          <option value="pacotes">Pacotes</option>
          <option value="passagens">Passagens</option>
          <option value="hoteis">Hotéis</option>
          <option value="cruzeiros">Cruzeiros</option>
          <option value="carros">Carros</option>
        </select>

        <button
          onClick={editingTrip ? handleUpdateTrip : handleAddTrip}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          {editingTrip ? 'Atualizar Viagem' : 'Adicionar Viagem'}
        </button>

        {editingTrip && (
          <button
            onClick={() => {
              setEditingTrip(null);
              setNewTrip({ title: '', description: '', price: '', discount: 0, image: '', type: '' });
            }}
            className="bg-red-500 text-white p-2 mt-2 rounded w-full"
          >
            Cancelar
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trips.map((trip) => (
          <div key={trip.id} className="bg-white p-4 shadow rounded">
            <img src={trip.image} alt={trip.title} className="w-full h-32 object-cover mb-4 rounded" />
            <h3 className="text-xl font-bold">{trip.title}</h3>
            <p>{trip.description}</p>
            <p>Preço: R$ {trip.price}</p>
            {trip.discount > 0 && <p>Desconto: {trip.discount}%</p>}
            <p>Tipo: {trip.type}</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => handleEditTrip(trip)}
                className="bg-yellow-500 text-white p-2 rounded"
              >
                Editar
              </button>
              <button
                onClick={() => handleDeleteTrip(trip.id)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
