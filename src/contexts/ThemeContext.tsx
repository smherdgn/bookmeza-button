import React, { createContext, useContext, ReactNode } from 'react';
import { AppTheme } from '../types';

// Create a context for the theme
const ThemeContext = createContext<AppTheme | undefined>(undefined);

// Define the props for the ThemeProvider
interface BookmezaThemeProviderProps {
  children: ReactNode;
  theme?: AppTheme; // Optional: if no theme is provided, components use their defaults
}

// Create a ThemeProvider component
export const BookmezaThemeProvider: React.FC<BookmezaThemeProviderProps> = ({ children, theme }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to use the theme context
export const useBookmezaTheme = (): AppTheme | undefined => {
  const context = useContext(ThemeContext);
  // No need to throw an error if context is undefined, 
  // components can have default styles if no theme is provided or if they are used outside a provider.
  return context;
};
