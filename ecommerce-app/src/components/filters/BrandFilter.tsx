import React from 'react';
import { brands } from '@/data/products';

interface BrandFilterProps {
  selectedBrands: string[];
  onChange: (brands: string[]) => void;
}

const BrandFilter: React.FC<BrandFilterProps> = ({ selectedBrands, onChange }) => {
  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      onChange(selectedBrands.filter(b => b !== brand));
    } else {
      onChange([...selectedBrands, brand]);
    }
  };

  return (
    <div className="space-y-2">
      {brands.map((brand: string) => (
        <label
          key={brand}
          className="flex items-center space-x-2 cursor-pointer hover:text-primary transition-colors"
        >
          <input
            type="checkbox"
            checked={selectedBrands.includes(brand)}
            onChange={() => toggleBrand(brand)}
            className="accent-primary cursor-pointer"
            aria-label={`Filter by ${brand}`}
          />
          <span className="text-sm">{brand}</span>
        </label>
      ))}
    </div>
  );
};

export default BrandFilter;