import React, { useState, useCallback, useId } from 'react';

// Placeholder icon, assuming not imported from a library for this context
const CodeBracketIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

export interface CodeShowcaseProps<P extends Record<string, any>> {
  title: string;
  componentToWrap: React.ComponentType<P>; // Changed to ComponentType for wider compatibility
  componentName: string;
  fixedProps?: Partial<P>; // Optional, as some components might have no fixed props in showcase
  editablePropsInitial: Partial<P>;
  fixedPropsDisplay?: Record<string, string>; // Optional for display formatting
  notes?: string;
}

export const CodeShowcase = <P extends Record<string, any>>({
  title,
  componentToWrap: ComponentToWrap,
  componentName,
  fixedProps = {},
  editablePropsInitial,
  fixedPropsDisplay = {},
  notes,
}: CodeShowcaseProps<P>) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [currentEditableProps, setCurrentEditableProps] = useState<Partial<P>>(editablePropsInitial);
  const [propsJson, setPropsJson] = useState(() => JSON.stringify(editablePropsInitial, null, 2));
  const [jsonError, setJsonError] = useState<string | null>(null);

  const detailsId = useId();

  const generateJsxString = useCallback(() => {
    const propStrings: string[] = [];

    // Process editable props
    for (const [key, value] of Object.entries(currentEditableProps)) {
      if (value === undefined) continue; // Omit undefined props from JSX

      if (typeof value === 'string') {
        propStrings.push(`${key}={${JSON.stringify(value)}}`);
      } else if (typeof value === 'boolean' || typeof value === 'number') {
        propStrings.push(`${key}={${value}}`);
      } else if (value === null) {
        propStrings.push(`${key}={null}`);
      } else if (typeof value === 'object') { // Includes arrays
        try {
          const jsonVal = JSON.stringify(value);
          propStrings.push(`${key}={${jsonVal}}`);
        } catch {
          propStrings.push(`${key}={/* Unserializable Object */}`);
        }
      } else {
        // For other types, like functions if they somehow get here (they shouldn't via JSON)
        propStrings.push(`${key}={/* Value of type ${typeof value} */}`);
      }
    }

    // Process fixed props for display
    for (const [key, displayString] of Object.entries(fixedPropsDisplay)) {
      // displayString is assumed to be the RHS of the prop assignment, e.g., "handleChange", "<MyIcon />"
      propStrings.push(`${key}={${displayString}}`);
    }

    propStrings.sort();

    if (propStrings.length === 0) {
      return `<${componentName} />`;
    }

    return `<${componentName}\n  ${propStrings.join('\n  ')}\n/>`;
  }, [componentName, currentEditableProps, fixedPropsDisplay]);

  const handleApplyJsonChanges = () => {
    try {
      const parsedProps = JSON.parse(propsJson) as Partial<P>;
      setCurrentEditableProps(parsedProps);
      setJsonError(null);
    } catch (error) {
      if (error instanceof Error) {
        setJsonError(`Invalid JSON: ${error.message}`);
      } else {
        setJsonError('An unknown error occurred while parsing JSON.');
      }
    }
  };

  const combinedProps = { ...fixedProps, ...currentEditableProps } as P;

  return (
    <div className="mb-8 p-4 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-3 text-slate-700 dark:text-slate-300" id={`${detailsId}-title`}>{title}</h3>
      
      <div className="mb-4 p-4 border border-dashed border-slate-400 dark:border-slate-600 rounded-md bg-slate-50 dark:bg-slate-800/30">
        <ComponentToWrap {...combinedProps} />
      </div>

      <div className="flex justify-end mb-2">
        <button
          type="button"
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className="flex items-center px-3 py-1.5 text-sm font-medium text-white bg-bookmeza-primary-start hover:bg-bookmeza-primary-end rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-bookmeza-primary-start focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors"
          aria-expanded={isCodeVisible}
          aria-controls={detailsId}
        >
          <CodeBracketIcon className="w-5 h-5 mr-2" />
          {isCodeVisible ? 'Hide' : 'Show'} Config & Code
        </button>
      </div>

      {isCodeVisible && (
        <div id={detailsId} className="p-4 bg-slate-800 text-slate-200 rounded-md shadow-lg" role="region" aria-labelledby={`${detailsId}-title`}>
          <div className="mb-4">
            <h4 className="text-lg font-medium mb-1 text-slate-100">Component Instantiation:</h4>
            <pre className="bg-slate-900 text-slate-300 p-3 rounded-md overflow-x-auto">
              <code className="font-mono text-sm whitespace-pre-wrap">
                {generateJsxString()}
              </code>
            </pre>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-1 text-slate-100">Editable Props (JSON):</h4>
            {notes && <p className="text-sm text-slate-400 mb-2">{notes}</p>}
            <p className="text-xs text-slate-400 mb-2">
              Edit the JSON below to change the component's props. Props like <code>className</code>, <code>variant</code>, etc., control styling and behavior.
              Non-JSON-compatible values (like functions or React elements) for editable props might not work as expected.
            </p>
            <textarea
              value={propsJson}
              onChange={(e) => setPropsJson(e.target.value)}
              className="w-full p-2 font-mono text-sm bg-slate-900 text-slate-300 border border-slate-700 rounded-md h-48 resize-y focus:ring-1 focus:ring-bookmeza-info-start focus:border-bookmeza-info-start"
              aria-label="Editable Props in JSON format"
              spellCheck="false"
            />
            {jsonError && (
              <p className="mt-2 text-sm text-red-400 bg-red-900/50 p-2 rounded-md">{jsonError}</p>
            )}
            <button
              type="button"
              onClick={handleApplyJsonChanges}
              className="mt-3 px-4 py-2 text-sm font-medium text-white bg-bookmeza-success-start hover:bg-bookmeza-success-end rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-bookmeza-success-start focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-colors"
            >
              Apply JSON Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeShowcase;
