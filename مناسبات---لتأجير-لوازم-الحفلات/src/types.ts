export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rentalDuration: string;
  includesSetup: boolean;
}

export interface Review {
  id: string;
  name: string;
  event: string;
  city: string;
  text: string;
  rating: number;
  image?: string;
}

export interface Package {
  id: string;
  name: string;
  price: number;
  features: string[];
  notIncluded: string[];
  type: 'silver' | 'gold' | 'vip';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}
