import React from 'react';
import { cn } from '../lib/utils';

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onValueChange?: (value: number) => void;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  showValue?: boolean;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, min = 0, max = 100, step = 1, value = 0, onValueChange, size = 'md', label, showValue = false, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value);
    
    const currentValue = value !== undefined ? value : internalValue;
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      setInternalValue(newValue);
      onValueChange?.(newValue);
      props.onChange?.(e);
    };
    
    const percentage = ((currentValue - min) / (max - min)) * 100;
    
    const sizes = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3'
    };
    
    return (
      <div className="space-y-2">
        {(label || showValue) && (
          <div className="flex justify-between text-sm">
            {label && <span className="font-medium text-foreground">{label}</span>}
            {showValue && <span className="text-muted-foreground">{currentValue}</span>}
          </div>
        )}
        <div className="relative">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={currentValue}
            onChange={handleChange}
            className={cn(
              'w-full appearance-none bg-transparent cursor-pointer',
              'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              '[&::-webkit-slider-track]:bg-secondary [&::-webkit-slider-track]:rounded-full',
              '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5',
              '[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary',
              '[&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-0',
              '[&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-all',
              '[&::-webkit-slider-thumb]:hover:scale-110',
              '[&::-moz-range-track]:bg-secondary [&::-moz-range-track]:rounded-full [&::-moz-range-track]:border-0',
              '[&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5',
              '[&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary',
              '[&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0',
              sizes[size],
              className
            )}
            ref={ref}
            {...props}
          />
          {/* Track background */}
          <div
            className={cn(
              'absolute top-1/2 left-0 -translate-y-1/2 bg-secondary rounded-full pointer-events-none',
              'w-full',
              sizes[size]
            )}
          />
          {/* Progress fill */}
          <div
            className={cn(
              'absolute top-1/2 left-0 -translate-y-1/2 bg-primary rounded-full pointer-events-none',
              sizes[size]
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

Slider.displayName = 'Slider';

export { Slider };