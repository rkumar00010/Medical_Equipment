'use client';

import { useEffect } from 'react';

// Suppress React 19 ref warnings from MUI components
export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const originalError = console.error;
    
    const suppressRefWarning = (...args: any[]) => {
      // Check all arguments for the warning message
      const hasRefWarning = args.some((arg) => {
        if (typeof arg === 'string') {
          return (
            arg.includes('Accessing element.ref was removed in React 19') ||
            arg.includes('ref is now a regular prop') ||
            arg.includes('element.ref') ||
            arg.includes('JSX Element type')
          );
        }
        return false;
      });

      if (hasRefWarning) {
        // Suppress this specific warning
        return;
      }
      
      originalError.apply(console, args);
    };

    // Override console.error
    console.error = suppressRefWarning;

    return () => {
      console.error = originalError;
    };
  }, []);

  return <>{children}</>;
}

