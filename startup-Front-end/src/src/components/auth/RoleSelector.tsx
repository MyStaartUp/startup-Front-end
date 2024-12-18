import React from 'react';
import { UserRole } from '@/types/user';
import { Building2, Users, Briefcase } from 'lucide-react';

interface RoleSelectorProps {
  selectedRole: UserRole;
  onRoleSelect: (role: UserRole) => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ selectedRole, onRoleSelect }) => {
  const roles = [
    {
      id: 'individual',
      label: 'Individuel',
      icon: Users,
      description: 'Je cherche à découvrir des startups innovantes'
    },
    {
      id: 'investor',
      label: 'Investisseur',
      icon: Briefcase,
      description: 'Je souhaite investir dans des startups prometteuses'
    },
    {
      id: 'company',
      label: 'Entreprise',
      icon: Building2,
      description: 'Je représente une entreprise'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {roles.map(({ id, label, icon: Icon, description }) => (
        <button
          key={id}
          onClick={() => onRoleSelect(id as UserRole)}
          className={`
            p-4 rounded-lg border-2 transition-all
            ${selectedRole === id 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-200 hover:border-blue-200'}
          `}
        >
          <Icon className="w-8 h-8 mb-2 mx-auto text-blue-600" />
          <h3 className="font-semibold mb-1">{label}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </button>
      ))}
    </div>
  );
}

export default RoleSelector