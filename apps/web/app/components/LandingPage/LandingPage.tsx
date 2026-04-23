import { BrandElements } from "@/app/components/BrandElements/BrandElements";
import { Button } from "@/app/components/Buttons/Button";
import styles from "./LandingPage.module.css";

const enterpriseRows = [
  ["Turnkey adoption", "Clone the repo, configure your environments, and deploy. Most teams have a working foundation within a week."],
  ["Extensible by design", "You can see exactly how it works. Every package is documented, typed, and designed to be extended."],
  ["Long-term confidence", "What you're inheriting is a result of solving real problems for complex, content-led organisations, refined through every deployment into something we'd build again today, exactly as it is."],
  ["Onboarding and consultancy", "For teams that want additional support, onboarding workshops, architectural reviews implementation consultancy are available separately."],
] as const;

const featureCards = [
  ["01", "Configured Sanity Studio", "Your editorial team can log in and start working from day one. The Studio is organised around how your team actually works and is built for editors, not developers.", "var(--color-rose-dark)"],
  ["02", "Visual Editing and live previews", "Editors see exactly what content will look like before publish, and stakeholders can review draft links without needing a Studio account.", "var(--color-blush-dark)"],
  ["03", "Multisite and multilang from the ground up", "Run as many sites as you need from one codebase with independent content, language, and editorial workflows.", "var(--color-iris-dark)"],
  ["04", "Security built in, not added on", "Password-protected environments, secure request handling, and CSP are part of the foundation from day one.", "var(--color-haze-dark)"],
  ["05", "No single point of failure", "Consistent architecture and typed packages let any engineer onboard and maintain the platform safely.", "var(--color-mist-dark)"],
  ["06", "Modular content blocks", "Composable, documented blocks let teams ship pages faster without repeating implementation work.", "var(--color-dew-dark)"],
] as const;

const techRows = [
  ["Next.js", "Industry-leading framework for production web applications"],
  ["Turborepo", "Monorepo build system built for scale, by Vercel"],
  ["React 19", "The UI library powering the world's most complex web products"],
  ["TypeScript", "Type-safe development across every app and package"],
  ["Storybook", "The standard for building and documenting component libraries"],
  ["Tailwind CSS", "Utility-first CSS used by engineering teams at scale"],
] as const;

const architectureRows = [
  ["apps/web", "The Next.js frontend. App Router, multisite routing, visual editing integration and all your page templates", "var(--color-mist-dark)"],
  ["apps/sanity", "The Sanity Studio. Fully customised with actions, structure builder, custom components and all schema types.", "var(--color-haze)"],
  ["apps/storybook", "Component library and design system workshop. Isolated component development and visual regression testing.", "var(--color-iris-dark)"],
  ["11 shared packages", "sanity-toolkit, modular-content-blocks, security, next-proxy, pte-utilities, utilities, config, tooling, and more.", "var(--color-blush-dark)"],
] as const;

const convinceCards = [
  ["01", "6 months of engineering time recovered.", "The infrastructure is already built. Multisite routing, cache invalidation, Studio configuration, and security are inherited on day one.", "var(--color-rose-dark)"],
  ["02", "Day 1 onboard your editorial team.", "Your content team can log into a fully configured Studio straight away.", "var(--color-blush-dark)"],
  ["03", "Unlimited sites, one engineering team.", "No duplicate codebases and no duplicate maintenance cost.", "var(--color-iris-dark)"],
  ["04", "Low bus factor risk.", "Built on Sanity CMS, fully documented and typesafe so ownership is never isolated to one engineer.", "var(--color-haze-dark)"],
  ["05", "Zero lock in.", "You own the source code from day one. Lucidity is a starting point, not a subscription platform.", "var(--color-mist-dark)"],
  ["06", "1 year of updates included.", "Compatibility releases, bug fixes, and improvements are delivered via GitHub for year one.", "var(--color-dew-dark)"],
] as const;

function Eyebrow({ children, accent = "var(--color-blush-dark)" }: { children: string; accent?: string }) {
  return (
    <p className={styles.eyebrow} style={{ borderBottomColor: accent }}>
      {children}
    </p>
  );
}

