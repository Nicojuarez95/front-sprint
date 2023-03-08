import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Auth from '../Auth/Auth';
import Hero1 from '../Hero1/Hero1';
import Hero2Register from '../Hero2Register/Hero2Register';

export default function Index() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [view, setView] = useState('register');

  const handleViewChange = () => {
    if (pathname === '/signup') {
      setView('login');
      navigate('/signin');
    } else if (pathname === '/signin') {
      setView('register');
      navigate('/signup');
    }
  };

  return (
    <>
      <Hero1 />
      {view === 'register' ? (
        <Hero2Register handleViewChange={handleViewChange} />
      ) : (
        <Auth handleViewChange={handleViewChange} />
      )}
    </>
  );
}
