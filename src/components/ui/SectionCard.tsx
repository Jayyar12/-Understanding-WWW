import { ReactNode } from "react";

interface SectionCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  variant?: "default" | "teal" | "blue";
}

export default function SectionCard({
  title,
  children,
  className = "",
  icon,
  variant = "default",
}: SectionCardProps) {
  const variantStyles: Record<string, string> = {
    default: "bg-white border border-slate-200 shadow-sm",
    teal: "bg-teal-50 border border-teal-200",
    blue: "bg-blue-50 border border-blue-200",
  };

  const titleStyles: Record<string, string> = {
    default: "text-slate-800",
    teal: "text-teal-700",
    blue: "text-blue-700",
  };

  return (
    <div
      className={`h-full rounded-2xl p-6 md:p-8 ${variantStyles[variant]} ${className}`}
    >
      {(title || icon) && (
        <div className="flex items-start gap-3 mb-4">
          {icon && (
            <div
              className={`mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                variant === "teal"
                  ? "bg-teal-100 text-teal-600"
                  : variant === "blue"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {icon}
            </div>
          )}
          {title && (
            <h2
              className={`text-xl font-bold leading-snug ${titleStyles[variant]}`}
            >
              {title}
            </h2>
          )}
        </div>
      )}
      <div className="text-slate-700 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}
