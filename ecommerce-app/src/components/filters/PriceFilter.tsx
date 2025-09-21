import React from 'react';

interface PriceFilterProps {
  priceRange: [number, number];
  onChange: (range: [number, number]) => void;
  min?: number;
  max?: number;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  priceRange,
  onChange,
  min = 0,
  max = 750,
}) => {
  const handleMinChange = (value: number) => {
    onChange([value, Math.max(value, priceRange[1])]);
  };

  const handleMaxChange = (value: number) => {
    onChange([Math.min(priceRange[0], value), value]);
  };

  return (
    <div>
      <div className="flex items-center justify-between text-sm mb-3">
        <span className="text-gray-600">Ranger:</span>
        <span className="font-semibold">
          ${priceRange[0]} - ${priceRange[1]}
        </span>
      </div>
      
      <div className="space-y-3">
        <div className="relative">
          <input
            type="range"
            min={min}
            max={max}
            value={priceRange[0]}
            onChange={(e) => handleMinChange(Number(e.target.value))}
            className="w-full accent-primary"
            aria-label="Minimum price"
          />
        </div>
        
        <div className="relative">
          <input
            type="range"
            min={min}
            max={max}
            value={priceRange[1]}
            onChange={(e) => handleMaxChange(Number(e.target.value))}
            className="w-full accent-primary"
            aria-label="Maximum price"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;