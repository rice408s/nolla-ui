import React from 'react';
import { cn } from '../lib/utils';

export interface DropdownItem {
  label: string;
  value: string;
  onClick?: () => void;
  disabled?: boolean;
  separator?: boolean;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  className?: string;
  onItemClick?: (value: string) => void;
}

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ trigger, items, placement = 'bottom-start', className, onItemClick }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setIsOpen(false);
        }
      };
      
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
      }
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }, [isOpen]);
    
    const handleItemClick = (item: DropdownItem) => {
      if (!item.disabled) {
        item.onClick?.();
        onItemClick?.(item.value);
        setIsOpen(false);
      }
    };
    
    const placements = {
      'bottom-start': 'top-full left-0 mt-1',
      'bottom-end': 'top-full right-0 mt-1',
      'top-start': 'bottom-full left-0 mb-1',
      'top-end': 'bottom-full right-0 mb-1'
    };
    
    return (
      <div className={cn('relative inline-block', className)} ref={dropdownRef}>
        {/* Trigger */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
        >
          {trigger}
        </div>
        
        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className={cn(
              'absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
              'animate-in fade-in-0 zoom-in-95 duration-200',
              placements[placement]
            )}
            ref={ref}
          >
            {items.map((item, index) => (
              <React.Fragment key={item.value}>
                {item.separator && index > 0 && (
                  <div className="-mx-1 my-1 h-px bg-muted" />
                )}
                <div
                  onClick={() => handleItemClick(item)}
                  className={cn(
                    'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
                    item.disabled
                      ? 'pointer-events-none opacity-50'
                      : 'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer'
                  )}
                >
                  {item.label}
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';

export { Dropdown };

// Alternative component structure for more flexibility
export interface DropdownMenuProps {
  children: React.ReactNode;
}

export interface DropdownMenuTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
}

export interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  disabled?: boolean;
}

const DropdownMenu = ({ children }: DropdownMenuProps) => {
  return <div className="relative">{children}</div>;
};

const DropdownMenuTrigger = React.forwardRef<HTMLDivElement, DropdownMenuTriggerProps>(
  ({ children, asChild = false, ...props }, ref) => {
    if (asChild) {
      return React.cloneElement(children as React.ReactElement, { ref, ...props });
    }
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  }
);
DropdownMenuTrigger.displayName = 'DropdownMenuTrigger';

const DropdownMenuContent = React.forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ className, children, align = 'center', side = 'bottom', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
DropdownMenuContent.displayName = 'DropdownMenuContent';

const DropdownMenuItem = React.forwardRef<HTMLDivElement, DropdownMenuItemProps>(
  ({ className, children, disabled, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
        disabled
          ? 'pointer-events-none opacity-50'
          : 'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
DropdownMenuItem.displayName = 'DropdownMenuItem';

const DropdownMenuSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-muted', className)}
      {...props}
    />
  )
);
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
};