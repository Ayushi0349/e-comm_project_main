import { useState, useMemo, useEffect } from 'react';
import type { Product, FilterState, SortOption } from '@/types';

const initialFilters: FilterState = {
  priceRange: [0, 750],
  selectedBrands: [],
  selectedColors: [],
  selectedCategories: [],
};

export const useFilters = (products: Product[]) => {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [searchQuery, setSearchQuery] = useState('');

  // Update URL params when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (filters.priceRange[0] > 0) params.set('minPrice', filters.priceRange[0].toString());
    if (filters.priceRange[1] < 750) params.set('maxPrice', filters.priceRange[1].toString());
    if (filters.selectedBrands.length > 0) params.set('brands', filters.selectedBrands.join(','));
    if (filters.selectedColors.length > 0) params.set('colors', filters.selectedColors.join(','));
    if (sortBy !== 'name') params.set('sort', sortBy);
    if (searchQuery) params.set('search', searchQuery);

    const queryString = params.toString();
    const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
    window.history.replaceState({}, '', newUrl);
  }, [filters, sortBy, searchQuery]);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Price filter
    filtered = filtered.filter(
      p => p.discountPrice >= filters.priceRange[0] && p.discountPrice <= filters.priceRange[1]
    );

    // Brand filter
    if (filters.selectedBrands.length > 0) {
      filtered = filtered.filter(p =>
        filters.selectedBrands.some((brand: string) => p.name.toLowerCase().includes(brand.toLowerCase()))
      );
    }

    // Color filter
    if (filters.selectedColors.length > 0) {
      filtered = filtered.filter(p =>
        p.colors && p.colors.some((color: string) => filters.selectedColors.includes(color))
      );
    }

    // Category filter
    if (filters.selectedCategories.length > 0) {
      filtered = filtered.filter(p =>
        filters.selectedCategories.includes(p.category)
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.discountPrice - b.discountPrice;
        case 'popularity':
          return b.ratingValue - a.ratingValue;
        default:
          return 0;
      }
    });

    return filtered;
  }, [products, filters, sortBy, searchQuery]);

  const resetFilters = () => {
    setFilters(initialFilters);
    setSortBy('name');
    setSearchQuery('');
  };

  return {
    filters,
    setFilters,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    filteredAndSortedProducts,
    resetFilters,
  };
};