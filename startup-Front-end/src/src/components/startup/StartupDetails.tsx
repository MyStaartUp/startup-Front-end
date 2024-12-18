import React from 'react';
import { Heart, Share2, MessageCircle } from 'lucide-react';
import { Startup } from '../../types';
import Button from '../ui/Button';

interface StartupDetailsProps {
  startup: Startup;
  onFavorite: () => void;
  onShare: () => void;
  onContact: () => void;
}

export const StartupDetails: React.FC<StartupDetailsProps> = ({
  startup,
  onFavorite,
  onShare,
  onContact
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64">
        <img
          src={startup.logo}
          alt={`${startup.name} logo`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{startup.name}</h1>
            <p className="text-gray-500">
              {startup.city}, {startup.country}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onFavorite}>
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="outline" onClick={onShare}>
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{startup.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
              {startup.category}
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
              {startup.status}
            </span>
          </div>
        </div>

        <div className="pt-6 border-t">
          <Button
            className="w-full flex items-center justify-center gap-2"
            onClick={onContact}
          >
            <MessageCircle className="w-5 h-5" />
            Contacter
          </Button>
        </div>
      </div>
    </div>
  );
};