export function LandingPage() {
  return (
    <main className={styles.page}>
      <BrandElements />

      <section className={styles.nav}>
        <div className={styles.container}>
          <img src="/logo.svg" alt="Lucidity" className={styles.logo} />
          <nav className={styles.navLinks}>
            <a href="#">Documentation</a>
            <a href="#">Features</a>
            <a href="#">Enterprise</a>
          </nav>
          <Button href="#" variant="primary">Talk to sales</Button>
        </div>
      </section>

      <section className={styles.hero}>
        <div className={styles.containerSplit}>
          <div className={styles.heroCopy}>
            <h1>The best start your Sanity project can get.</h1>
            <p>
              Lucidity is an enterprise-grade monorepo framework for engineering teams building on Next.js and Sanity. Multisite, multi-lang, visual editing, caching, security and 40+ features, all from day one.
              <br />
              <br />
              <strong>Cut 6 months off your delivery timeline</strong> with a codebase that&apos;s documented and ready to extend.
            </p>
            <div className={styles.buttonRow}>
              <Button href="#" variant="primary">Talk to sales</Button>
              <Button href="#" variant="secondary">Request a demo</Button>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <img src="http://localhost:3845/assets/2512387d80b6965b4e6d57294068895488a186ce.png" alt="Hero visual" />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerCentered}>
          <p className={styles.monoLabel}>Built with Lucidity</p>
          <div className={styles.logoRow}><div /><div /><div /><div /></div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerCentered}>
          <Eyebrow accent="var(--color-rose-dark)">What you get</Eyebrow>
          <h2 className={styles.centerTitle}>A year of development. Ready on day one.</h2>
          <p className={styles.centerCopy}>
            Lucidity is built on a modern, battle-tested stack, the same tools trusted by engineering teams at some of the world&apos;s leading organisations.
          </p>
          <div className={styles.stats}>
            <div><strong>6+ months</strong><span>head start on development work</span></div>
            <div><strong>40+</strong><span>production features out of the box</span></div>
            <div><strong>Unlimited</strong><span>sites from a single licence + codebase</span></div>
          </div>
          <div className={styles.cardGrid}>
            {featureCards.map(([index, title, body, color]) => (
              <article key={title} className={styles.card}>
                <p className={styles.cardIndex} style={{ color }}>{index}</p>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <Button href="#" variant="primary">And so much more</Button>
        </div>
      </section>

      <section className={styles.sectionDark}>
        <div className={styles.containerSplit}>
          <div>
            <Eyebrow>Enterprise</Eyebrow>
            <h2>Designed for teams that need it to work from the start.</h2>
            <p>Lucidity is built for engineering and product teams at organisations where content infrastructure is business-critical.</p>
            <Button href="#" variant="primary">Talk to sales</Button>
          </div>
          <div className={styles.tableList}>
            {enterpriseRows.map(([title, body], index) => (
              <article key={title} className={styles.enterpriseRow}>
                <h3>{title}</h3>
                <p>{body}</p>
                <span className={styles.enterpriseDivider} data-divider={index + 1} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionDark}>
        <div className={styles.containerSplit}>
          <div>
            <Eyebrow accent="var(--color-iris-dark)">Features</Eyebrow>
            <h2>40+ features. All pre-configured.</h2>
          </div>
          <div className={styles.mosaic} />
        </div>
      </section>

      <section className={styles.sectionDark}>
        <div className={styles.containerSplit}>
          <div>
            <Eyebrow accent="var(--color-haze-dark)">Spotlight / Multisite</Eyebrow>
            <h2>One codebase. Unlimited sites.</h2>
            <p>Adding a new site isn&apos;t an engineering project. It&apos;s a configuration decision.</p>
          </div>
          <div className={styles.videoPlaceholder} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerSplit}>
          <div>
            <Eyebrow accent="var(--color-mist-dark)">Tech stack</Eyebrow>
            <h2>Industry-standard tools. Enterprise-grade from the ground up.</h2>
          </div>
          <div className={styles.rows}>
            {techRows.map(([name, description]) => (
              <div key={name} className={styles.row}>
                <strong>{name}</strong>
                <span>{description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerSplit}>
          <div>
            <Eyebrow accent="var(--color-rose-dark)">Architecture</Eyebrow>
            <h2>Built through iteration, not theory.</h2>
          </div>
          <div className={styles.pathList}>
            {architectureRows.map(([name, description, dot]) => (
              <article key={name}>
                <h3><span className={styles.pathDot} style={{ background: dot }} />{name}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerCentered}>
          <Eyebrow>Convince your director</Eyebrow>
          <h2 className={styles.centerTitle}>The business case, plainly started.</h2>
          <div className={styles.cardGrid}>
            {convinceCards.map(([index, title, body, color]) => (
              <article key={title} className={styles.card}>
                <p className={styles.cardIndex} style={{ color }}>{index}</p>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerSplit}>
          <div>
            <Eyebrow accent="var(--color-iris-dark)">Documentation</Eyebrow>
            <h2>Documentation written for real engineering teams.</h2>
            <Button href="#" variant="secondary">View the docs</Button>
          </div>
          <div className={styles.pathList}>
            <article><h3>Quick Start</h3><p>The quickest route to getting a Lucidity project running locally.</p></article>
            <article><h3>Philosophy</h3><p>Guiding principles for the development of Lucidity.</p></article>
            <article><h3>Enterprise</h3><p>Guidance for teams preparing Lucidity for larger programs and enterprise delivery.</p></article>
            <article><h3>Structures</h3><p>A high-level map of application structure, content model, and delivery flow.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.sectionDark}>
        <div className={styles.containerSplit}>
          <div>
            <Eyebrow accent="var(--color-haze-dark)">Get started</Eyebrow>
            <h2>Let&apos;s talk about what you&apos;re building</h2>
            <Button href="#" variant="primary">Talk to sales</Button>
          </div>
          <div className={styles.formPlaceholder} />
        </div>
      </section>

      <section className={styles.sectionDark}>
        <div className={styles.containerCentered}>
          <Eyebrow accent="var(--color-mist-dark)">FAQs</Eyebrow>
          <h2 className={styles.centerTitle}>Common questions</h2>
          <div className={styles.faqList}>
            <article><h3>Can&apos;t we just build it?</h3><p>To create something like Lucidity yourself would take several hundred development hours and deep platform expertise.</p></article>
            <article><h3>Are we dependent on a third-party?</h3></article>
            <article><h3>What if we need to change things?</h3></article>
            <article><h3>Is there support if something goes wrong?</h3></article>
          </div>
        </div>
      </section>

      <section className={styles.sectionDark}>
        <div className={styles.containerCentered}>
          <Eyebrow accent="var(--color-rose-dark)">About the creators</Eyebrow>
          <p className={styles.centerCopy}>
            Built by Hex Digital. Lucidity is the system we wished existed for enterprise content teams, then iterated into reality.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <img src="/logo.svg" alt="Lucidity" className={styles.logo} />
        <p>About Hex Digital • Lucidity Licence • Privacy Policy</p>
      </footer>
    </main>
  );
}
