import React, { useState } from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';
import { Outlet } from 'react-router-dom';

export const Container = () => {
  const [buttonClicked, setButtonClicked] = useState("Home");

  return (
    <div>
      <Header buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} />
      <Outlet />
      <Footer />
    </div>
  );
};
