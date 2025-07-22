import React from 'react';
import { cn } from '../lib/utils';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, size = 'md', label, ...props }, ref) => {
    const sizes = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6'
    };
    
    return (
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="radio"
            className={cn(
              'peer appearance-none rounded-full border-2 border-input bg-background transition-colors duration-200',
              'checked:bg-primary checked:border-primary',
              'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
              'disabled:cursor-not-allowed disabled:opacity-50',
              sizes[size],
              className
            )}
            ref={ref}
            {...props}
          />
          {/* Radio dot */}
          <div
            className={cn(
              'absolute inset-0 flex items-center justify-center',
              'opacity-0 peer-checked:opacity-100 transition-opacity duration-200'
            )}
          >
            <div className="w-2 h-2 bg-primary-foreground rounded-full" />
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

Radio.displayName = 'Radio';

export { Radio };

export interface RadioGroupProps {
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  children: React.ReactNode;
  className?: string;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, value, onValueChange, name, children, ...props }, ref) => {
    return (
      <div
        className={cn('space-y-2', className)}
        ref={ref}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement<RadioProps>(child) && child.type === Radio) {
            return React.cloneElement(child, {
              ...child.props,
              name,
              checked: child.props.value === value,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.checked && onValueChange && child.props.value) {
                  onValueChange(String(child.props.value));
                }
                child.props.onChange?.(e);
              }
            } as RadioProps);
          }
          return child;
        })}
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export { RadioGroup };