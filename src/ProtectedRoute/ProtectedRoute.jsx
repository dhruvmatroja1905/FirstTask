import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const Component = props.Component;
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem('user-info'));
    if (!storedUserInfo) {
      console.error('User not logged in. Redirecting to login page...');
      navigate('/login'); // Redirect to the login page
    }
  }, [navigate]);

  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
