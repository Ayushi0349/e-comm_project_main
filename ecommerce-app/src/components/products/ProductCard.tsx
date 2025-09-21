import React from 'react';
import type { Product } from '@/types';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg overflow-hidden flex hover:shadow-lg transition-shadow duration-300">
        <div className="relative w-48 h-48 flex-shrink-0">
          {product.isHot && (
            <span className="absolute top-3 left-3 bg-[#FF6875] text-white text-sm px-3 py-1 rounded z-10 font-medium">
              HOT
            </span>
          )}
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex-1">
          <h3 className="font-bold text-[#223263] text-lg mb-2">{product.name}</h3>
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < Math.floor(product.ratingValue) ? 'text-[#FFC600] fill-current' : 'text-gray-300'}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#40BFFF] text-xl font-bold">${product.discountPrice.toFixed(2)}</span>
            <span className="text-[#9098B1] line-through text-sm">${product.price.toFixed(2)}</span>
            <span className="text-[#FB7181] font-bold text-sm">{product.discountPercent}% Off</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 shadow-md border border-gray-200">
      <div className="relative bg-[#F6F7F8]">
        {product.isHot && (
          <span className="absolute top-3 left-3 bg-[#FF6875] text-white text-sm px-3 py-1 rounded z-10 font-medium">
            HOT
          </span>
        )}
        <div className="aspect-square p-4">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      
      <div className="p-4 text-center">
        <h3 className="font-bold text-[#223263] text-lg mb-3">{product.name}</h3>
        
        {/* Rating Stars */}
        <div className="flex justify-center items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={i < Math.floor(product.ratingValue) ? 'text-[#FFC600] fill-current' : 'text-gray-300'}
            />
          ))}
        </div>
        
        {/* Prices */}
        <div className="flex items-center justify-center gap-3">
          <span className="text-[#40BFFF] text-xl font-bold">${product.discountPrice.toFixed(2).replace('.', ',')}</span>
          <span className="text-[#9098B1] line-through text-sm">${product.price.toFixed(2).replace('.', ',')}</span>
          <span className="text-[#FB7181] font-bold text-sm">{product.discountPercent}% Off</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;