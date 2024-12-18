import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { Startup } from '@/types';
import Button from '@/components/ui/Button';
import { PlusCircle, Settings, Briefcase } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, role } = useAuthStore();
  const userStartups: Startup[] = [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Tableau de bord
        </h1>
        <div className="flex gap-3">
          <Link to="/add-startup">
            <Button className="flex items-center space-x-2">
              <PlusCircle size={20} />
              <span>Ajouter une Startup</span>
            </Button>
          </Link>
          {role === 'investor' && (
            <Link to="/investor">
              <Button variant="outline" className="flex items-center space-x-2">
                <Briefcase size={20} />
                <span>Espace Investisseur</span>
              </Button>
            </Link>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Profil</h2>
            <Link to="/settings">
              <Button variant="outline" size="sm">
                <Settings size={16} className="mr-2" />
                Paramètres
              </Button>
            </Link>
          </div>
          <div className="space-y-2">
            <p><span className="font-medium">Nom:</span> {user?.name}</p>
            <p><span className="font-medium">Email:</span> {user?.email}</p>
            <p><span className="font-medium">Type:</span> {role}</p>
            <p><span className="font-medium">Membre depuis:</span> {user?.createdAt.toLocaleDateString()}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Actions rapides</h2>
          <div className="space-y-3">
            <Link to="/add-startup">
              <Button variant="outline" className="w-full justify-start">
                <PlusCircle size={20} className="mr-2" />
                Ajouter une startup
              </Button>
            </Link>
            <Link to="/settings">
              <Button variant="outline" className="w-full justify-start">
                <Settings size={20} className="mr-2" />
                Gérer mon compte
              </Button>
            </Link>
            {role === 'investor' && (
              <Link to="/investor">
                <Button variant="outline" className="w-full justify-start">
                  <Briefcase size={20} className="mr-2" />
                  Espace investisseur
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Startups List */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Mes Startups</h2>
        {userStartups.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Vous n'avez pas encore ajouté de startup</p>
            <Link to="/add-startup">
              <Button variant="outline">Ajouter votre première startup</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userStartups.map((startup) => (
              <div key={startup.id} className="border rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={startup.logo}
                    alt={startup.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{startup.name}</h3>
                    <p className="text-sm text-gray-600">{startup.category}</p>
                    <p className="text-sm text-gray-500">
                      {startup.city}, {startup.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard