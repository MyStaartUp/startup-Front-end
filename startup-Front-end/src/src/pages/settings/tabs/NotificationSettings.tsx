import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';
import { Bell, Mail, MessageSquare } from 'lucide-react';

interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  newsletter: boolean;
  startupUpdates: boolean;
  investorMessages: boolean;
  marketingEmails: boolean;
}

const NotificationSettings: React.FC = () => {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<NotificationSettings>({
    defaultValues: {
      emailNotifications: true,
      pushNotifications: true,
      newsletter: true,
      startupUpdates: true,
      investorMessages: true,
      marketingEmails: false
    }
  });

  const onSubmit = async (data: NotificationSettings) => {
    try {
      // Simuler une sauvegarde API
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Notification settings saved:', data);
    } catch (error) {
      console.error('Failed to save notification settings:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Bell className="w-5 h-5 text-blue-500" />
            Notifications Push
          </h3>
          <div className="space-y-2 ml-7">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('pushNotifications')}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Activer les notifications push</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('startupUpdates')}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Mises à jour des startups suivies</span>
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-500" />
            Notifications par Email
          </h3>
          <div className="space-y-2 ml-7">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('emailNotifications')}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Activer les notifications par email</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('newsletter')}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Newsletter hebdomadaire</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('marketingEmails')}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Emails marketing et promotions</span>
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-500" />
            Messages
          </h3>
          <div className="space-y-2 ml-7">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('investorMessages')}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Messages des investisseurs</span>
            </label>
          </div>
        </div>

        <Button type="submit" isLoading={isSubmitting}>
          Sauvegarder les préférences
        </Button>
      </form>
    </div>
  );
};

export default NotificationSettings;