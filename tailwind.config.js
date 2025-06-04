/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        'bookmeza-primary-start': '#6366f1',
        'bookmeza-primary-end': '#5855eb',
        'bookmeza-secondary-start': '#8b5cf6',
        'bookmeza-secondary-end': '#7c3aed',
        'bookmeza-success-start': '#10b981',
        'bookmeza-success-end': '#059669',
        'bookmeza-warning-start': '#f59e0b',
        'bookmeza-warning-end': '#d97706',
        'bookmeza-error-start': '#ef4444',
        'bookmeza-error-end': '#dc2626',
        'bookmeza-info-start': '#3b82f6',
        'bookmeza-info-end': '#2563eb',
        'bookmeza-glass': 'rgba(255, 255, 255, 0.8)',
        'bookmeza-glass-hover': 'rgba(255, 255, 255, 0.95)',
        'bookmeza-backdrop': 'rgba(15, 23, 42, 0.5)',
        'bookmeza-slate-50': '#f8fafc',
        'bookmeza-slate-100': '#f1f5f9',
        'bookmeza-slate-200': '#e2e8f0',
        'bookmeza-slate-300': '#cbd5e1',
        'bookmeza-slate-400': '#94a3b8',
        'bookmeza-slate-500': '#64748b',
        'bookmeza-slate-700': '#334155',
        'bookmeza-slate-900': '#0f172a',
      },
      boxShadow: {
        'glass': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'glass-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}