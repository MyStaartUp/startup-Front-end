export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export interface Startup {
  id: string;
  name: string;
  description: string;
  logo: string;
  category: StartupCategory;
  city: string;
  country: string;
  status: StartupStatus;
  userId: string;
  createdAt: Date;
}

export interface Investor {
  id: string;
  userId: string;
  linkedinProfile: string;
  biography: string;
  investmentPreferences: InvestmentPreference[];
  portfolioSize: PortfolioSize;
  investmentStage: InvestmentStage[];
  ticketSize: TicketSize;
  sectors: StartupCategory[];
  achievements: string[];
  createdAt: Date;
}

export type StartupCategory = 'Tech' | 'Health' | 'Education' | 'Finance' | 'Other';
export type StartupStatus = 'New' | 'Seeking Funding' | 'Growing';
export type InvestmentPreference = 'B2B' | 'B2C' | 'Hardware' | 'Software' | 'Marketplace' | 'SaaS';
export type PortfolioSize = '0-5' | '6-10' | '11-20' | '20+';
export type InvestmentStage = 'Seed' | 'Series A' | 'Series B' | 'Growth';
export type TicketSize = '10k-50k' | '50k-200k' | '200k-1M' | '1M+';