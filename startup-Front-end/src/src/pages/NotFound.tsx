import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page non trouvée</p>
      <Link to="/">
        <Button className="flex items-center space-x-2">
          <Home size={20} />
          <span>Retour à l'accueil</span>
        </Button>
      </Link>
    </div>
  );
};

export default NotFound