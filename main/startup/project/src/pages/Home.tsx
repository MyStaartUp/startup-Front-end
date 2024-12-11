import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Startup, StartupCategory, StartupStatus } from '../types';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<StartupCategory | ''>('');
  const [selectedStatus, setSelectedStatus] = useState<StartupStatus | ''>('');

  // Mock data - In a real app, this would come from an API
  const startups: Startup[] = [];

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Discover Amazing Startups
        </h1>
        <p className="text-xl text-gray-600">
          Find and connect with innovative startups from around the world
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex gap-4 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search startups..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as StartupCategory)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="">All Categories</option>
            <option value="Tech">Tech</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            <option value="Finance">Finance</option>
            <option value="Other">Other</option>
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as StartupStatus)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="">All Statuses</option>
            <option value="New">New</option>
            <option value="Seeking Funding">Seeking Funding</option>
            <option value="Growing">Growing</option>
          </select>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {startups.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No startups found. Be the first to add one!</p>
          </div>
        ) : (
          startups.map((startup) => (
            <div
              key={startup.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={startup.logo}
                alt={`${startup.name} logo`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">{startup.name}</h3>
                <p className="text-gray-600 line-clamp-2">{startup.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {startup.category}
                  </span>
                  <span className="text-gray-500">
                    {startup.city}, {startup.country}
                  </span>
                </div>
                <div className="flex justify-end">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                    {startup.status}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Home;