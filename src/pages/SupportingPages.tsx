import { Check, ArrowRight } from "lucide-react";
import { ButtonLink, ContactBanner, FAQ, PageHeading } from "../components/UI";
import { media } from "../data/site";
export function ProcessPage() {
  return (
    <>
      <PageHeading
        eyebrow="How we work"
        title="Clear steps.\nShared momentum."
        description="Know what happens, what you receive and where your input matters."
      />
      <section className="container process-page">
        {[
          [
            "Discover",
            "First, we listen.",
            "We talk through your goals and review what you have.",
            "Findings & agreed priorities",
          ],
          [
            "Plan",
            "A plan you can see.",
            "Scope, approach, responsibilities and milestones—written down.",
            "Written plan & proposal",
          ],
          [
            "Build",
            "Bring it to life.",
            "We design, create, review and test together.",
            "Approved work, ready to launch",
          ],
          [
            "Improve",
            "Keep moving forward.",
            "Review performance and agree the next useful improvements.",
            "Reports & scoped next steps",
          ],
        ].map(([name, title, copy, out], i) => (
          <article key={name}>
            <span className="process-number">0{i + 1}</span>
            <div>
              <span className="eyebrow">{name}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
            <span className="process-output">
              <Check size={17} />
              {out}
            </span>
          </article>
        ))}
      </section>
      <section className="container section two-column">
        <div>
          <span className="eyebrow">Always in the loop</span>
          <h2>
            Less wondering.
            <br />
            More understanding.
          </h2>
          <div className="update-board">
            <span className="eyebrow">Sample project update</span>
            {["Goals agreed", "Design in review", "Your feedback next"].map(
              (x, i) => (
                <div key={x}>
                  <span>0{i + 1}</span>
                  {x}
                  <Check size={15} />
                </div>
              ),
            )}
          </div>
        </div>
        <FAQ
          items={[
            [
              "How do we communicate?",
              "We agree one main contact and a channel, with updates at the milestones in your plan.",
            ],
            [
              "How do revisions work?",
              "Review points and revision rounds are agreed before work starts.",
            ],
            [
              "What if I need extra work?",
              "We explain the impact on scope, cost and timing, then agree it before proceeding.",
            ],
            [
              "What happens at handover?",
              "You receive the agreed files, access and documentation, plus a walkthrough where included.",
            ],
          ]}
        />
      </section>
      <ContactBanner />
    </>
  );
}
export function PackagesPage() {
  const packages = [
    {
      name: "Launch",
      subtitle: "Get the foundations right.",
      type: "One-off project",
      items: [
        "Defined website scope",
        "Enquiry form & contact routes",
        "Analytics & launch handover",
      ],
    },
    {
      name: "Growth",
      subtitle: "Keep your business visible.",
      type: "Monthly engagement",
      items: [
        "Agreed mix of search, content or ads",
        "Enquiry tracking",
        "Review & improvement plan",
      ],
    },
    {
      name: "Automation",
      subtitle: "Make the follow-up easier.",
      type: "Setup + optional support",
      items: [
        "Review your enquiry process",
        "Connect your tools & reminders",
        "Testing & team handover",
      ],
    },
  ];
  return (
    <>
      <PageHeading
        eyebrow="Ways to work together"
        title="Start where\nyou need us."
        description="A clear scope. A considered plan. The right mix for your business."
      />
      <section className="container package-grid">
        {packages.map((p, i) => (
          <article key={p.name} className={i === 1 ? "featured" : ""}>
            <span className="eyebrow">{p.type}</span>
            <h2>{p.name}</h2>
            <p>{p.subtitle}</p>
            <ul>
              {p.items.map((x) => (
                <li key={x}>
                  <Check size={16} />
                  {x}
                </li>
              ))}
            </ul>
            <h3>Quoted around your needs.</h3>
            <small>Final pricing to be confirmed.</small>
            <details>
              <summary>The practical details +</summary>
              <p>
                You provide access, assets and approvals. Deliverables,
                revisions, exclusions and support are agreed in writing. Ad
                spend and third-party subscriptions are separate.
              </p>
            </details>
            <ButtonLink
              to={`/contact?service=${p.name}`}
              variant={i === 1 ? "" : "dark"}
            >
              Discuss {p.name}
            </ButtonLink>
          </article>
        ))}
      </section>
      <section className="container section package-tail">
        <h2>Need a combined plan?</h2>
        <ButtonLink to="/contact" variant="text">
          Let’s connect the pieces
        </ButtonLink>
      </section>
      <ContactBanner />
    </>
  );
}
export function AboutPage() {
  return (
    <>
      <PageHeading
        eyebrow="The studio"
        title="People first.\nEverything connected."
        description="An independent approach to websites, marketing and the moments in between."
      />
      <section className="container about-grid">
        <div className="about-photo">
          <img src={media.hero} alt="Illustrative independent-business scene" />
          <span>Temporary studio visual · founder photo to follow</span>
        </div>
        <div>
          <span className="eyebrow">The people behind the work</span>
          <h2>[Founder name]</h2>
          <p>
            [A short founder introduction, company story and verified experience
            will go here.]
          </p>
          <ul className="check-list">
            <li>
              <Check size={18} />
              Direct contact with the people doing the work
            </li>
            <li>
              <Check size={18} />
              Clear scope before we start
            </li>
            <li>
              <Check size={18} />
              Regular updates and visible progress
            </li>
          </ul>
          <ButtonLink to="/contact">Say hello</ButtonLink>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
export function InfoPage({ type }: { type: "privacy" | "terms" | "insights" }) {
  return (
    <>
      <PageHeading
        eyebrow={type === "insights" ? "From the studio" : "Draft content"}
        title={
          type === "privacy"
            ? "Privacy, clearly."
            : type === "terms"
              ? "The practical details."
              : "Ideas worth\nyour time."
        }
      />
      <section className="container legal-content">
        {type === "insights" ? (
          <>
            <h2>Something useful is on its way.</h2>
            <p>
              Original guides on websites, marketing and connected business
              systems will appear here once approved.
            </p>
          </>
        ) : type === "privacy" ? (
          <>
            <h2>This frontend preview</h2>
            <p>
              The forms do not send or store your information. Images are served
              locally. Google Fonts may receive network information when fonts
              load.
            </p>
            <h2>Before public launch</h2>
            <p>
              [Legal business name, contact address, data use, retention,
              processors, cookies and applicable rights to be supplied and
              reviewed.]
            </p>
          </>
        ) : (
          <>
            <h2>Working together</h2>
            <p>
              These are proposed services. Final prices, timelines, support and
              ownership are defined in a written agreement.
            </p>
            <h2>Before public launch</h2>
            <p>
              [Legal entity, jurisdiction, payment terms, intellectual property,
              termination and liability terms to be supplied and reviewed.]
            </p>
          </>
        )}
        <ButtonLink to="/contact" variant="dark">
          Contact us
        </ButtonLink>
      </section>
    </>
  );
}
export function NotFoundPage() {
  return (
    <>
      <PageHeading
        eyebrow="404 / A little off track"
        title="Let’s get you\nback to the studio."
      />
      <section className="container section">
        <ButtonLink to="/" variant="dark">
          Back to home
        </ButtonLink>
      </section>
    </>
  );
}
