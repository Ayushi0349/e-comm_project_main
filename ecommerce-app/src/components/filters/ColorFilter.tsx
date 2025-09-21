import React from 'react';
import { Check } from 'lucide-react';
import { colors } from '@/data/products';
import type { Color } from '@/types';

interface ColorFilterProps {
  selectedColors: string[];
  onChange: (colors: string[]) => void;
}

const ColorFilter: React.FC<ColorFilterProps> = ({ selectedColors, onChange }) => {
  const toggleColor = (colorHex: string) => {
    if (selectedColors.includes(colorHex)) {
      onChange(selectedColors.filter(c => c !== colorHex));
    } else {
      onChange([...selectedColors, colorHex]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((color: Color) => (
        <button
          key={color.hex}
          onClick={() => toggleColor(color.hex)}
          className={`w-6 h-6 rounded-full relative transition-all ${
            selectedColors.includes(color.hex)
              ? '  scale-110'
              : '  hover:border-gray-400'
          }`}
          style={{ backgroundColor: color.hex }}
          aria-label={`Select ${color.name} color`}
          aria-pressed={selectedColors.includes(color.hex)}
        >
          {selectedColors.includes(color.hex) && (
            <Check 
              size={16} 
              className="absolute inset-0 m-auto text-white drop-shadow-md"
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default ColorFilter;