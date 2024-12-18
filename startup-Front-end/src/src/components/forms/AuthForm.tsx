import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

interface AuthFormProps {
  title: string;
  children: React.ReactNode;
  error?: string;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  footerText: string;
  footerLinkText: string;
  footerLinkTo: string;
  forgotPassword?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  children,
  error,
  isLoading,
  onSubmit,
  footerText,
  footerLinkText,
  footerLinkTo,
  forgotPassword
}) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          {children}

          <Button
            type="submit"
            className="w-full"
            isLoading={isLoading}
          >
            {title}
          </Button>
        </form>

        {forgotPassword && (
          <div className="mt-4 text-center">
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
              Mot de passe oublié ?
            </Link>
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {footerText}{' '}
            <Link to={footerLinkTo} className="text-blue-600 hover:text-blue-700">
              {footerLinkText}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;