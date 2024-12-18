import React from 'react';
import { Settings, Mail, Bell } from 'lucide-react';
import { User } from '../../types';
import Button from '../ui/Button';

interface UserProfileProps {
  user: User;
  onEditProfile: () => void;
  onChangeSettings: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  user,
  onEditProfile,
  onChangeSettings
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
          <p className="text-gray-500">{user.email}</p>
        </div>
        <Button variant="outline" onClick={onEditProfile}>
          Modifier le profil
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg text-center">
          <div className="text-2xl font-bold text-gray-900">12</div>
          <div className="text-sm text-gray-500">Startups suivies</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg text-center">
          <div className="text-2xl font-bold text-gray-900">5</div>
          <div className="text-sm text-gray-500">Startups créées</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg text-center">
          <div className="text-2xl font-bold text-gray-900">8</div>
          <div className="text-sm text-gray-500">Connexions</div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Paramètres rapides</h2>
        <div className="space-y-2">
          <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-gray-400" />
              <span>Notifications</span>
            </div>
            <span className="text-sm text-gray-500">Activées</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <span>Emails</span>
            </div>
            <span className="text-sm text-gray-500">Hebdomadaires</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Settings className="w-5 h-5 text-gray-400" />
              <span>Préférences</span>
            </div>
            <span className="text-sm text-gray-500">Gérer</span>
          </button>
        </div>
      </div>

      <div className="pt-6 border-t">
        <Button
          variant="outline"
          className="w-full"
          onClick={onChangeSettings}
        >
          Paramètres avancés
        </Button>
      </div>
    </div>
  );
};