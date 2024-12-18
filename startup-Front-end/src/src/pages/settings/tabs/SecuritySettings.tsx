import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Shield, Key, Smartphone } from 'lucide-react';

interface SecurityFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const SecuritySettings: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<SecurityFormData>();
  const [twoFactorEnabled, setTwoFactorEnabled] = React.useState(false);

  const onSubmit = async (data: SecurityFormData) => {
    try {
      // Simuler une sauvegarde API
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Password updated:', data);
      reset();
    } catch (error) {
      console.error('Failed to update password:', error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Changement de mot de passe */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center gap-2 mb-4">
          <Key className="w-5 h-5 text-blue-500" />
          <h3 className="text-lg font-medium">Changer le mot de passe</h3>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            type="password"
            label="Mot de passe actuel"
            {...register('currentPassword', { required: true })}
            error={errors.currentPassword?.message}
          />
          <Input
            type="password"
            label="Nouveau mot de passe"
            {...register('newPassword', { required: true })}
            error={errors.newPassword?.message}
          />
          <Input
            type="password"
            label="Confirmer le nouveau mot de passe"
            {...register('confirmPassword', { required: true })}
            error={errors.confirmPassword?.message}
          />
          <Button type="submit" isLoading={isSubmitting}>
            Mettre à jour le mot de passe
          </Button>
        </form>
      </div>

      {/* Authentification à deux facteurs */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center gap-2 mb-4">
          <Smartphone className="w-5 h-5 text-blue-500" />
          <h3 className="text-lg font-medium">Authentification à deux facteurs</h3>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 mb-2">
              Ajoutez une couche de sécurité supplémentaire à votre compte
            </p>
            <p className="text-sm text-gray-500">
              {twoFactorEnabled 
                ? 'L\'authentification à deux facteurs est activée'
                : 'L\'authentification à deux facteurs est désactivée'}
            </p>
          </div>
          <Button
            variant={twoFactorEnabled ? 'outline' : 'primary'}
            onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
          >
            {twoFactorEnabled ? 'Désactiver' : 'Activer'}
          </Button>
        </div>
      </div>

      {/* Sessions actives */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-blue-500" />
          <h3 className="text-lg font-medium">Sessions actives</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">Chrome - Windows</p>
              <p className="text-sm text-gray-500">Dernière activité: Il y a 2 minutes</p>
            </div>
            <Button variant="outline" size="sm">
              Déconnecter
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">Safari - iPhone</p>
              <p className="text-sm text-gray-500">Dernière activité: Il y a 1 jour</p>
            </div>
            <Button variant="outline" size="sm">
              Déconnecter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;