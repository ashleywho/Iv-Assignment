// src/App.tsx
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

const App: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    console.log('Logging in with:', username, password);
    // Add your login logic here
  };

  const handleRegister = (username: string, password: string) => {
    console.log('Registering:', username, password);
    // Add your registration logic here
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
      <RegistrationForm onRegister={handleRegister} />
    </div>
  );
};

export default App;
