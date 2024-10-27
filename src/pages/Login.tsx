// src/pages/Login.tsx

import React from 'react';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/slices/authSlice';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    // Implemente a lógica de autenticação aqui
    // Exemplo:
    dispatch(login('nome_do_usuario'));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Login</h1>
      <button
        onClick={handleLogin}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Fazer Login
      </button>
    </div>
  );
};

export default Login;
