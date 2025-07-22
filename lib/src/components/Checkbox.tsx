import React from 'react';
import { cn } from '../lib/utils';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  indeterminate?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, size = 'md', label, checked, indeterminate, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    
    React.useImperativeHandle(ref, () => inputRef.current!);
    
    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate || false;
      }
    }, [indeterminate]);
    
    const sizes = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6'
    };
    
    return (
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className={cn(
              'peer appearance-none rounded border-2 border-input bg-background transition-colors duration-200',
              'checked:bg-primary checked:border-primary',
              'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
              'disabled:cursor-not-allowed disabled:opacity-50',
              sizes[size],
              className
            )}
            checked={checked}
            ref={inputRef}
            {...props}
          />
          {/* Checkmark icon */}
          <svg
            className={cn(
              'absolute inset-0 w-full h-full text-primary-foreground pointer-events-none',
              'opacity-0 peer-checked:opacity-100 transition-opacity duration-200'
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
          {/* Indeterminate icon */}
          {indeterminate && (
            <div
              className={cn(
                'absolute inset-0 flex items-center justify-center text-primary-foreground',
                'opacity-100 transition-opacity duration-200'
              )}
            >
              <div className="w-2 h-0.5 bg-current" />
            </div>
          )}
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

Checkbox.displayName = 'Checkbox';

export { Checkbox };