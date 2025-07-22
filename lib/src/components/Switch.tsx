import React from 'react';
import { cn } from '../lib/utils';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, size = 'md', label, checked, ...props }, ref) => {
    const sizes = {
      sm: {
        track: 'h-4 w-7',
        thumb: 'h-3 w-3',
        translate: 'translate-x-3'
      },
      md: {
        track: 'h-5 w-9',
        thumb: 'h-4 w-4',
        translate: 'translate-x-4'
      },
      lg: {
        track: 'h-6 w-11',
        thumb: 'h-5 w-5',
        translate: 'translate-x-5'
      }
    };
    
    const sizeConfig = sizes[size];
    
    return (
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={checked}
            ref={ref}
            {...props}
          />
          <div
            className={cn(
              'block rounded-full transition-colors duration-200',
              sizeConfig.track,
              checked
                ? 'bg-primary'
                : 'bg-input',
              className
            )}
          >
            <div
              className={cn(
                'absolute left-0.5 top-0.5 bg-background rounded-full transition-transform duration-200',
                sizeConfig.thumb,
                checked ? sizeConfig.translate : 'translate-x-0'
              )}
            />
          </div>
        </div>
        {label && (
          <span className="ml-3 text-sm font-medium text-foreground">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = 'Switch';

export { Switch };