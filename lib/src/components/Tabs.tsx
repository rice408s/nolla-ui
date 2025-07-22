import React from 'react';
import { cn } from '../lib/utils';

export interface TabItem {
  label: string;
  value: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  activeTab?: string;
  onTabChange?: (value: string) => void;
  variant?: 'default' | 'pills' | 'underline';
  className?: string;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ items, activeTab, onTabChange, variant = 'default', className }, ref) => {
    const [internalActiveTab, setInternalActiveTab] = React.useState(items[0]?.value || '');
    
    const currentActiveTab = activeTab !== undefined ? activeTab : internalActiveTab;
    
    const handleTabChange = (value: string) => {
      setInternalActiveTab(value);
      onTabChange?.(value);
    };
    
    const activeItem = items.find(item => item.value === currentActiveTab);
    
    const variants = {
      default: {
        container: 'border-b border-border',
        tab: 'px-4 py-2 font-medium text-sm transition-colors',
        active: 'text-primary border-b-2 border-primary',
        inactive: 'text-muted-foreground hover:text-foreground'
      },
      pills: {
        container: 'bg-muted p-1 rounded-lg',
        tab: 'px-3 py-1.5 font-medium text-sm rounded-md transition-colors',
        active: 'bg-background text-foreground shadow-sm',
        inactive: 'text-muted-foreground hover:text-foreground'
      },
      underline: {
        container: '',
        tab: 'px-4 py-2 font-medium text-sm transition-colors relative',
        active: 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary',
        inactive: 'text-muted-foreground hover:text-foreground'
      }
    };
    
    const variantConfig = variants[variant];
    
    return (
      <div className={cn('w-full', className)} ref={ref}>
        {/* Tab Navigation */}
        <div className={cn('flex', variantConfig.container)}>
          {items.map((item) => (
            <button
              key={item.value}
              onClick={() => !item.disabled && handleTabChange(item.value)}
              disabled={item.disabled}
              className={cn(
                variantConfig.tab,
                currentActiveTab === item.value
                  ? variantConfig.active
                  : variantConfig.inactive,
                item.disabled && 'opacity-50 cursor-not-allowed'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="mt-4">
          {activeItem?.content}
        </div>
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';

export { Tabs };

// Individual Tab components for more flexible usage
export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children: React.ReactNode;
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
TabsList.displayName = 'TabsList';

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);
TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
TabsContent.displayName = 'TabsContent';

export { TabsList, TabsTrigger, TabsContent };