import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionCard from "@/components/ui/SectionCard";
import InfoBadge from "@/components/ui/InfoBadge";

export const metadata: Metadata = {
  title: "Importance & Uses",
  description:
    "Discover how the World Wide Web powers education, business, and communication — and learn to evaluate online information critically.",
};

const uses = [
  {
    category: "Education",
    color: "blue" as const,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    points: [
      "Online courses and e-learning platforms (Coursera, Khan Academy)",
      "Access to academic journals and research databases",
      "Virtual classrooms and collaborative learning tools",
      "Educational videos, tutorials, and interactive simulations",
    ],
  },
  {
    category: "Business & Commerce",
    color: "blue" as const,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    points: [
      "E-commerce platforms enabling global buying and selling",
      "Digital marketing and brand building",
      "Remote work and cloud-based business software",
      "Financial services, banking, and online transactions",
    ],
  },
  {
    category: "Communication",
    color: "teal" as const,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    points: [
      "Email as the backbone of professional communication",
      "Social media connecting people across the globe",
      "Video conferencing tools (Zoom, Google Meet, Teams)",
      "Instant messaging, forums, and community platforms",
    ],
  },
];

const evaluationCriteria = [
  {
    key: "Accuracy",
    badge: "blue" as const,
    question: "Is this information correct and verifiable?",
    tips: [
      "Look for cited sources and references within the content.",
      "Cross-check key facts with multiple reliable sources.",
      "Be wary of extraordinary claims without evidence.",
      "Check consistency with expert consensus.",
    ],
  },
  {
    key: "Authority",
    badge: "teal" as const,
    question: "Who is responsible for this information?",
    tips: [
      "Investigate the author's credentials or institutional affiliation.",
      "Check if the site belongs to a known institution or publisher.",
      "Look for author bios, contact info, or editorial policies.",
      "Be cautious of anonymous content with no clear ownership.",
    ],
  },
  {
    key: "Currency",
    badge: "blue" as const,
    question: "Is this information up to date?",
    tips: [
      "Check the original publication date of the article.",
      "Look for a 'last updated' date on the page.",
      "For fast-changing topics, prefer recent publications.",
      "Older sources may still be valid for historical context.",
    ],
  },
];

export default function ImportancePage() {
  return (
    <>
      <HeroSection
        badge="Importance & Uses"
        title="Why the Web Matters"
        accentWord="Web Matters"
        subtitle="From classrooms to commerce, the World Wide Web has reshaped how humanity communicates, learns, and conducts daily life."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">

        {/* Daily Life Uses */}
        <section aria-labelledby="daily-uses-heading">
          <h2 id="daily-uses-heading" className="text-2xl font-bold text-slate-800 mb-2">
            The Web in Daily Life
          </h2>
          <p className="text-slate-500 mb-8">The Web has become woven into virtually every aspect of modern life.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {uses.map(({ category, icon, points, color }) => (
              <SectionCard key={category} title={category} variant={color} icon={icon}>
                <ul className="space-y-2">
                  {points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${color === "teal" ? "text-teal-500" : "text-blue-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </SectionCard>
            ))}
          </div>
        </section>

        {/* Info Quality Warning */}
        <section>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-amber-800 text-base">The Internet Is Full of Unverified Information</p>
              <p className="text-amber-700 text-sm mt-1 leading-relaxed">
                While the Internet is home to a tremendous amount of information, many resources do not undergo any editing or fact-checking to ensure accuracy. Unlike peer-reviewed academic publications, anyone can publish anything online. It is often up to <strong>you</strong> — the user — to evaluate whether or not the information you find is credible.
              </p>
            </div>
          </div>
        </section>

        {/* Evaluation Criteria */}
        <section aria-labelledby="evaluation-heading">
          <h2 id="evaluation-heading" className="text-2xl font-bold text-slate-800 mb-2">
            How to Evaluate Online Information
          </h2>
          <p className="text-slate-500 mb-8">
            Three key criteria: <InfoBadge>Accuracy</InfoBadge>{" "}
            <InfoBadge variant="teal">Authority</InfoBadge>{" "}
            <InfoBadge>Currency</InfoBadge>
          </p>

          <div className="space-y-6">
            {evaluationCriteria.map(({ key, badge, question, tips }) => (
              <div key={key} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 border-b border-slate-100">
                  <InfoBadge variant={badge}>{key}</InfoBadge>
                  <p className="text-slate-700 font-medium text-sm">{question}</p>
                </div>
                <div className="px-6 py-5">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${badge === "teal" ? "text-teal-500" : "text-blue-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Search Tips */}
        <section>
          <SectionCard
            title="Effective Online Searching"
            variant="blue"
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
          >
            <p>Knowing how to search effectively is one of the most valuable digital skills.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {[
                { tip: "Use Specific Keywords", detail: 'Narrow your search with precise terms. Example: "climate change effects on coral reefs" instead of "ocean problems".' },
                { tip: "Filter by Date", detail: "Use the search engine's Tools or Filters to find recent or time-specific content, especially for evolving topics." },
                { tip: "Use Trusted Domains", detail: "Government (.gov), educational (.edu), and established publishers are generally more reliable sources." },
              ].map(({ tip, detail }) => (
                <div key={tip} className="bg-white rounded-xl border border-blue-100 p-4">
                  <p className="font-semibold text-blue-700 text-sm mb-1">{tip}</p>
                  <p className="text-slate-600 text-xs leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

      </div>
    </>
  );
}
