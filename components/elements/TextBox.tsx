import React from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  error?: string;
  children?: React.ReactNode;
}

const TextBox = React.forwardRef<HTMLInputElement, IProps>(
  ({ className, children, labelText, type = "text", error, ...props }, ref) => {
    return (
      <div className={className + " relative"}>
        {labelText && (
          <label
            className="block text-gray-600 mb-2 text-xs lg:text-sm xl:text-base"
            htmlFor="txt"
          >
            {labelText}
          </label>
        )}
        <div className="flex items-stretch">
          <input
            id="txt"
            autoComplete="off"
            type={type}
            ref={ref}
            {...props}
            className={`border border-slate-400 w-full block outline-none py-2 pl-4 pr-2 transition-all text-xs lg:text-sm xl:text-base bg-slate-50 focus:shadow focus:shadow-blue-500
              disabled:border-gray-400 disabled:bg-gray-100 disabled:text-gray-600
              ${error ? "border-red-500 animate-shake" : ""}
              ${children ? "rounded-r-md" : "rounded-md"}`}
          />

          {/* Optional right-side element (e.g. icon toggle) */}
          {children && <div className="flex">{children}</div>}
        </div>

        {error && (
          <p className="text-red-600 text-right text-xs mt-1 animate-shake">
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextBox.displayName = "TextBox";
export default TextBox;
