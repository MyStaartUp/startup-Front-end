import React, { useState } from 'react';
import AuthForm from '../components/forms/AuthForm';
import Input from '../components/ui/Input';
import useAuth from '../hooks/useAuth';

const Register: React.FC = () => {
  const { isLoading, error, handleRegister, setError } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    await handleRegister(formData.name, formData.email, formData.password);
  };

  return (
    <AuthForm
      title="Créer un compte"
      error={error}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      footerText="Vous avez déjà un compte ?"
      footerLinkText="Se connecter"
      footerLinkTo="/login"
    >
      <Input
        label="Nom complet"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Entrez votre nom complet"
        required
      />

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
        placeholder="Créez un mot de passe"
        required
      />

      <Input
        label="Confirmer le mot de passe"
        type="password"
        value={formData.confirmPassword}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        placeholder="Confirmez votre mot de passe"
        required
      />
    </AuthForm>
  );
};

export default Register;