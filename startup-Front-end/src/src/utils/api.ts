import { Startup, User } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const api = {
  auth: {
    login: async (email: string, password: string) => {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!response.ok) throw new Error('Erreur de connexion');
      return response.json();
    },
    register: async (data: Omit<User, 'id' | 'createdAt'>) => {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Erreur d\'inscription');
      return response.json();
    }
  },
  startups: {
    create: async (data: Omit<Startup, 'id' | 'userId' | 'createdAt'>) => {
      const response = await fetch(`${API_URL}/startups`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Erreur lors de la création de la startup');
      return response.json();
    },
    getAll: async () => {
      const response = await fetch(`${API_URL}/startups`);
      if (!response.ok) throw new Error('Erreur lors de la récupération des startups');
      return response.json();
    }
  }
};