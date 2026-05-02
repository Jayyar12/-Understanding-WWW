import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionCard from "@/components/ui/SectionCard";
import MediaFigure from "@/components/ui/MediaFigure";
import InfoBadge from "@/components/ui/InfoBadge";

export const metadata: Metadata = {
  title: "Applications & Responsible Use",
  description:
    "Explore real-world web applications and understand digital citizenship — including digital footprint, avoiding plagiarism, protecting privacy, and verifying information.",
};

const webApps = [
  { name: "Google Workspace", category: "Productivity", description: "A cloud-based suite of tools — Docs, Sheets, Slides, Drive — enabling real-time collaboration and document management from any device.", color: "blue" as const },
  { name: "YouTube", category: "Media & Education", description: "The world's largest video-sharing platform, hosting everything from academic lectures to entertainment, reaching over 2 billion users monthly.", color: "teal" as const },
  { name: "GitHub", category: "Development", description: "A platform for version-controlled code hosting and collaboration, powering open-source projects and professional software development worldwide.", color: "blue" as const },
  { name: "Canva", category: "Design", description: "A browser-based design tool that democratizes graphic design, allowing users without technical skills to create professional visuals.", color: "teal" as const },
  { name: "Netflix", category: "Entertainment", description: "A streaming service that delivers movies and TV shows on demand, transforming how the world consumes entertainment content.", color: "blue" as const },
  { name: "Khan Academy", category: "Education", description: "A free web application offering personalized learning across math, science, and humanities — used by millions of students globally.", color: "teal" as const },
];

const digitalResponsibility = [
  {
    title: "Digital Footprint",
    badge: "blue" as const,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
      </svg>
    ),
    description: "Every action you take online — from posting a photo to searching a term — leaves a trail called your digital footprint. This data can persist indefinitely and shape how others perceive you, professionally and personally.",
    tips: [
      "Think before you post — what you publish online is often permanent.",
      "Regularly review your privacy settings on social media platforms.",
      "Be conscious of the personal information you share publicly.",
      "Keep your online identity consistent with how you wish to be known.",
    ],
  },
  {
    title: "Avoiding Plagiarism",
    badge: "teal" as const,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    description: "Plagiarism is presenting someone else's work or ideas as your own without proper attribution. On the Web, it is particularly easy to copy text, images, or code — but doing so without credit is both dishonest and potentially illegal.",
    tips: [
      "Always cite your sources using an appropriate citation format (APA, MLA).",
      "Paraphrase ideas in your own words and still provide attribution.",
      "Use quotation marks when directly quoting someone else's text.",
      "Use plagiarism detection tools to check your own work before publishing.",
    ],
  },
  {
    title: "Digital Safety & Privacy",
    badge: "blue" as const,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: "Responsible digital behavior includes protecting your own security and never hacking, stealing, or damaging other people's work, identity, or property online. Being safe online is both a personal responsibility and a civic duty.",
    tips: [
      "Share only the personal information that is strictly necessary.",
      "Use strong, unique passwords and enable two-factor authentication.",
      "Avoid clicking on suspicious links or downloading unknown files.",
      "Report harmful, illegal, or abusive content when you encounter it.",
    ],
  },
  {
    title: "Verifying & Challenging Misinformation",
    badge: "teal" as const,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    description: "A responsible digital citizen checks reputable sources before sharing information and actively challenges misinformation. In an era of viral content, slowing down to verify a claim before amplifying it is one of the most impactful things you can do.",
    tips: [
      "Check reputable sources before sharing any claim or statistic.",
      "Use fact-checking websites (e.g., Snopes, FactCheck.org).",
      "Ask yourself: Who published this? When? What is their motivation?",
      "Avoid sharing content that evokes a strong emotional reaction without verification.",
    ],
  },
];

export default function ApplicationsPage() {
  return (
    <>
      <HeroSection
        badge="Applications & Responsible Use"
        title="Web Applications & Digital Responsibility"
        accentWord="Digital Responsibility"
        subtitle="The Web powers the most transformative software of our time. But with great access comes great responsibility — digital citizenship means navigating online spaces safely, ethically, and respectfully."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">

        {/* Modern Web Applications */}
        <section aria-labelledby="apps-heading">
          <h2 id="apps-heading" className="text-2xl font-bold text-slate-800 mb-2">
            Modern Web Applications
          </h2>
          <p className="text-slate-500 mb-8">
            These are software programs that run inside a web browser — no installation required.
            They have transformed education, productivity, communication, and entertainment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {webApps.map(({ name, category, description, color }) => (
              <div
                key={name}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white ${color === "teal" ? "bg-teal-500" : "bg-blue-600"}`}>
                    {name.charAt(0)}
                  </div>
                  <InfoBadge variant={color}>{category}</InfoBadge>
                </div>
                <h3 className="font-bold text-slate-800 text-base mb-1">{name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Digital Citizenship Definition */}
        <section>
          <SectionCard
            title="What is Digital Citizenship?"
            variant="blue"
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          >
            <p>
              <strong>Digital citizenship</strong> is the ability to navigate digital environments
              in a way that is safe and responsible, while respectfully engaging in these spaces.
              It encompasses how we communicate, share, learn, and behave when we are connected
              to the Web.
            </p>
            <p>
              Being a good digital citizen means understanding that the same ethical principles
              that guide our behavior in the physical world — honesty, respect, and responsibility —
              apply equally online. Lawful digital behavior involves not hacking, stealing, or
              damaging other people&apos;s work, identity, or property online.
            </p>
          </SectionCard>
        </section>

        {/* Responsibility Principles */}
        <section aria-labelledby="responsibility-heading">
          <h2 id="responsibility-heading" className="text-2xl font-bold text-slate-800 mb-2">
            Principles of Responsible Web Use
          </h2>
          <p className="text-slate-500 mb-8">
            Four core pillars of being a responsible user of the World Wide Web.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {digitalResponsibility.map(({ title, badge, icon, description, tips }) => (
              <div key={title} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <div className={`px-6 py-4 flex items-center gap-3 ${badge === "teal" ? "bg-teal-50 border-b border-teal-100" : "bg-blue-50 border-b border-blue-100"}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${badge === "teal" ? "bg-teal-100 text-teal-600" : "bg-blue-100 text-blue-600"}`}>
                    {icon}
                  </div>
                  <h3 className={`font-bold text-base ${badge === "teal" ? "text-teal-800" : "text-blue-800"}`}>{title}</h3>
                </div>
                <div className="px-6 py-5 space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
                  <ul className="space-y-2">
                    {tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${badge === "teal" ? "text-teal-500" : "text-blue-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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

        {/* Visual Infographic */}
        <section aria-labelledby="infographic-heading">
          <h2 id="infographic-heading" className="text-2xl font-bold text-slate-800 mb-4">
            Digital Citizenship at a Glance
          </h2>
          <MediaFigure
            src="/images/digital-citizenship.png"
            alt="Infographic showing four pillars of digital citizenship: Digital Footprint, Avoid Plagiarism, Protect Privacy, and Verify Information"
            caption="Figure 3: The four key responsibilities of a digital citizen — protecting your footprint, respecting intellectual property, guarding privacy, and verifying information before sharing."
            source="[Insert source here]"
            width={800}
            height={600}
          />
        </section>

      </div>
    </>
  );
}
