
import React from 'react';

export const bookmezaTheme = {
  colors: {
    primary: { start: '#6366f1', end: '#5855eb' }, // indigo-600 to indigo-700
    secondary: { start: '#8b5cf6', end: '#7c3aed' }, // purple-600 to purple-700
    success: { start: '#10b981', end: '#059669' }, // emerald-600 to emerald-700
    warning: { start: '#f59e0b', end: '#d97706' }, // amber-600 to amber-700
    error: { start: '#ef4444', end: '#dc2626' }, // red-600 to red-700
    info: { start: '#3b82f6', end: '#2563eb' }, // blue-600 to blue-700
    text: {
      primaryOnDark: '#ffffff', // For primary/secondary buttons
      primaryOnLight: '#0f172a', // For ghost/glass buttons on light bg
      disabled: '#94a3b8', // slate-400
      danger: '#ffffff',
      success: '#ffffff',
      warning: '#ffffff', // Or dark text depending on contrast
      info: '#ffffff',
    },
    neutral: {
      background: '#ffffff',
      surface: '#f1f5f9', // slate-100
      border: '#cbd5e1', // slate-300
      text: '#0f172a', // slate-900
    },
    glass: 'rgba(255, 255, 255, 0.8)',
    glassHover: 'rgba(255, 255, 255, 0.95)',
  },
  shadows: {
    glass: 'shadow-glass', // Uses custom shadow from tailwind.config
    glassLg: 'shadow-glass-lg',
  }
};

// Placeholder Lucide Icons (replace with actual Lucide imports in a real project)
export const LoaderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin" {...props}>
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>
);

export const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export const SettingsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);


export const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  loader: LoaderIcon,
  user: UserIcon,
  settings: SettingsIcon,
};

export const DEFAULT_DEBOUNCE_TIME = 300;
export const DEFAULT_DOUBLE_CLICK_PREVENTION_TIME = 400;
