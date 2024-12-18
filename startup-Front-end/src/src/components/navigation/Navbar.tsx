import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { LogIn, LogOut, Plus, User, Settings, Briefcase } from 'lucide-react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, role } = useAuthStore();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            StartupHub
          </Link>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {role === 'investor' && (
                  <Link
                    to="/investor"
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                  >
                    <Briefcase size={20} />
                    <span>Espace Investisseur</span>
                  </Link>
                )}
                <Link
                  to="/add-startup"
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                >
                  <Plus size={20} />
                  <span>Ajouter une Startup</span>
                </Link>
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                >
                  <User size={20} />
                  <span>Dashboard</span>
                </Link>
                <Link
                  to="/settings"
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                >
                  <Settings size={20} />
                  <span>Paramètres</span>
                </Link>
                <Button
                  variant="outline"
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                  className="flex items-center space-x-1"
                >
                  <LogOut size={20} />
                  <span>Déconnexion</span>
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button className="flex items-center space-x-1">
                  <LogIn size={20} />
                  <span>Connexion</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};