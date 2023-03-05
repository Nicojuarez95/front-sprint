import React from 'react'
import Hero1 from '../Hero1/Hero1'
import Hero2Register from '../Hero2Register/Hero2Register'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Auth from '../Auth/Auth'





export default function Index() {
  const location = useLocation();
  const navigate = useNavigate();

  const { pathname } = location;
  const [render, setRender] = useState(false);

  const handleRender = () => {
    if (pathname === "/") {
      setRender(!render);
    } else if (pathname === "/signup") {
      navigate("/signin");
    } else if (pathname === "/signin") {
      navigate("/signup");
    }
  };

  return (
<<<<<<< HEAD
    <div>
        <Hero1/>
        <Hero2Register/>
        
    </div>
  


    
  )
=======
    <>
      <Hero1 />
      {render ? (
        <Auth handleRender={handleRender} />
      ) : (
        <Hero2Register handleRender={handleRender} />
      )}
    </>
  );
>>>>>>> b2217f8eae3c7e580cb2168133db6252429604ef
}
