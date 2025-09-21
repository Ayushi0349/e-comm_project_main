import React from 'react';
import clsx from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'hot' | 'new' | 'sale';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'hot', className }) => {
  const variants = {
    hot: 'bg-hot',
    new: 'bg-green-500',
    sale: 'bg-blue-500',
  };

  return (
    <span
      className={clsx(
        'absolute top-2 left-2 text-white text-xs px-2 py-1 rounded z-10 font-semibold',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;