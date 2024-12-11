import React from 'react';
import StartupForm from '../components/forms/StartupForm';
import useStartupForm from '../hooks/useStartupForm';

const AddStartup: React.FC = () => {
  const {
    formData,
    logoPreview,
    error,
    isLoading,
    handleLogoChange,
    handleFormChange,
    handleSubmit
  } = useStartupForm();

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Ajouter une Startup</h1>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <StartupForm
        formData={formData}
        logoPreview={logoPreview}
        error={error}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        onLogoChange={handleLogoChange}
        onFormChange={handleFormChange}
      />
    </div>
  );
};

export default AddStartup;