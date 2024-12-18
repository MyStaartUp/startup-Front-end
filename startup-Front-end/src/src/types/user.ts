export type UserRole = 'individual' | 'investor' | 'company';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  twoFactorEnabled?: boolean;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface UserSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  newsletter: boolean;
  language: string;
  theme: 'light' | 'dark' | 'system';
}