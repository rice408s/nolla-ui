import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Copy, Check, Eye, Code } from 'lucide-react';

interface ComponentExample {
  title: string;
  description: string;
  code: string;
  preview: React.ReactNode;
}

const componentData: Record<string, {
  title: string;
  description: string;
  examples: ComponentExample[];
  props?: Array<{
    name: string;
    type: string;
    default?: string;
    description: string;
  }>;
}> = {
  switch: {
    title: 'Switch',
    description: 'A toggle switch component for binary choices.',
    examples: [
      {
        title: 'Basic Switch',
        description: 'Simple toggle switch',
        code: `<label className="flex items-center cursor-pointer">
  <input type="checkbox" className="sr-only" />
  <div className="relative">
    <div className="w-10 h-6 bg-gray-300 rounded-full transition-colors duration-200"></div>
    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200"></div>
  </div>
  <span className="ml-3 text-gray-700">Enable notifications</span>
</label>`,
        preview: (
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only" />
            <div className="relative">
              <div className="w-10 h-6 bg-gray-300 rounded-full transition-colors duration-200"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200"></div>
            </div>
            <span className="ml-3 text-gray-700">Enable notifications</span>
          </label>
        )
      }
    ],
    props: [
      { name: 'checked', type: 'boolean', description: 'Whether the switch is checked' },
      { name: 'onChange', type: 'function', description: 'Function called when switch state changes' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether the switch is disabled' },
      { name: 'label', type: 'string', description: 'Label text for the switch' }
    ]
  },
  checkbox: {
    title: 'Checkbox',
    description: 'A checkbox component for multiple selections.',
    examples: [
      {
        title: 'Basic Checkbox',
        description: 'Simple checkbox input',
        code: `<label className="flex items-center cursor-pointer">
  <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
  <span className="ml-2 text-gray-700">I agree to the terms</span>
</label>`,
        preview: (
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
            <span className="ml-2 text-gray-700">I agree to the terms</span>
          </label>
        )
      }
    ],
    props: [
      { name: 'checked', type: 'boolean', description: 'Whether the checkbox is checked' },
      { name: 'onChange', type: 'function', description: 'Function called when checkbox state changes' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether the checkbox is disabled' },
      { name: 'label', type: 'string', description: 'Label text for the checkbox' }
    ]
  },
  radio: {
    title: 'Radio',
    description: 'A radio button component for single selections.',
    examples: [
      {
        title: 'Radio Group',
        description: 'Radio button group',
        code: `<div className="space-y-2">
  <label className="flex items-center cursor-pointer">
    <input type="radio" name="size" value="small" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
    <span className="ml-2 text-gray-700">Small</span>
  </label>
  <label className="flex items-center cursor-pointer">
    <input type="radio" name="size" value="medium" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
    <span className="ml-2 text-gray-700">Medium</span>
  </label>
  <label className="flex items-center cursor-pointer">
    <input type="radio" name="size" value="large" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
    <span className="ml-2 text-gray-700">Large</span>
  </label>
</div>`,
        preview: (
          <div className="space-y-2">
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="size" value="small" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
              <span className="ml-2 text-gray-700">Small</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="size" value="medium" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
              <span className="ml-2 text-gray-700">Medium</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="size" value="large" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
              <span className="ml-2 text-gray-700">Large</span>
            </label>
          </div>
        )
      }
    ],
    props: [
      { name: 'checked', type: 'boolean', description: 'Whether the radio is checked' },
      { name: 'onChange', type: 'function', description: 'Function called when radio state changes' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether the radio is disabled' },
      { name: 'name', type: 'string', description: 'Name attribute for grouping radios' },
      { name: 'value', type: 'string', description: 'Value of the radio button' }
    ]
  },
  select: {
    title: 'Select',
    description: 'A dropdown select component for choosing from options.',
    examples: [
      {
        title: 'Basic Select',
        description: 'Dropdown select input',
        code: `<select className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-blue-500 transition-colors duration-200">
  <option>Choose an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>`,
        preview: (
          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-blue-500 transition-colors duration-200">
            <option>Choose an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        )
      }
    ],
    props: [
      { name: 'value', type: 'string', description: 'Selected value' },
      { name: 'onChange', type: 'function', description: 'Function called when selection changes' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether the select is disabled' },
      { name: 'options', type: 'array', description: 'Array of option objects' },
      { name: 'placeholder', type: 'string', description: 'Placeholder text' }
    ]
  },
  button: {
    title: 'Button',
    description: 'A versatile button component with multiple variants and sizes.',
    examples: [
      {
        title: 'Default Button',
        description: 'Basic button with default styling',
        code: `<button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
  Click me
</button>`,
        preview: (
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
            Click me
          </button>
        )
      },
      {
        title: 'Secondary Button',
        description: 'Button with secondary styling',
        code: `<button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200">
  Secondary
</button>`,
        preview: (
          <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200">
            Secondary
          </button>
        )
      },
      {
        title: 'Outline Button',
        description: 'Button with outline styling',
        code: `<button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200">
  Outline
</button>`,
        preview: (
          <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200">
            Outline
          </button>
        )
      }
    ],
    props: [
      { name: 'variant', type: 'string', default: 'primary', description: 'Button variant (primary, secondary, outline)' },
      { name: 'size', type: 'string', default: 'md', description: 'Button size (sm, md, lg)' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether the button is disabled' },
      { name: 'onClick', type: 'function', description: 'Click handler function' }
    ]
  },
  input: {
    title: 'Input',
    description: 'A flexible input component with various states and validation.',
    examples: [
      {
        title: 'Default Input',
        description: 'Basic input field',
        code: `<input 
  type="text" 
  placeholder="Enter text..." 
  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-blue-500 transition-colors duration-200"
/>`,
        preview: (
          <input 
            type="text" 
            placeholder="Enter text..." 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-blue-500 transition-colors duration-200"
          />
        )
      },
      {
        title: 'Input with Label',
        description: 'Input field with label',
        code: `<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-700">Email</label>
  <input 
    type="email" 
    placeholder="Enter your email" 
    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-blue-500 transition-colors duration-200"
  />
</div>`,
        preview: (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-blue-500 transition-colors duration-200"
            />
          </div>
        )
      }
    ],
    props: [
      { name: 'type', type: 'string', default: 'text', description: 'Input type (text, email, password, etc.)' },
      { name: 'placeholder', type: 'string', description: 'Placeholder text' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether the input is disabled' },
      { name: 'error', type: 'string', description: 'Error message to display' }
    ]
  },
  card: {
    title: 'Card',
    description: 'A flexible card component for displaying content.',
    examples: [
      {
        title: 'Basic Card',
        description: 'Simple card with content',
        code: `<div className="bg-white rounded-lg border border-gray-200 p-6">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">Card Title</h3>
  <p className="text-gray-600 leading-relaxed">This is a basic card component with flat design.</p>
</div>`,
        preview: (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Card Title</h3>
            <p className="text-gray-600 leading-relaxed">This is a basic card component with flat design.</p>
          </div>
        )
      },
      {
        title: 'Card with Image',
        description: 'Card with header image',
        code: `<div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
  <div className="h-48 bg-blue-500"></div>
  <div className="p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-3">Card with Image</h3>
    <p className="text-gray-600 leading-relaxed">This card includes a simple header image area.</p>
  </div>
</div>`,
        preview: (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="h-48 bg-blue-500"></div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Card with Image</h3>
              <p className="text-gray-600 leading-relaxed">This card includes a simple header image area.</p>
            </div>
          </div>
        )
      }
    ],
    props: [
      { name: 'children', type: 'ReactNode', description: 'Card content' },
      { name: 'className', type: 'string', description: 'Additional CSS classes' },
      { name: 'padding', type: 'string', default: 'md', description: 'Card padding (sm, md, lg)' }
    ]
  },
  modal: {
    title: 'Modal',
    description: 'A flexible modal dialog component for displaying content in an overlay.',
    examples: [
      {
        title: 'Basic Modal',
        description: 'Simple modal with content',
        code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
  <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
    <h3 className="text-xl font-bold text-gray-900 mb-4">Modal Title</h3>
    <p className="text-gray-600 mb-6">This is a modal dialog with some content.</p>
    <div className="flex gap-3 justify-end">
      <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">Cancel</button>
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">Confirm</button>
    </div>
  </div>
</div>`,
        preview: (
          <div className="relative bg-gray-100 rounded-xl p-8 min-h-[200px] flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modal Title</h3>
              <p className="text-gray-600 mb-6">This is a modal dialog with some content.</p>
              <div className="flex gap-3 justify-end">
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">Cancel</button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">Confirm</button>
              </div>
            </div>
          </div>
        )
      }
    ],
    props: [
      { name: 'isOpen', type: 'boolean', description: 'Whether the modal is open' },
      { name: 'onClose', type: 'function', description: 'Function to close the modal' },
      { name: 'title', type: 'string', description: 'Modal title' },
      { name: 'children', type: 'ReactNode', description: 'Modal content' }
    ]
  },
  badge: {
    title: 'Badge',
    description: 'A small status indicator component for labels and notifications.',
    examples: [
      {
        title: 'Status Badges',
        description: 'Different badge variants for status indication',
        code: `<div className="flex gap-2">
  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Success</span>
  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">Warning</span>
  <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">Error</span>
  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Info</span>
</div>`,
        preview: (
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Success</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">Warning</span>
            <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">Error</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Info</span>
          </div>
        )
      }
    ],
    props: [
      { name: 'variant', type: 'string', default: 'default', description: 'Badge variant (success, warning, error, info)' },
      { name: 'size', type: 'string', default: 'md', description: 'Badge size (sm, md, lg)' },
      { name: 'children', type: 'ReactNode', description: 'Badge content' }
    ]
  },
  avatar: {
    title: 'Avatar',
    description: 'A user avatar component with support for images and initials.',
    examples: [
      {
        title: 'Avatar Variants',
        description: 'Different avatar sizes and styles',
        code: `<div className="flex items-center gap-4">
  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
    <span className="text-white text-xs font-medium">JD</span>
  </div>
  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
    <span className="text-white text-sm font-medium">AB</span>
  </div>
  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
    <span className="text-white font-medium">CD</span>
  </div>
</div>`,
        preview: (
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-medium">JD</span>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">AB</span>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white font-medium">CD</span>
            </div>
          </div>
        )
      }
    ],
    props: [
      { name: 'src', type: 'string', description: 'Avatar image source' },
      { name: 'alt', type: 'string', description: 'Alt text for the image' },
      { name: 'size', type: 'string', default: 'md', description: 'Avatar size (sm, md, lg, xl)' },
      { name: 'initials', type: 'string', description: 'Initials to display when no image' }
    ]
  },
  tooltip: {
    title: 'Tooltip',
    description: 'A floating tooltip component for providing additional information on hover.',
    examples: [
      {
        title: 'Tooltip Examples',
        description: 'Tooltips with different positions',
        code: `<div className="flex gap-4">
  <div className="relative group">
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
      Hover me
    </button>
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      This is a tooltip
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
    </div>
  </div>
</div>`,
        preview: (
          <div className="flex gap-4">
            <div className="relative group">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Hover me
              </button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                This is a tooltip
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </div>
        )
      }
    ],
    props: [
      { name: 'content', type: 'string', description: 'Tooltip content' },
      { name: 'position', type: 'string', default: 'top', description: 'Tooltip position (top, bottom, left, right)' },
      { name: 'children', type: 'ReactNode', description: 'Element that triggers the tooltip' }
    ]
  },
  progress: {
    title: 'Progress',
    description: 'A progress bar component for showing completion status.',
    examples: [
      {
        title: 'Progress Bars',
        description: 'Different progress bar styles and values',
        code: `<div className="space-y-4">
  <div>
    <div className="flex justify-between text-sm text-gray-600 mb-1">
      <span>Progress</span>
      <span>75%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full" style={{width: '75%'}}></div>
    </div>
  </div>
  <div>
    <div className="flex justify-between text-sm text-gray-600 mb-1">
      <span>Success</span>
      <span>100%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{width: '100%'}}></div>
    </div>
  </div>
</div>`,
        preview: (
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Success</span>
                <span>100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>
          </div>
        )
      }
    ],
    props: [
      { name: 'value', type: 'number', description: 'Progress value (0-100)' },
      { name: 'max', type: 'number', default: '100', description: 'Maximum value' },
      { name: 'color', type: 'string', default: 'primary', description: 'Progress bar color' },
      { name: 'showLabel', type: 'boolean', default: 'false', description: 'Show percentage label' }
    ]
  },
  tabs: {
    title: 'Tabs',
    description: 'A tab component for organizing content into multiple panels.',
    examples: [
      {
        title: 'Basic Tabs',
        description: 'Simple tab navigation with content panels',
        code: `<div className="w-full">
  <div className="flex border-b border-gray-200">
    <button className="px-4 py-2 text-indigo-600 border-b-2 border-indigo-600 font-medium">Tab 1</button>
    <button className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium">Tab 2</button>
    <button className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium">Tab 3</button>
  </div>
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">Tab 1 Content</h3>
    <p className="text-gray-600">This is the content for the first tab. You can put any content here.</p>
  </div>
</div>`,
        preview: (
          <div className="w-full">
            <div className="flex border-b border-gray-200">
              <button className="px-4 py-2 text-indigo-600 border-b-2 border-indigo-600 font-medium">Tab 1</button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium">Tab 2</button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium">Tab 3</button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tab 1 Content</h3>
              <p className="text-gray-600">This is the content for the first tab. You can put any content here.</p>
            </div>
          </div>
        )
      }
    ],
    props: [
      { name: 'activeTab', type: 'string', description: 'Currently active tab' },
      { name: 'onTabChange', type: 'function', description: 'Function called when tab changes' },
      { name: 'tabs', type: 'array', description: 'Array of tab objects with label and content' },
      { name: 'variant', type: 'string', default: 'default', description: 'Tab style variant' }
    ]
  },
  dropdown: {
    title: 'Dropdown',
    description: 'A dropdown menu component for displaying a list of options.',
    examples: [
      {
        title: 'Basic Dropdown',
        description: 'Simple dropdown with menu items',
        code: `<div className="relative inline-block">
  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors">
    Options
    <svg className="ml-2 h-4 w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>
  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</a>
  </div>
</div>`,
        preview: (
          <div className="relative inline-block">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors">
              Options
              <svg className="ml-2 h-4 w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</a>
            </div>
          </div>
        )
      }
    ],
    props: [
      { name: 'isOpen', type: 'boolean', description: 'Whether the dropdown is open' },
      { name: 'onToggle', type: 'function', description: 'Function to toggle dropdown' },
      { name: 'items', type: 'array', description: 'Array of dropdown items' },
      { name: 'placement', type: 'string', default: 'bottom', description: 'Dropdown placement' }
    ]
  }
};

function CodeBlock({ code, language = 'tsx' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-gray-400" />}
      </button>
    </div>
  );
}

function ExampleCard({ example }: { example: ComponentExample }) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{example.title}</h4>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowCode(!showCode)}
              className={`p-2 rounded-lg transition-colors ${
                showCode 
                  ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {showCode ? <Eye size={16} /> : <Code size={16} />}
            </button>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{example.description}</p>
      </div>
      
      <div className="p-6 bg-gray-50 dark:bg-gray-800/50">
        <div className="flex items-center justify-center min-h-[100px]">
          {example.preview}
        </div>
      </div>
      
      {showCode && (
        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          <CodeBlock code={example.code} />
        </div>
      )}
    </div>
  );
}

export default function ComponentDocs() {
  const { componentName } = useParams();
  const component = componentName ? componentData[componentName] : null;

  // Default introduction page
  if (!componentName) {
    return (
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nolla UI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            A modern, elegant, and highly customizable component library built with React, TypeScript, and Tailwind CSS. 
            Crafted for AI applications with beautiful, accessible, and responsive components.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Modern Design</h3>
            <p className="text-gray-600 dark:text-gray-400">Clean, modern components with beautiful animations and transitions.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">High Performance</h3>
            <p className="text-gray-600 dark:text-gray-400">Optimized for performance with minimal bundle size and fast rendering.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Highly Customizable</h3>
            <p className="text-gray-600 dark:text-gray-400">Easy to customize with Tailwind CSS classes and theme support.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">♿</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Accessible</h3>
            <p className="text-gray-600 dark:text-gray-400">Built with accessibility in mind, following WCAG guidelines.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Getting Started</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Choose a component from the sidebar to see examples, code snippets, and API documentation.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <CodeBlock 
              code={`npm install @ai-components/react

// Import components
import { Button, Input, Card } from '@ai-components/react';

// Use in your app
function App() {
  return (
    <Card>
      <Input placeholder="Enter text..." />
      <Button>Submit</Button>
    </Card>
  );
}`}
              language="bash"
            />
          </div>
        </div>
      </div>
    );
  }

  if (!component) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Component Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400">The component "{componentName}" doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{component.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">{component.description}</p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Examples</h2>
          <div className="space-y-6">
            {component.examples.map((example, index) => (
              <ExampleCard key={index} example={example} />
            ))}
          </div>
        </section>

        {component.props && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">API Reference</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Prop</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {component.props.map((prop, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                          <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">{prop.name}</code>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                          <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">{prop.type}</code>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                          {prop.default && (
                            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">{prop.default}</code>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{prop.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}