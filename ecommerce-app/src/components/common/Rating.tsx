import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  count?: number;
  maxStars?: number;
  showCount?: boolean;
}

const Rating: React.FC<RatingProps> = ({ 
  value, 
  count = 0, 
  maxStars = 5, 
  showCount = true 
}) => {
  const stars = Array.from({ length: maxStars }, (_, i) => i + 1);
  const filledStars = Math.floor(value);

  return (
    <div className="flex items-center">
      <div className="flex">
        {stars.map((star) => (
          <Star
            key={star}
            size={16}
            className={`${
              star <= filledStars
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      {showCount && count > 0 && (
        <span className="text-xs text-gray-500 ml-1">({count})</span>
      )}
    </div>
  );
};

export default Rating;