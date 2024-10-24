import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../Configurations/firebaseConfig';
import { ref, get, child, update } from "firebase/database";

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    const emailKey = email.replace('.', '_');
    const dbRef = ref(db);

    try {
      const snapshot = await get(child(dbRef, `users/${emailKey}`));
      if (snapshot.exists()) {
        const userData = snapshot.val();
        if (userData.cpf === cpf) {
          await update(ref(db, `users/${emailKey}`), { password: newPassword });
          alert('Senha redefinida com sucesso!');
          navigate('/login');
        } else {
          alert('CPF incorreto.');
        }
      } else {
        alert('E-mail não encontrado.');
      }
    } catch (error) {
      console.error('Erro ao redefinir a senha:', error);
      alert('Erro ao redefinir a senha. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Lado esquerdo: Formulário de Redefinição de Senha */}
      <div className="flex flex-col justify-center w-full md:w-1/2 bg-white p-8 md:p-16">
        <div className="flex items-center mb-8">
          <div className="bg-blue-500 text-white rounded-full p-4">
            <i className="fas fa-lock"></i>
          </div>
          <h1 className="text-3xl font-bold ml-4">Redefinir Senha</h1>
        </div>

        <form onSubmit={handleResetPassword}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-2">E-mail *</label>
            <input 
              type="email" 
              id="email" 
              placeholder="E-mail" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="cpf" className="block text-gray-700 mb-2">CPF *</label>
            <input 
              type="text" 
              id="cpf" 
              placeholder="CPF" 
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="newPassword" className="block text-gray-700 mb-2">Nova Senha *</label>
            <input 
              type="password" 
              id="newPassword" 
              placeholder="Nova Senha" 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirmar Nova Senha *</label>
            <input 
              type="password" 
              id="confirmPassword" 
              placeholder="Confirmar Nova Senha" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300">
            Redefinir Senha
          </button>
        </form>
      </div>

      {/* Lado direito: Imagem */}
      <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')" }}></div>
    </div>
  );
};

export default ResetPassword;
