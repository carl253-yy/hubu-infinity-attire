
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Immediately redirect to login page
    navigate('/login');
  }, [navigate]);

  return null;
};

export default Register;
