import React, { useState } from 'react';
import PriceFilter from './PriceFilter';
import ColorFilter from './ColorFilter';
import BrandFilter from './BrandFilter';
import type { FilterState } from '@/types';

interface SidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ filters, onFilterChange }) => {
  const [hotDealsOpen, setHotDealsOpen] = useState(true);
  const [pricesOpen, setPricesOpen] = useState(true);
  const [brandOpen, setBrandOpen] = useState(true);
  const [colorOpen, setColorOpen] = useState(true);

  const hotDealsData = [
    { name: 'Nike', count: 2 },
    { name: 'Airmax', count: 48 },
    { name: 'Nike', count: 14 },
    { name: 'Adidas', count: 15 },
    { name: 'Vans', count: 23 },
    { name: 'All Stars', count: 1 },
    { name: 'Adidas', count: 95 },
  ];

  return (
    <aside className="w-full md:w-80 rounded-lg">
      {/* Hot Deals Section */}
      <div className="mb-6 bg-[#F6F7F8] px-4 py-8">
        <button
          onClick={() => setHotDealsOpen(!hotDealsOpen)}
          className="flex items-center justify-between w-full text-left font-semibold mb-10"
        >
          <span>Hot Deals</span>
        </button>
          <div className="space-y-8 animate-fade-in">
            {hotDealsData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <span className="text-gray-600 hover:text-primary cursor-pointer transition-colors">
                  {item.name}
                </span>
                <span className="text-gray-400">{item.count}</span>
              </div>
            ))}
          </div>
      </div>

      {/* Prices Section */}
      <div className="mb-6 bg-[#F6F7F8] px-4 py-8">
        <button
          onClick={() => setPricesOpen(!pricesOpen)}
          className="flex items-center justify-between w-full text-left font-semibold mb-8"
          
        >
          <span>PRICES</span>
        </button>
          <div className="animate-fade-in">
            <PriceFilter
              priceRange={filters.priceRange}
              onChange={(range) =>
                onFilterChange({ ...filters, priceRange: range })
              }
            />
          </div>
      </div>

      {/* Color Section */}
      <div className="mb-6 bg-[#F6F7F8] px-4 py-8">
        <button
          onClick={() => setColorOpen(!colorOpen)}
          className="flex items-center justify-between w-full text-left font-semibold mb-8"
         
        >
          <span>COLOR</span>
        </button>
          <div className="animate-fade-in">
            <ColorFilter
              selectedColors={filters.selectedColors}
              onChange={(colors) =>
                onFilterChange({ ...filters, selectedColors: colors })
              }
            />
          </div>
      </div>

      {/* Brand Section */}
      <div className="mb-6 bg-[#F6F7F8] px-4 py-8">
        <button
          onClick={() => setBrandOpen(!brandOpen)}
          className="flex items-center justify-between w-full text-left font-semibold mb-8"
        >
          <span>BRAND</span>
        </button>
          <div className="animate-fade-in">
            <BrandFilter
              selectedBrands={filters.selectedBrands}
              onChange={(brands) =>
                onFilterChange({ ...filters, selectedBrands: brands })
              }
            />
          </div>
      </div>

      {/* More Button */}
      <button className="w-full py-2 text-center text-primary font-semibold hover:text-blue-600 transition">
        MORE
      </button>
    </aside>
  );
};

export default Sidebar;