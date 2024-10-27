// src/pages/Logout.tsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { logout } from '../store/slices/authSlice';

const Logout: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(logout());
    navigate('/');
  }, [dispatch, navigate]);

  return null;
};

export default Logout;
