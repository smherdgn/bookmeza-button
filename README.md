# Bookmeza Button Component & Showcase

This project demonstrates a production-grade, reusable Button component built with React, TypeScript, and Tailwind CSS, following the Bookmeza Design Language. It includes features like variants, sizes, loading states, internationalization (i18n), theming, accessibility, and more.

## ✨ Features

*   **Variants**: `primary`, `secondary`, `ghost`, `danger`, `success`, `warning`, `info`, `glass`.
*   **Sizes**: `small`, `medium`, `large`.
*   **Full-width Mode**: `fullWidth` prop.
*   **Loading State**:
    *   Spinner (customizable icon via `iconName="loader"` or `icon` prop).
    *   `loadingText` support (i18n compatible).
    *   Disables button automatically when `isLoading` is true.
*   **Disabled State**: Proper styling and behavior for disabled buttons.
*   **Icon Support**:
    *   Pass icon as a ReactNode via `icon` prop.
    *   Control icon position with `iconPosition: 'left' | 'right'`.
    *   (Simplified) Auto-resolve icon via `iconName?: string` using a predefined `iconMap`.
*   **Internationalization (i18n)**:
    *   Supports `children` for static text.
    *   Supports `textKey` for dynamic text from `react-i18next` translation files.
*   **Accessibility**:
    *   `aria-label`, `aria-busy`, `aria-disabled`, `role="button"`.
    *   `tabIndex` management.
    *   Keyboard operable (Space, Enter).
*   **RTL Direction Awareness**:
    *   Icon/text order flips automatically based on document direction.
    *   Uses Tailwind's logical properties for spacing.
*   **Polymorphism**:
    *   Supports `asChild` prop for rendering as a child element (e.g., `<Link>`, `<a>`). (Simplified implementation; Radix Slot recommended for robust solutions).
    *   Renders as `<a>` if `href` prop is provided.
*   **Click Handling**:
    *   `debounceTime?: number` to delay click execution.
    *   `preventDoubleClick?: boolean` to avoid rapid submissions.
*   **Ref Forwarding**: Supports `ref` forwarding to the underlying DOM element.
*   **Theming**:
    *   Uses `BookmezaThemeProvider` and `ThemeContext` for centralized theme tokens.
    *   Allows overriding base, variant, and size classes.
    *   Supports light/dark mode via Tailwind CSS `dark:` variants.
*   **Custom Layout Slots**:
    *   `leftSlot`, `rightSlot` for content outside the main button text/icon.
    *   `beforeIcon`, `afterIcon` for content immediately around the icon.
*   **Custom Styling**:
    *   `className`, `iconClassName`, `loadingClassName` props for style overrides.
*   **Dev/Test Support**: Includes `data-testid`, `data-cy`, `data-qa`, `data-dev` props.

## 🛠️ Tech Stack

*   **React 19**
*   **TypeScript**
*   **Vite** (Build tool and dev server)
*   **Tailwind CSS 3**
*   **PostCSS & Autoprefixer**
*   **i18next** & **react-i18next** (for internationalization)
*   **npm/yarn/pnpm** (Package management)

## 📁 File Structure

```
.
├── public/                     # Static assets (Vite serves this folder)
├── src/
│   ├── components/
│   │   └── Button.tsx          # The main Button component
│   ├── contexts/
│   │   └── ThemeContext.tsx    # Theme provider and hook
│   ├── App.tsx                 # Main application showcasing the button
│   ├── constants.tsx           # Theme tokens, icon map, default values
│   ├── i18n.ts                 # i18next configuration and translations
│   ├── index.css               # Global styles and Tailwind directives
│   ├── index.tsx               # React application entry point
│   └── types.ts                # TypeScript types and enums
├── .gitignore                  # Git ignore file
├── index.html                  # HTML entry point for Vite
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Project dependencies and scripts
├── metadata.json               # Application metadata (not directly used by Vite build)
├── README.md                   # This file
└── tsconfig.json               # TypeScript configuration (Vite generates a basic one if not present)
```

