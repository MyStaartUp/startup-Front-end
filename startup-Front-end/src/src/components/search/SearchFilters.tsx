import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { StartupCategory, StartupStatus } from '../../types';

interface SearchFiltersProps {
  onSearch: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  query: string;
  categories: StartupCategory[];
  status: StartupStatus[];
  location: string;
  fundingRange: string;
  sortBy: string;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch }) => {
  const [filters, setFilters] = React.useState<SearchFilters>({
    query: '',
    categories: [],
    status: [],
    location: '',
    fundingRange: '',
    sortBy: 'recent'
  });

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher une startup..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={filters.query}
            onChange={(e) => handleFilterChange('query', e.target.value)}
          />
        </div>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
          onClick={() => document.getElementById('advancedFilters')?.classList.toggle('hidden')}
        >
          <SlidersHorizontal size={20} />
          <span>Filtres</span>
        </button>
      </div>

      <div id="advancedFilters" className="hidden space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Catégories</label>
            {/* Catégories checkboxes */}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Statut</label>
            {/* Status checkboxes */}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Localisation</label>
            <input
              type="text"
              placeholder="Ville ou pays"
              className="w-full px-3 py-2 border rounded-lg"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-between">
          <select
            className="px-3 py-2 border rounded-lg"
            value={filters.sortBy}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          >
            <option value="recent">Plus récentes</option>
            <option value="popular">Plus populaires</option>
            <option value="funding">Levées de fonds</option>
          </select>

          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Appliquer les filtres
          </button>
        </div>
      </div>
    </form>
  );
};