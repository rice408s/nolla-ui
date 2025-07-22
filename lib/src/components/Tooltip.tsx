import React from 'react';
import { cn } from '../lib/utils';

export interface TooltipProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, position = 'top', children, className, delay = 200 }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const timeoutRef = React.useRef<NodeJS.Timeout>();
    
    const showTooltip = () => {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    };
    
    const hideTooltip = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsVisible(false);
    };
    
    React.useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);
    
    const positions = {
      top: {
        tooltip: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
        arrow: 'top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-100'
      },
      bottom: {
        tooltip: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
        arrow: 'bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-900 dark:border-b-gray-100'
      },
      left: {
        tooltip: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
        arrow: 'left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900 dark:border-l-gray-100'
      },
      right: {
        tooltip: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
        arrow: 'right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900 dark:border-r-gray-100'
      }
    };
    
    const positionConfig = positions[position];
    
    return (
      <div
        className="relative inline-block"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        ref={ref}
      >
        {children}
        
        {isVisible && (
          <div
            className={cn(
              'absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 rounded-lg shadow-lg',
              'animate-in fade-in-0 zoom-in-95 duration-200',
              'pointer-events-none whitespace-nowrap',
              positionConfig.tooltip,
              className
            )}
          >
            {content}
            <div className={cn('absolute', positionConfig.arrow)} />
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export { Tooltip };