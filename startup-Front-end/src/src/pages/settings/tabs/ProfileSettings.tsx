import React from 'react';
import { useAuthStore } from '@/store/authStore';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { profileSchema } from '@/utils/validation';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Camera } from 'lucide-react';

const ProfileSettings: React.FC = () => {
  const { user, updateUser } = useAuthStore();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      linkedin: user?.socialLinks?.linkedin || '',
      twitter: user?.socialLinks?.twitter || '',
      website: user?.socialLinks?.website || ''
    }
  });

  const onSubmit = async (data: any) => {
    try {
      await updateUser({
        name: data.name,
        email: data.email,
        socialLinks: {
          linkedin: data.linkedin,
          twitter: data.twitter,
          website: data.website
        }
      });
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="mb-6 flex items-center gap-4">
        <div className="relative">
          <img
            src={user?.avatar || 'https://via.placeholder.com/100'}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <button className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700">
            <Camera size={16} />
          </button>
        </div>
        <div>
          <h2 className="text-xl font-semibold">{user?.name}</h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Nom complet"
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          label="Email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
        />
        
        <div className="border-t pt-4 mt-6">
          <h3 className="text-lg font-medium mb-4">Réseaux sociaux</h3>
          <Input
            label="LinkedIn"
            {...register('linkedin')}
            placeholder="https://linkedin.com/in/username"
            error={errors.linkedin?.message}
          />
          <Input
            label="Twitter"
            {...register('twitter')}
            placeholder="https://twitter.com/username"
            error={errors.twitter?.message}
          />
          <Input
            label="Site web"
            {...register('website')}
            placeholder="https://example.com"
            error={errors.website?.message}
          />
        </div>

        <Button type="submit" isLoading={isSubmitting}>
          Sauvegarder les modifications
        </Button>
      </form>
    </div>
  );
};

export default ProfileSettings