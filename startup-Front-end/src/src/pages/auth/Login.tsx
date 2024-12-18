import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '@/components/forms/AuthForm';
import RoleSelector from '@/components/auth/RoleSelector';
import Input from '@/components/ui/Input';
import useAuth from '@/hooks/useAuth';
import type { UserRole } from '@/types/user';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { isLoading, error, handleLogin } = useAuth();
  const [selectedRole, setSelectedRole] = useState<UserRole>('individual');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await handleLogin(formData.email, formData.password, selectedRole);
    if (success) {
      if (selectedRole === 'investor') {
        navigate('/investor/setup');
      } else {
        navigate('/dashboard');
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
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
        <RoleSelector
          selectedRole={selectedRole}
          onRoleSelect={setSelectedRole}
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
          placeholder="Entrez votre mot de passe"
          required
        />
      </AuthForm>
    </div>
  );
}

export default Login