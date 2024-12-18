import React, { useState } from 'react';
import AuthForm from '../components/forms/AuthForm';
import Input from '../components/ui/Input';
import useAuth from '../hooks/useAuth';

const Login: React.FC = () => {
  const { isLoading, error, handleLogin } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogin(formData.email, formData.password);
  };

  return (
    <AuthForm
      title="Connexion"
      error={error}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      footerText="Vous n'avez pas de compte ?"
      footerLinkText="S'inscrire"
      footerLinkTo="/register"
      forgotPassword
    >
      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Entrez votre email"
        required
      />

      <Input
        label="Mot de passe"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        placeholder="Entrez votre mot de passe"
        required
      />
    </AuthForm>
  );
};

export default Login;