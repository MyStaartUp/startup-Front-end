import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StartupCategory, StartupStatus } from '../types';

export const useStartupForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    logo: null as File | null,
    category: '' as StartupCategory,
    city: '',
    country: '',
    status: '' as StartupStatus
  });

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Le fichier doit être une image');
        return;
      }
      
      if (file.size > 2 * 1024 * 1024) {
        setError('L\'image ne doit pas dépasser 2 Mo');
        return;
      }

      setFormData({ ...formData, logo: file });
      setError('');

      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (!formData.logo) {
        throw new Error('Veuillez sélectionner un logo');
      }

      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          submitData.append(key, value);
        }
      });

      // Simulation d'un appel API
      console.log('Startup data:', submitData);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    logoPreview,
    error,
    isLoading,
    handleLogoChange,
    handleFormChange,
    handleSubmit
  };
};

export default useStartupForm;