import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md",
    outline: "border border-slate-700 hover:bg-slate-800 text-slate-200",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}