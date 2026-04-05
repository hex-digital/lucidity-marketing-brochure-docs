import Link from 'next/link';
import { FeatureExplorer } from '@/components/home/feature-explorer';
import {
  architectureApps,
  architecturePackages,
  architecturePrinciples,
  audienceCards,
  directorCaseItems,
  documentationSections,
  faqs,
  featureCategories,
  heroTerminalEntries,
  includedItems,
  metrics,
  navigationItems,
  objections,
  offerAddOns,
  offerCards,
  offerIncluded,
  spotlightPoints,
  techStack,
  trustSignals,
} from '@/components/home/homepage-content';
import { env } from '@/env';

export const dynamic = 'force-static';

const salesUrl =
  'https://www.hexdigital.com/contact?utm_source=lucidity&utm_medium=marketing-site';
const demoUrl =
  'https://www.hexdigital.com/contact?utm_source=lucidity&utm_medium=marketing-site&utm_campaign=request-demo';
const docsUrl = env.NEXT_PUBLIC_DOCS_URL;

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-6 border-b border-[var(--grid-line)] pb-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-end">
      <div className="space-y-4">
        <p className="blueprint-kicker">{eyebrow}</p>
        <h2 className="section-title text-balance">{title}</h2>
      </div>
      <p className="max-w-3xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="blueprint-shell">
      <div className="blueprint-frame">
        <header className="site-header">
          <Link href="/" className="site-logo" aria-label="Lucidity home">
            Lucidity.
          </Link>

          <nav className="site-nav" aria-label="Primary">
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href} className="site-nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-header-actions">
            <Link href={docsUrl} className="site-nav-link">
              Docs
            </Link>
            <a href={salesUrl} className="button-primary">
              Talk to sales
            </a>
          </div>
        </header>

        <section className="hero-grid">
          <div className="hero-copy">
            <div className="space-y-6">
              <span className="eyebrow-pill">Next.js 16 · Sanity v5 · Enterprise starter</span>
              <h1 className="hero-title text-balance">
                The foundation your team would have spent <em>a year</em> building.
              </h1>
              <p className="hero-description">
                Lucidity is an enterprise-grade monorepo starter for engineering teams building
                on Next.js and Sanity. Multisite, multi-language, visual editing, caching,
                security, and 40+ features are already built, documented, and ready to extend.
              </p>
            </div>

            <div className="hero-actions">
              <a href={salesUrl} className="button-primary">
                Talk to sales
              </a>
              <a href={demoUrl} className="button-secondary">
                Request a demo
              </a>
            </div>

            <ul className="hero-trust-list" aria-label="Trust signals">
              {trustSignals.map((signal) => (
                <li key={signal} className="hero-trust-item">
                  <span className="crosshair-mark" aria-hidden="true" />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-media blueprint-card">
            <div className="hero-media-topline">
              <span className="blueprint-kicker">Blueprint preview</span>
              <span className="hero-status">Production-ready setup</span>
            </div>

            <div className="hero-orbit" aria-hidden="true">
              <div className="hero-orbit-ring hero-orbit-ring-primary" />
              <div className="hero-orbit-ring hero-orbit-ring-secondary" />
              <div className="hero-orbit-ring hero-orbit-ring-tertiary" />
              <div className="hero-orbit-core" />
            </div>

            <div className="terminal-panel">
              <div className="terminal-panel-header">
                <span className="terminal-dot" />
                <span className="terminal-dot" />
                <span className="terminal-dot" />
                <span className="terminal-title">lucidity/bootstrap.sh</span>
              </div>
              <pre className="terminal-panel-body">
                {heroTerminalEntries.map((entry) => (
                  <span key={entry.id}>{entry.text || ' '}</span>
                ))}
              </pre>
            </div>
          </div>
        </section>

        <section className="blueprint-section" aria-labelledby="trust-heading">
          <div className="blueprint-band">
            <div className="blueprint-band-header">
              <p className="blueprint-kicker" id="trust-heading">
                Built for the teams replacing fragile CMS foundations
              </p>
              <p className="blueprint-band-copy">
                Trend-led visual restraint outside, operational depth underneath.
              </p>
            </div>
            <div className="blueprint-logo-grid">
              {audienceCards.map((item) => (
                <article key={item.title} className="blueprint-logo-cell">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="blueprint-section">
          <SectionHeader
            eyebrow="Tech stack"
            title="The stack your team already trusts."
            description="Lucidity is designed around the technologies senior teams already use for modern content platforms, then wrapped in the routing, preview, governance, and operational tooling those stacks do not give you by default."
          />

          <div className="pill-grid mt-8">
            {techStack.map((item) => (
              <div key={item} className="pill-tile">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="blueprint-section">
          <SectionHeader
            eyebrow="ROI in numbers"
            title="The business case is built into the shape of the product."
            description="The strongest homepage patterns in this space make the argument visually scannable. Lucidity should do the same: a clear value story, clean metrics, and no inflated theatre."
          />

          <div className="stats-grid mt-8">
            {metrics.map((metric) => (
              <article key={metric.label} className="stat-card">
                <p className="stat-value">{metric.value}</p>
                <h3 className="stat-label">{metric.label}</h3>
                <p className="stat-copy">{metric.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="included" className="blueprint-section">
          <SectionHeader
            eyebrow="What you get"
            title="A year of architecture development. Ready on day one."
            description="Lucidity gives your team a complete, enterprise-grade foundation so you can focus on building the parts of your product that are distinctive, not the infrastructure every serious Next.js and Sanity project needs."
          />

          <div className="included-grid mt-8">
            {includedItems.map((item) => (
              <article key={item.index} className="included-card">
                <div className="included-index">{item.index}</div>
                <div className="space-y-3">
                  <h3 className="included-title">{item.title}</h3>
                  <p className="included-copy">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="blueprint-section">
          <div className="spotlight-grid">
            <div className="spotlight-copy">
              <p className="blueprint-kicker">Multisite spotlight</p>
              <h2 className="section-title text-balance">
                One codebase. One deployment. Unlimited sites.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
                For global organisations and multi-brand groups, the hard part is not building
                one good site. It is running all of them without duplicating engineering
                effort. Lucidity handles this through subdomain-based routing in the Next.js
                layer, where requests resolve to the right site, language, configuration, and
                editorial workflow from the same deployment.
              </p>
              <a href={docsUrl} className="button-secondary">
                Explore the docs
              </a>
            </div>

            <div className="spotlight-panel blueprint-card">
              <div className="diagram-grid" aria-hidden="true">
                <div className="diagram-node diagram-node-root">Request</div>
                <div className="diagram-node">Rewrite</div>
                <div className="diagram-node">siteId injected</div>
                <div className="diagram-node">Content context</div>
                <div className="diagram-node">Shared tokens</div>
                <div className="diagram-node">Role-aware access</div>
              </div>

              <ul className="spotlight-points">
                {spotlightPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="features" className="blueprint-section">
          <SectionHeader
            eyebrow="Feature explorer"
            title="40+ features, already configured."
            description="Instead of a flat list, the strongest blueprint-style sites cluster complexity into guided slices. This explorer lets the right buyer self-identify quickly by category."
          />

          <div className="mt-8">
            <FeatureExplorer categories={featureCategories} />
          </div>
        </section>

        <section id="architecture" className="blueprint-section">
          <SectionHeader
            eyebrow="Architecture"
            title="Built through iteration, not theory."
            description="Lucidity’s architecture has been shaped through repeated builds for complex organisations. Each structural decision reflects what consistently worked and what had to survive real delivery pressure."
          />

          <div className="architecture-grid mt-8">
            <div className="space-y-4">
              {architectureApps.map((item) => (
                <article key={item.title} className="blueprint-panel p-5 sm:p-6">
                  <p className="blueprint-kicker">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>

            <div className="blueprint-card p-5 sm:p-6">
              <p className="blueprint-kicker">Shared package layers</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {architecturePackages.map((item) => (
                  <span key={item} className="pill-tile">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {architecturePrinciples.map((item) => (
                  <div key={item} className="principle-card">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="roi" className="blueprint-section">
          <SectionHeader
            eyebrow="Make the case"
            title="The business case, plainly stated."
            description="This section is designed so an engineer can scan it, lift the argument, and reuse it internally with a director, CTO, or product lead who needs concrete reasons to approve the investment."
          />

          <div className="director-grid mt-8">
            <div className="director-metrics">
              {directorCaseItems.map((item) => (
                <article key={item.title} className="director-card">
                  <p className="director-value">{item.value}</p>
                  <h3 className="director-title">{item.title}</h3>
                  <p className="director-copy">{item.copy}</p>
                </article>
              ))}
            </div>

            <div className="blueprint-card p-5 sm:p-6">
              <p className="blueprint-kicker">Answers to likely objections</p>
              <div className="mt-5 space-y-4">
                {objections.map((item) => (
                  <article key={item.question} className="faq-card">
                    <h3 className="faq-question">{item.question}</h3>
                    <p className="faq-answer">{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="blueprint-section">
          <div className="sell-grid">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="blueprint-kicker">What’s included</p>
                <h2 className="section-title text-balance">
                  Designed for teams that need it to work from the start.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
                  Lucidity is built for engineering and product teams where content
                  infrastructure is business-critical. Pricing is tailored to your team size
                  and onboarding needs.
                </p>
              </div>

              <div className="sell-lists">
                <div className="blueprint-panel p-5">
                  <p className="blueprint-kicker">Included</p>
                  <ul className="stack-list">
                    {offerIncluded.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="blueprint-panel p-5">
                  <p className="blueprint-kicker">Available separately</p>
                  <ul className="stack-list">
                    {offerAddOns.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="hero-actions">
                <a href={salesUrl} className="button-primary">
                  Talk to sales
                </a>
                <a href={docsUrl} className="button-secondary">
                  Read the docs
                </a>
              </div>
            </div>

            <div className="offer-card-grid">
              {offerCards.map((card) => (
                <article key={card.title} className="offer-card">
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="blueprint-section">
          <SectionHeader
            eyebrow="Documentation"
            title="Documentation written for real engineering teams."
            description="The most credible product pages do not just claim the architecture is thoughtful. They show that the knowledge around it is equally usable. This section makes that explicit."
          />

          <div className="documentation-grid mt-8">
            {documentationSections.map((item) => (
              <article key={item.title} className="doc-card">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="blueprint-section">
          <SectionHeader
            eyebrow="FAQs"
            title="Common questions"
            description="Not seeing what you need? Talk to us directly. These answers stay concise so they remain useful as part of a buying conversation, not just as wall-of-text reassurance."
          />

          <div className="faq-grid mt-8">
            {faqs.map((item) => (
              <article key={item.question} className="faq-card">
                <h3 className="faq-question">{item.question}</h3>
                <p className="faq-answer">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="blueprint-section">
          <div className="final-cta blueprint-card">
            <div className="space-y-4">
              <p className="blueprint-kicker">Get started</p>
              <h2 className="section-title text-balance">
                Let’s talk about what you’re building.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
                We’ll take the time to understand your stack, your team, and your editorial
                requirements, then give you an honest view of whether Lucidity is the right
                fit.
              </p>
            </div>

            <div className="hero-actions">
              <a href={salesUrl} className="button-primary">
                Talk to sales
              </a>
              <a href={docsUrl} className="button-secondary">
                Read the docs
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
