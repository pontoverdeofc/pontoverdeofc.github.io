// src/pages/Dashboard.tsx

import React from 'react';
import { useAppSelector } from '../store/hooks';

const Dashboard: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4">Bem-vindo, {user}!</p>
    </div>
  );
};

export default Dashboard;
