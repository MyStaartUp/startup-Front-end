import React from 'react';
import { Trash2, Plus } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { 
  InvestmentPreference, 
  PortfolioSize, 
  InvestmentStage, 
  TicketSize, 
  StartupCategory 
} from '../../types';

interface InvestorFormProps {
  formData: {
    linkedinProfile: string;
    biography: string;
    investmentPreferences: InvestmentPreference[];
    portfolioSize: PortfolioSize;
    investmentStage: InvestmentStage[];
    ticketSize: TicketSize;
    sectors: StartupCategory[];
    achievements: string[];
  };
  error: string;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onFormChange: (field: string, value: any) => void;
  onArrayChange: (field: string, value: string, checked: boolean) => void;
  onAchievementChange: (index: number, value: string) => void;
  onAddAchievement: () => void;
  onRemoveAchievement: (index: number) => void;
}

const InvestorForm: React.FC<InvestorFormProps> = ({
  formData,
  error,
  isLoading,
  onSubmit,
  onFormChange,
  onArrayChange,
  onAchievementChange,
  onAddAchievement,
  onRemoveAchievement
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
      <Input
        label="Profil LinkedIn"
        type="url"
        value={formData.linkedinProfile}
        onChange={(e) => onFormChange('linkedinProfile', e.target.value)}
        placeholder="https://fr.linkedin.com/in/votre-profil"
        required
      />

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Biographie
        </label>
        <textarea
          value={formData.biography}
          onChange={(e) => onFormChange('biography', e.target.value)}
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows={4}
          placeholder="Parlez-nous de votre expérience en tant qu'investisseur..."
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Préférences d'investissement
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {['B2B', 'B2C', 'Hardware', 'Software', 'Marketplace', 'SaaS'].map((pref) => (
            <label key={pref} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.investmentPreferences.includes(pref as InvestmentPreference)}
                onChange={(e) => onArrayChange('investmentPreferences', pref, e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{pref}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Taille du portefeuille
          </label>
          <select
            value={formData.portfolioSize}
            onChange={(e) => onFormChange('portfolioSize', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="0-5">0-5 startups</option>
            <option value="6-10">6-10 startups</option>
            <option value="11-20">11-20 startups</option>
            <option value="20+">20+ startups</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Ticket moyen
          </label>
          <select
            value={formData.ticketSize}
            onChange={(e) => onFormChange('ticketSize', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="10k-50k">10k€ - 50k€</option>
            <option value="50k-200k">50k€ - 200k€</option>
            <option value="200k-1M">200k€ - 1M€</option>
            <option value="1M+">1M€ +</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Stades d'investissement
        </label>
        <div className="flex flex-wrap gap-2">
          {['Seed', 'Series A', 'Series B', 'Growth'].map((stage) => (
            <label key={stage} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.investmentStage.includes(stage as InvestmentStage)}
                onChange={(e) => onArrayChange('investmentStage', stage, e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{stage}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Secteurs d'intérêt
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {['Tech', 'Health', 'Education', 'Finance', 'Other'].map((sector) => (
            <label key={sector} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.sectors.includes(sector as StartupCategory)}
                onChange={(e) => onArrayChange('sectors', sector, e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{sector}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="block text-sm font-medium text-gray-700">
            Réalisations notables
          </label>
          <Button
            type="button"
            variant="outline"
            onClick={onAddAchievement}
            className="flex items-center space-x-1 text-sm"
          >
            <Plus size={16} />
            <span>Ajouter</span>
          </Button>
        </div>
        <div className="space-y-2">
          {formData.achievements.map((achievement, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Input
                value={achievement}
                onChange={(e) => onAchievementChange(index, e.target.value)}
                placeholder="Ex: Exit réussi de la startup X en 2022"
                className="flex-1"
              />
              {formData.achievements.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onRemoveAchievement(index)}
                  className="p-2"
                >
                  <Trash2 size={16} className="text-red-500" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg">
          {error}
        </div>
      )}

      <Button
        type="submit"
        className="w-full"
        isLoading={isLoading}
      >
        Créer mon profil investisseur
      </Button>
    </form>
  );
};

export default InvestorForm;