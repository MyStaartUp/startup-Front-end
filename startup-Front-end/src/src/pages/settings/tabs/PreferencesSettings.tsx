import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';
import { Globe, Moon, Sun } from 'lucide-react';

interface PreferencesFormData {
  language: string;
  theme: 'light' | 'dark' | 'system';
  timezone: string;
}

const PreferencesSettings: React.FC = () => {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<PreferencesFormData>({
    defaultValues: {
      language: 'fr',
      theme: 'system',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }
  });

  const onSubmit = async (data: PreferencesFormData) => {
    try {
      // Simuler une sauvegarde API
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Preferences saved:', data);
    } catch (error) {
      console.error('Failed to save preferences:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Langue */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-medium">Langue</h3>
          </div>
          <select
            {...register('language')}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="de">Deutsch</option>
          </select>
        </div>

        {/* Thème */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Sun className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-medium">Thème</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <label className="flex flex-col items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <Sun className="w-6 h-6 mb-2" />
              <input
                type="radio"
                value="light"
                {...register('theme')}
                className="sr-only"
              />
              <span>Clair</span>
            </label>
            <label className="flex flex-col items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <Moon className="w-6 h-6 mb-2" />
              <input
                type="radio"
                value="dark"
                {...register('theme')}
                className="sr-only"
              />
              <span>Sombre</span>
            </label>
            <label className="flex flex-col items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <div className="flex gap-1 mb-2">
                <Sun className="w-6 h-6" />
                <Moon className="w-6 h-6" />
              </div>
              <input
                type="radio"
                value="system"
                {...register('theme')}
                className="sr-only"
              />
              <span>Système</span>
            </label>
          </div>
        </div>

        {/* Fuseau horaire */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-medium">Fuseau horaire</h3>
          </div>
          <select
            {...register('timezone')}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Europe/Paris">Europe/Paris</option>
            <option value="America/New_York">America/New_York</option>
            <option value="Asia/Tokyo">Asia/Tokyo</option>
            <option value="Australia/Sydney">Australia/Sydney</option>
          </select>
        </div>

        <Button type="submit" isLoading={isSubmitting}>
          Sauvegarder les préférences
        </Button>
      </form>
    </div>
  );
};

export default PreferencesSettings;