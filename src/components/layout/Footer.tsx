import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">W</span>
              </div>
              <span className="font-semibold text-white text-base">
                Understanding WWW
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              An educational resource exploring the World Wide Web — its
              history, importance, and responsible use.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Pages
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About the Topic" },
                { href: "/importance-and-uses", label: "Importance & Uses" },
                { href: "/applications", label: "Applications" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Creator */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Project Info
            </h3>
            <div className="space-y-1 text-sm text-slate-400">
              <p>
                <span className="text-slate-300">Created by:</span>{" "}
                <span className="text-white font-medium">
                  Emilyn Dalogdog Salvo
                </span>
              </p>
              <p>
                <span className="text-slate-300">Course:</span> Living in the
                IT Era
              </p>
              <p>
                <span className="text-slate-300">Topic:</span> World Wide Web
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Emilyn Dalogdog Salvo. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Living in the IT Era &mdash; World Wide Web
          </p>
        </div>
      </div>
    </footer>
  );
}
