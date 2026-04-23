import { Wrapper } from "@/app/components/Wrapper/Wrapper";
import styles from "./EnterpriseSection.module.css";

const featureRows = [
  {
    title: "Turnkey adoption",
    description:
      "Clone the repo, configure your environments, and deploy. Most teams have a working foundation within a week.",
    divider: "dew" as const,
  },
  {
    title: "Extensible by design",
    description:
      "You can see exactly how it works. Every package is documented, typed, and designed to be extended.",
    divider: "dew" as const,
  },
  {
    title: "Long-term confidence",
    description:
      "What you're inheriting is a result of solving real problems for complex, content-led organisations, refined through every deployment into something we'd build again today, exactly as it is.",
    divider: "haze" as const,
  },
  {
    title: "Onboarding and consultancy",
    description:
      "For teams that want additional support, onboarding workshops, architectural reviews implementation consultancy are available separately.",
    divider: "iris" as const,
  },
] as const;

function getDividerClass(divider: (typeof featureRows)[number]["divider"]) {
  if (divider === "haze") {
    return styles.dividerHaze;
  }

  if (divider === "iris") {
    return styles.dividerIris;
  }

  return styles.dividerDew;
}

export function EnterpriseSection() {
  return (
    <section className={styles.section}>
      <Wrapper as="div" padding="large" className={styles.content}>
        <div className={styles.copyColumn}>
          <div className={styles.headingGroup}>
            <p className={styles.eyebrow}>Enterprise</p>
            <h1 className={styles.title}>
              Designed for teams that need it to work from the start.
            </h1>
          </div>

          <div className={styles.bodyCopy}>
            <p>
              Lucidity is built for engineering and product teams at organisations
              where content infrastructure is business-critical. Pricing is
              tailored to your team size and onboarding requirements.
            </p>
            <p className={styles.listLabel}>What&apos;s included</p>
            <ul>
              <li>
                The full source code is yours to own, modify and deploy
                indefinitely
              </li>
              <li>One year of updates, bug fixes, and compatibility releases</li>
              <li>GitHub access for raising issues and tracking fixes</li>
            </ul>
            <p className={styles.listLabel}>Available separately:</p>
            <ul>
              <li>Onboarding workshop with the Lucidity team</li>
              <li>Architectural review for your specific setup</li>
              <li>Implementation consultancy and embedded engineering</li>
            </ul>
          </div>

          <button type="button" className={styles.cta}>
            Talk to sales
          </button>
        </div>

        <div className={styles.featuresColumn}>
          {featureRows.map((row) => (
            <article
              key={row.title}
              className={`${styles.featureRow} ${getDividerClass(row.divider)}`}
            >
              <h2>{row.title}</h2>
              <p>{row.description}</p>
            </article>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
