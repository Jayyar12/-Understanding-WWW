import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import SectionCard from "@/components/ui/SectionCard";

export const metadata: Metadata = {
  title: "Understanding the World Wide Web",
  description:
    "Explore the universe of networked information that is the World Wide Web — its origins, structure, and how it connects humanity.",
};

const pageLinks = [
  {
    href: "/about",
    label: "About the Topic",
    description:
      "Discover the definition, history, and structure of the Web — and understand the difference between a website and a webpage.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "blue" as const,
  },
  {
    href: "/importance-and-uses",
    label: "Importance & Uses",
    description:
      "Learn how the Web powers everyday life — from education and business to communication — and how to evaluate online information critically.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "teal" as const,
  },
  {
    href: "/applications",
    label: "Applications & Responsibility",
    description:
      "See real-world web applications in action and understand what it means to be a responsible, ethical digital citizen.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "blue" as const,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        badge="Living in the IT Era — World Wide Web"
        title="The Universe of Information"
        accentWord="Universe of Information"
        subtitle="The World Wide Web is the embodiment of human knowledge — a vast, interconnected system where billions of documents, ideas, and conversations are accessible at the click of a link."
      />

      {/* Introduction Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <SectionCard
            title="What Is the World Wide Web?"
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            }
          >
            <p>
              The World Wide Web is not the Internet itself — rather, it is a
              system of networked information that operates <em>over</em> the
              Internet. It began as a visionary networked information project at
              CERN in 1989, conceived by computer scientist{" "}
              <strong>Tim Berners-Lee</strong>.
            </p>
            <p>
              The Web runs on a specific body of software, a set of agreed-upon
              protocols (such as HTTP), and shared conventions that allow
              computers worldwide to communicate seamlessly. Through the power
              of <strong>hypertext</strong> and multimedia, the Web makes it
              remarkably easy for anyone to roam, browse, and contribute
              information.
            </p>
          </SectionCard>

          <SectionCard
            title="A Network Built for Everyone"
            variant="blue"
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          >
            <p>
              Unlike traditional publishing platforms, the Web was designed as
              an open system — one where any person with a browser and a
              connection could both <strong>access</strong> information and{" "}
              <strong>contribute</strong> to the growing body of human
              knowledge.
            </p>
            <p>
              Today, the Web connects billions of people, hosts trillions of
              documents, and enables everything from global commerce to
              grassroots education. It is, quite simply, one of humanity&apos;s
              most transformative inventions.
            </p>
          </SectionCard>
        </div>

        {/* Key Fact Banner */}
        <div className="mt-8 bg-teal-50 border border-teal-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-teal-800">Did You Know?</p>
            <p className="text-teal-700 text-sm mt-0.5">
              The first World Wide Web server and client program were written in{" "}
              <strong>October 1990</strong> — the same month that established
              the foundational architecture still used today. The first website
              went live on <strong>August 6, 1991</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Pages */}
      <section className="bg-slate-100 border-t border-slate-200 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800">
              Explore the Topics
            </h2>
            <p className="mt-2 text-slate-500 text-base max-w-xl mx-auto">
              This site covers three core areas of understanding the World Wide
              Web. Select any topic to dive deeper.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pageLinks.map(({ href, label, description, icon, color }) => (
              <Link
                key={href}
                href={href}
                id={`explore-link-${href.replace(/\//g, "").replace(/-/g, "_")}`}
                className="group bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    color === "teal"
                      ? "bg-teal-100 text-teal-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg group-hover:text-blue-700 transition-colors">
                    {label}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">
                    {description}
                  </p>
                </div>
                <div className="mt-auto pt-2 flex items-center text-blue-600 text-sm font-medium gap-1 group-hover:gap-2 transition-all">
                  Read more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Banner */}
      <section className="py-10 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-blue-200 text-sm font-medium uppercase tracking-wider mb-1">
                Created by
              </p>
              <h2 className="text-3xl font-extrabold text-white">
                Emilyn Dalogdog Salvo
              </h2>
              <p className="text-blue-200 mt-1 text-sm">
                Living in the IT Era &nbsp;&bull;&nbsp; World Wide Web
              </p>
            </div>
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
