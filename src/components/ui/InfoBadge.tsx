interface InfoBadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "teal" | "slate";
}

export default function InfoBadge({
  children,
  variant = "blue",
}: InfoBadgeProps) {
  const styles = {
    blue: "bg-blue-100 text-blue-700 border border-blue-200",
    teal: "bg-teal-100 text-teal-700 border border-teal-200",
    slate: "bg-slate-100 text-slate-700 border border-slate-200",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
