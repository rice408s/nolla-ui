import React from 'react';
import { cn } from '../lib/utils';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'destructive';
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, color = 'primary', showLabel = false, size = 'md', ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    
    const colors = {
      primary: 'bg-gradient-to-r from-indigo-500 to-purple-600',
      secondary: 'bg-secondary',
      success: 'bg-gradient-to-r from-green-500 to-emerald-600',
      warning: 'bg-gradient-to-r from-yellow-500 to-orange-500',
      destructive: 'bg-gradient-to-r from-red-500 to-pink-600'
    };
    
    const sizes = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3'
    };
    
    return (
      <div className="w-full space-y-2" ref={ref} {...props}>
        {showLabel && (
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Progress</span>
            <span>{Math.round(percentage)}%</span>
          </div>
        )}
        <div
          className={cn(
            'w-full bg-secondary rounded-full overflow-hidden',
            sizes[size],
            className
          )}
        >
          <div
            className={cn(
              'h-full rounded-full transition-all duration-300 ease-in-out',
              colors[color]
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = 'Progress';

export { Progress };