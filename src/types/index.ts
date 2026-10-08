export interface CalculatorMeta {
  id: string;
  slug: string;
  name: string;
  category: 'wealth' | 'retirement' | 'protection' | 'goals';
  tagline: string;
  description: string;
  priority: 'P0' | 'P1' | 'P2';
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: 'Retirement' | 'Wealth Creation' | 'Financial Planning' | 'Protection' | 'Legacy';
  author: {
    name: string;
    role: string;
  };
  excerpt: string;
  featuredImage?: string;
  relatedCalculatorId?: string;
  content: string; // Markdown formatted
}

export interface Testimonial {
  quote: string;
  author: string;
  designation: string;
  city: string;
  associationYears: string;
}

export interface ServicePillar {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  offerings: string[];
  idealFor: string;
}

export interface CredibilityMetric {
  value: string;
  label: string;
  description: string;
}

export interface WorkshopItem {
  id: string;
  title: string;
  targetAudience: string;
  duration: string;
  description: string;
  keyTakeaways: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  experience?: string;
  image?: string;
  bio: string[];
  quote?: string;
  specialization: string[];
}