## 🚀 Getting Started

1.  **Clone the repository (if applicable) or set up the files.**
2.  **Install dependencies**:
    Open your terminal in the project root directory and run:
    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    # or
    # yarn dev
    # or
    # pnpm dev
    ```
    This will start the Vite development server, typically at `http://localhost:5173`.

4.  **Build for production**:
    ```bash
    npm run build
    # or
    # yarn build
    # or
    # pnpm build
    ```
    This will create an optimized production build in the `dist` folder.

For integrating the `Button` component into another Vite-based project:
1.  Copy the relevant files (`src/components/Button.tsx`, `src/types.ts`, `src/constants.tsx`, `src/contexts/ThemeContext.tsx`) into your project.
2.  Ensure you have Tailwind CSS and `react-i18next` set up in your project.
3.  Adjust paths for imports as necessary.
4.  You'll likely want to install actual icon libraries (e.g., `lucide-react`) instead of using the placeholder SVGs in `constants.tsx`.

## ⚙️ Button Component Props (`ButtonProps`)

The `Button` component accepts the following props (see `src/types.ts` for full details):

| Prop                | Type                                      | Default         | Description                                                                 |
| ------------------- | ----------------------------------------- | --------------- | --------------------------------------------------------------------------- |
| `variant`           | `ButtonVariant`                           | `Primary`       | Visual style of the button.                                                 |
| `size`              | `ButtonSize`                              | `Medium`        | Size of the button.                                                         |
| `fullWidth`         | `boolean`                                 | `false`         | Makes the button take up the full width of its container.                   |
| `isLoading`         | `boolean`                                 | `false`         | Shows a loading spinner and disables the button.                            |
| `loadingText`       | `string`                                  | `t('loading')`  | Text to display next to the spinner when loading.                           |
| `disabled`          | `boolean`                                 | `false`         | Disables the button.                                                        |
| `icon`              | `React.ReactNode`                         | `undefined`     | Custom icon element.                                                        |
| `iconName`          | `string`                                  | `undefined`     | Name of an icon from `iconMap` (e.g., "loader", "user").                    |
| `iconPosition`      | `'left' \| 'right'`                       | `'left'`        | Position of the icon relative to the text.                                  |
| `children`          | `React.ReactNode`                         | `undefined`     | Content of the button (text or other elements).                             |
| `textKey`           | `string`                                  | `undefined`     | i18next translation key for the button text. Overrides `children`.          |
| `asChild`           | `boolean`                                 | `false`         | Renders the button as its child component (simplified).                     |
| `href`              | `string`                                  | `undefined`     | If provided, renders the button as an `<a>` tag.                            |
| `target`            | `string`                                  | `_blank` for http | `target` attribute for `<a>` tags.                                          |
| `rel`               | `string`                                  | `noopener noreferrer` for http | `rel` attribute for `<a>` tags.                                             |
| `onClick`           | `MouseEventHandler`                       | `undefined`     | Click event handler.                                                        |
| `debounceTime`      | `number`                                  | `0`             | Debounce time in ms for the `onClick` handler.                              |
| `preventDoubleClick`| `boolean`                                 | `false`         | Prevents rapid clicks if `debounceTime` is not set (uses default ~400ms). |
| `className`         | `string`                                  | `''`            | Custom CSS classes for the button element.                                  |
| `iconClassName`     | `string`                                  | `''`            | Custom CSS classes for the icon span.                                       |
| `loadingClassName`  | `string`                                  | `''`            | Custom CSS classes for the loading spinner.                                 |
| `leftSlot`          | `React.ReactNode`                         | `undefined`     | Content to render at the far left of the button.                            |
| `rightSlot`         | `React.ReactNode`                         | `undefined`     | Content to render at the far right of the button.                           |
| `beforeIcon`        | `React.ReactNode`                         | `undefined`     | Content to render just before the icon.                                     |
| `afterIcon`         | `React.ReactNode`                         | `undefined`     | Content to render just after the icon.                                      |
| `type`              | `'button' \| 'submit' \| 'reset'`         | `'button'`      | HTML button type attribute.                                                 |
| `autoFocus`         | `boolean`                                 | `undefined`     | If the button should automatically receive focus.                           |
| `data-*`            | `string`                                  | `undefined`     | Data attributes like `data-testid`, `data-cy`, etc.                         |
| ...other HTML attrs |                                           |                 | Standard HTML button/anchor attributes.                                     |

