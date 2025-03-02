export interface ProductImage {
  url: string;
  isPrimary: boolean;
  caption?: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: ProductImage[];
  seller: string;
  stock: number;
  rating: number;
  reviewCount: number;
  prime: boolean;
  features: string[];
  specifications: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
  search?: string;
}