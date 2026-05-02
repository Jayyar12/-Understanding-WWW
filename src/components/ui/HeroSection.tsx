interface HeroSectionProps {
  badge?: string;
  title: string;
  subtitle: string;
  accentWord?: string;
}

export default function HeroSection({
  badge,
  title,
  subtitle,
  accentWord,
}: HeroSectionProps) {
  // Replace the accent word in title with a highlighted span
  const renderTitle = () => {
    if (!accentWord || !title.includes(accentWord)) {
      return <span>{title}</span>;
    }
    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-white to-teal-300 bg-[length:200%_auto] animate-[text-gradient_3s_linear_infinite]">
          {accentWord}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white overflow-hidden">
      {/* Decorative background circles */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white opacity-5" />
        <div className="absolute bottom-0 -left-10 w-48 h-48 rounded-full bg-white opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {badge && (
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-blue-100 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            {badge}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl">
          {renderTitle()}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
          {subtitle}
        </p>

        {/* Decorative bottom wave */}
        <div
          aria-hidden="true"
          className="flex gap-2 mt-8"
        >
          <div className="h-1 w-12 rounded-full bg-teal-400" />
          <div className="h-1 w-6 rounded-full bg-white/40" />
          <div className="h-1 w-3 rounded-full bg-white/20" />
        </div>
      </div>
    </section>
  );
}
