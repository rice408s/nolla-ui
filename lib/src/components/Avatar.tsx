import React from 'react';
import { cn } from '../lib/utils';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  initials?: string;
  fallback?: React.ReactNode;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, size = 'md', initials, fallback, ...props }, ref) => {
    const [imageError, setImageError] = React.useState(false);
    
    const sizes = {
      sm: 'h-8 w-8 text-xs',
      md: 'h-10 w-10 text-sm',
      lg: 'h-12 w-12 text-base',
      xl: 'h-16 w-16 text-lg'
    };
    
    const handleImageError = () => {
      setImageError(true);
    };
    
    const renderFallback = () => {
      if (fallback) return fallback;
      if (initials) {
        return (
          <span className="font-medium text-white">
            {initials.slice(0, 2).toUpperCase()}
          </span>
        );
      }
      return (
        <svg
          className="h-full w-full text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    };
    
    return (
      <div
        className={cn(
          'relative flex shrink-0 overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-purple-600',
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {src && !imageError ? (
          <img
            className="aspect-square h-full w-full object-cover"
            src={src}
            alt={alt}
            onError={handleImageError}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            {renderFallback()}
          </div>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export { Avatar };