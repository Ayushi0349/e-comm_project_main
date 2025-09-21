export interface Product {
    id: number;
    name: string;
    price: number;
    discountPrice: number;
    discountPercent: number;
    ratingValue: number;
    ratingCount: number;
    isHot: boolean;
    colors: string[];
    category: string;
    imageUrl: string;
  }
  
  export interface FilterState {
    priceRange: [number, number];
    selectedBrands: string[];
    selectedColors: string[];
    selectedCategories: string[];
  }
  
  export type SortOption = 'name' | 'price' | 'popularity';
  export type ViewMode = 'grid' | 'list';
  
  export interface PaginationState {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
  }
  
  export interface Color {
    name: string;
    hex: string;
  }