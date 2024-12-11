import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

interface LogoUploadProps {
  logoPreview: string | null;
  onLogoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const LogoUpload: React.FC<LogoUploadProps> = ({ logoPreview, onLogoChange, error }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Logo de la startup
      </label>
      <div 
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors"
        onClick={() => fileInputRef.current?.click()}
      >
        {logoPreview ? (
          <div className="space-y-4">
            <img 
              src={logoPreview} 
              alt="Logo preview" 
              className="mx-auto h-32 w-32 object-contain"
            />
            <p className="text-sm text-gray-500">Cliquez pour changer le logo</p>
          </div>
        ) : (
          <div className="space-y-2">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="text-sm text-gray-600">
              <p className="font-medium">Cliquez pour uploader</p>
              <p>PNG, JPG, JPEG (max. 2Mo)</p>
            </div>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/png,image/jpeg,image/jpg"
          onChange={onLogoChange}
          required
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default LogoUpload;