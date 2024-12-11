import React from 'react';
import InvestorForm from '../components/forms/InvestorForm';
import useInvestorForm from '../hooks/useInvestorForm';

const Investor: React.FC = () => {
  const {
    formData,
    error,
    isLoading,
    handleFormChange,
    handleArrayChange,
    handleAchievementChange,
    addAchievement,
    removeAchievement,
    handleSubmit
  } = useInvestorForm();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Profil Investisseur
        </h1>
        <p className="text-gray-600">
          Créez votre profil d'investisseur pour découvrir des startups prometteuses
          et entrer en contact avec des entrepreneurs innovants.
        </p>
      </div>

      <InvestorForm
        formData={formData}
        error={error}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        onFormChange={handleFormChange}
        onArrayChange={handleArrayChange}
        onAchievementChange={handleAchievementChange}
        onAddAchievement={addAchievement}
        onRemoveAchievement={removeAchievement}
      />
    </div>
  );
};

export default Investor;