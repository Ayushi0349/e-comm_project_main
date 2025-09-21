import React from 'react';
import type { Product } from '@/types';
import ProductCard from './ProductCard';
import clsx from 'clsx';

interface ProductGridProps {
  products: Product[];
  viewMode: 'grid' | 'list';
  loading?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, viewMode, loading = false }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, idx) => (
          <div key={idx} className="bg-white rounded-lg p-4 animate-pulse">
            <div className="aspect-square bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No products found.</p>
        <p className="text-gray-400 text-sm mt-2">Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        'grid gap-6',
        viewMode === 'grid'
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1'
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} viewMode={viewMode} />
      ))}
    </div>
  );
};

export default ProductGrid;