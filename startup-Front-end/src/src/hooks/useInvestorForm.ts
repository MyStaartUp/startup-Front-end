import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InvestmentPreference, PortfolioSize, InvestmentStage, TicketSize, StartupCategory } from '../types';

interface InvestorFormData {
  linkedinProfile: string;
  biography: string;
  investmentPreferences: InvestmentPreference[];
  portfolioSize: PortfolioSize;
  investmentStage: InvestmentStage[];
  ticketSize: TicketSize;
  sectors: StartupCategory[];
  achievements: string[];
}

export const useInvestorForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<InvestorFormData>({
    linkedinProfile: '',
    biography: '',
    investmentPreferences: [],
    portfolioSize: '0-5',
    investmentStage: [],
    ticketSize: '10k-50k',
    sectors: [],
    achievements: ['']
  });

  const handleLinkedInValidation = (url: string) => {
    const linkedInRegex = /^https:\/\/[a-z]{2,3}\.linkedin\.com\/.*$/;
    if (!linkedInRegex.test(url)) {
      setError('Veuillez entrer une URL LinkedIn valide');
      return false;
    }
    return true;
  };

  const handleFormChange = (field: keyof InvestorFormData, value: any) => {
    if (field === 'linkedinProfile' && !handleLinkedInValidation(value)) {
      return;
    }
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleArrayChange = (field: keyof InvestorFormData, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field] as string[]), value]
        : (prev[field] as string[]).filter(item => item !== value)
    }));
  };

  const handleAchievementChange = (index: number, value: string) => {
    const newAchievements = [...formData.achievements];
    newAchievements[index] = value;
    setFormData(prev => ({ ...prev, achievements: newAchievements }));
  };

  const addAchievement = () => {
    setFormData(prev => ({
      ...prev,
      achievements: [...prev.achievements, '']
    }));
  };

  const removeAchievement = (index: number) => {
    setFormData(prev => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (!formData.linkedinProfile || !handleLinkedInValidation(formData.linkedinProfile)) {
        throw new Error('Profil LinkedIn invalide');
      }

      if (formData.biography.length < 100) {
        throw new Error('La biographie doit contenir au moins 100 caractères');
      }

      if (formData.investmentPreferences.length === 0) {
        throw new Error('Veuillez sélectionner au moins une préférence d\'investissement');
      }

      if (formData.investmentStage.length === 0) {
        throw new Error('Veuillez sélectionner au moins un stade d\'investissement');
      }

      if (formData.sectors.length === 0) {
        throw new Error('Veuillez sélectionner au moins un secteur');
      }

      // Simulation d'un appel API
      console.log('Investor data:', formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    error,
    isLoading,
    handleFormChange,
    handleArrayChange,
    handleAchievementChange,
    addAchievement,
    removeAchievement,
    handleSubmit
  };
};

export default useInvestorForm;