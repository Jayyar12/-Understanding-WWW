import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionCard from "@/components/ui/SectionCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import MediaFigure from "@/components/ui/MediaFigure";
import InfoBadge from "@/components/ui/InfoBadge";

export const metadata: Metadata = {
  title: "About the Topic",
  description:
    "Learn what the World Wide Web is, how it was invented, and understand the key difference between a website and a webpage.",
};

const comparisonRows = [
  {
    label: "Definition",
    website:
      "A collection of related webpages hosted under a single domain name.",
    webpage:
      "A single HTML document that is part of a website, accessible via its own unique URL.",
  },
  {
    label: "Scope",
    website: "Broad — encompasses many pages, media files, and resources.",
    webpage: "Narrow — a single viewable document in the browser.",
  },
  {
    label: "Example",
    website: "wikipedia.org (the entire encyclopedia system)",
    webpage: "wikipedia.org/wiki/Internet (one specific article)",
  },
  {
    label: "Format",
    website: "A domain with multiple files, directories, and linked pages.",
    webpage:
      "An HTML file that may include text, images, links, and scripts.",
  },
  {
    label: "Created with",
    website:
      "Served by a web server (e.g., httpd) responding to browser requests.",
    webpage:
      "Written in HyperText Markup Language (HTML), the primary publishing format of the Web.",
  },
  {
    label: "Analogy",
    website: "A book (the whole volume).",
    webpage: "A single page inside that book.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        badge="About the Topic"
        title="What Is the World Wide Web?"
        accentWord="World Wide Web?"
        subtitle="A global system of interconnected documents, built on open protocols and the power of hypertext — making human knowledge accessible to anyone, anywhere."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">

        {/* Definition */}
        <section aria-labelledby="definition-heading">
          <SectionCard
            title="Defining the World Wide Web"
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            }
          >
            <p>
              The <strong>World Wide Web</strong> (WWW) is a system of
              information organized as a network of interlinked documents and
              resources, accessible through the Internet. It is not the Internet
              itself — the Internet is the underlying network infrastructure,
              while the Web is one of the most significant services that runs on
              top of it.
            </p>
            <p>
              The Web operates on a defined body of software and a set of
              protocols and conventions. The most fundamental of these is{" "}
              <InfoBadge>HTTP</InfoBadge> (HyperText Transfer Protocol), which
              governs how data is requested and delivered between browsers and
              servers. Through <InfoBadge>hypertext</InfoBadge> — text that
              links to other documents — and multimedia techniques, the Web
              makes it easy for anyone to navigate its vast landscape of
              information.
            </p>
          </SectionCard>
        </section>

        {/* History */}
        <section aria-labelledby="history-heading">
          <h2
            id="history-heading"
            className="text-2xl font-bold text-slate-800 mb-6"
          >
            A Brief History of the Web
          </h2>
          <div className="relative border-l-2 border-blue-200 pl-8 space-y-8 ml-4">
            {[
              {
                year: "1989",
                title: "The Original Proposal",
                detail:
                  'Tim Berners-Lee, a British scientist working at CERN in Switzerland, wrote a proposal titled "Information Management: A Proposal." In it, he described a system for managing information using hypertext links — the seed of what would become the Web.',
              },
              {
                year: "1990",
                title: "First Server & Client",
                detail:
                  'In October 1990, the first World Wide Web server software ("httpd") and the first browser/editor client program were written. This established the foundational architecture that the modern Web still relies on.',
              },
              {
                year: "1991",
                title: "The Web Goes Live",
                detail:
                  "On August 6, 1991, Berners-Lee published the first website — a simple page explaining what the Web was and how to use it. It was hosted on a NeXT computer at CERN and is considered the Web's public debut.",
              },
              {
                year: "1993",
                title: "Web Becomes Public Domain",
                detail:
                  "CERN released the WWW technology into the public domain, ensuring it remained open and royalty-free. This decision enabled explosive global growth and the democratization of online information.",
              },
              {
                year: "2000s–Today",
                title: "Web 2.0 & Beyond",
                detail:
                  "The Web evolved from static pages into dynamic, interactive platforms. Social media, e-commerce, streaming, and cloud computing all emerged, transforming the Web into the backbone of modern digital life.",
              },
            ].map(({ year, title, detail }) => (
              <div key={year} className="relative">
                <div className="absolute -left-11 top-0 w-5 h-5 rounded-full bg-blue-600 border-2 border-white shadow-sm" />
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-white bg-blue-600 rounded-full px-2.5 py-0.5">
                      {year}
                    </span>
                    <h3 className="font-semibold text-slate-800">{title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Web Diagram */}
        <section aria-labelledby="diagram-heading">
          <h2
            id="diagram-heading"
            className="text-2xl font-bold text-slate-800 mb-4"
          >
            How the Web Works
          </h2>
          <MediaFigure
            src="/images/web-diagram.png"
            alt="Diagram showing how a browser communicates with a web server over the Internet using HTTP"
            caption="Figure 1: The basic flow of a web request — a browser sends an HTTP request to a web server, which returns the webpage document."
            source="[Canva]"
            width={800}
            height={450}
          />
        </section>

        {/* Website vs Webpage */}
        <section aria-labelledby="comparison-heading">
          <div className="mb-6">
            <h2
              id="comparison-heading"
              className="text-2xl font-bold text-slate-800"
            >
              Website vs. Webpage
            </h2>
            <p className="text-slate-500 mt-1 text-base">
              These two terms are closely related but refer to different things.
              Here&apos;s a clear breakdown:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <SectionCard title="Website" variant="blue"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              }
            >
              <p>
                A <strong>website</strong> is a broader system — a collection
                of related webpages that are hosted under a single domain name
                and served by a web server. The architecture for serving these
                documents was established when the very first World Wide Web
                server (httpd) was written in{" "}
                <strong>October 1990</strong>.
              </p>
              <p>
                Think of a website as the entire building — it contains many
                rooms (pages), but they all share the same address.
              </p>
            </SectionCard>

            <SectionCard title="Webpage" variant="teal"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            >
              <p>
                A <strong>webpage</strong> is a single document formatted
                using <InfoBadge variant="teal">HTML</InfoBadge> —
                HyperText Markup Language. HTML provides the structure and
                content of the page, and crucially, it enables{" "}
                <strong>hypertext links</strong> — clickable connections to
                other pages — which became the primary publishing format of the
                Web.
              </p>
              <p>
                Think of a webpage as one specific room inside that building —
                it has its own unique address (URL) and its own content.
              </p>
            </SectionCard>
          </div>

          <ComparisonTable rows={comparisonRows} />
        </section>

        {/* Website vs Webpage Visual */}
        <section aria-labelledby="comparison-visual-heading">
          <h2 id="comparison-visual-heading" className="text-2xl font-bold text-slate-800 mb-4">
            Visual Overview
          </h2>
          <MediaFigure
            src="/images/website-vs-webpage.png"
            alt="Infographic comparing the structure of a website (multiple pages under one domain) versus a single webpage (one HTML document)"
            caption="Figure 2: A website is a collection of webpages under one domain. A webpage is a single HTML document with its own unique URL."
            width={800}
            height={800}
          />
        </section>

      </div>
    </>
  );
}
