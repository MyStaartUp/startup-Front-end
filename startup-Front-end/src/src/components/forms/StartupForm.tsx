import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import LogoUpload from './LogoUpload';
import { StartupCategory, StartupStatus } from '../../types';

interface StartupFormProps {
  formData: {
    name: string;
    description: string;
    logo: File | null;
    category: StartupCategory;
    city: string;
    country: string;
    status: StartupStatus;
  };
  logoPreview: string | null;
  error: string;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onLogoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFormChange: (field: string, value: string) => void;
}

const StartupForm: React.FC<StartupFormProps> = ({
  formData,
  logoPreview,
  error,
  isLoading,
  onSubmit,
  onLogoChange,
  onFormChange
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
      <Input
        label="Nom de la startup"
        value={formData.name}
        onChange={(e) => onFormChange('name', e.target.value)}
        required
      />

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => onFormChange('description', e.target.value)}
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows={4}
          required
        />
      </div>

      <LogoUpload
        logoPreview={logoPreview}
        onLogoChange={onLogoChange}
        error={error}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Catégorie
          </label>
          <select
            value={formData.category}
            onChange={(e) => onFormChange('category', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Sélectionner une catégorie</option>
            <option value="Tech">Tech</option>
            <option value="Health">Santé</option>
            <option value="Education">Éducation</option>
            <option value="Finance">Finance</option>
            <option value="Other">Autre</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Statut
          </label>
          <select
            value={formData.status}
            onChange={(e) => onFormChange('status', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Sélectionner un statut</option>
            <option value="New">Nouvelle</option>
            <option value="Seeking Funding">Recherche de financement</option>
            <option value="Growing">En croissance</option>
          </select>
        </div>

        <Input
          label="Ville"
          value={formData.city}
          onChange={(e) => onFormChange('city', e.target.value)}
          required
        />

        <Input
          label="Pays"
          value={formData.country}
          onChange={(e) => onFormChange('country', e.target.value)}
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        isLoading={isLoading}
      >
        Ajouter la Startup
      </Button>
    </form>
  );
};

export default StartupForm;