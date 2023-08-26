import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <LoginForm />
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