## 🎨 Theming

The `Button` component can be themed using the `BookmezaThemeProvider` from `src/contexts/ThemeContext.tsx`. You can provide a theme object to override default styles.

**Theme Structure (`AppTheme` in `src/types.ts`):**
```typescript
interface ButtonThemeProps {
  baseClasses?: string;
  variantClasses?: {
    [key in ButtonVariant]?: string;
  };
  sizeClasses?: {
    [key in ButtonSize]?: string;
  };
}

interface AppTheme {
  components?: {
    Button?: ButtonThemeProps;
  };
}
```

**Example Usage (`src/App.tsx`):**
```tsx
import { BookmezaThemeProvider } from './contexts/ThemeContext';
import { ButtonVariant, ButtonSize, AppTheme } from './types';

const customTheme: AppTheme = {
  components: {
    Button: {
      // baseClasses: "font-serif border-4", // Override base classes
      variantClasses: {
        [ButtonVariant.Primary]: 'bg-green-600 hover:bg-green-700 text-white rounded-none', // Custom primary button
      },
      sizeClasses: {
        [ButtonSize.Large]: 'px-10 py-5 text-xl', // Custom large button
      }
    }
  }
};

const App = () => (
  <BookmezaThemeProvider theme={customTheme}>
    {/* ... your application ... */}
    <Button variant={ButtonVariant.Primary} size={ButtonSize.Large}>Themed Button</Button>
  </BookmezaThemeProvider>
);
```
If no theme is provided, or if specific overrides are missing, the component falls back to its default Bookmeza Design Language styles.

## 🌐 Internationalization (i18n)

Internationalization is handled by `i18next` and `react-i18next`.
*   Translations are defined in `src/i18n.ts`.
*   Use the `textKey` prop on the `Button` to specify a translation key:
    ```tsx
    <Button textKey="saveChanges" />
    ```
*   The `loadingText` prop also defaults to an i18n key `t('loading')`.

## ♿ Accessibility

*   **ARIA Attributes**: `aria-label` (auto-populated from content if not provided), `aria-busy` (for loading state), `aria-disabled`.
*   **Role**: `role="button"` is applied.
*   **Keyboard Navigation**: Operable with `Enter` and `Space` keys.
*   **Focus Management**: `tabIndex` is managed for disabled states. Focus rings are styled.
*   **RTL Support**: Layout adjusts automatically for right-to-left languages.

## 🛠️ Customization

*   **CSS Classes**: Use `className`, `iconClassName`, and `loadingClassName` for targeted style overrides.
*   **Layout Slots**: `leftSlot`, `rightSlot`, `beforeIcon`, `afterIcon` allow injecting custom content into specific parts of the button.
*   **Polymorphism (`asChild`, `href`)**: Render the button as a different element type for semantic HTML or integration with routing libraries.

## 📝 Notes & Future Enhancements

*   **Framer Motion**: Animations are currently handled with CSS transitions. For more complex animations, `framer-motion` could be integrated.
*   **Radix UI Slot**: For a more robust `asChild` implementation, consider using `@radix-ui/react-slot`.
*   **Icon Library**: The current `iconMap` uses placeholder SVGs. In a production application, integrate a proper icon library like `lucide-react` or `heroicons` (and install them as dependencies).
*   **TypeScript Configuration**: A `tsconfig.json` would be part of a typical project. Vite can generate a basic one, or you can create a more specific one.
```