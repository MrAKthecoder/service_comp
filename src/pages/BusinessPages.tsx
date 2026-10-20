import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Users,
  CalendarDays,
  Lightbulb,
  ScanLine,
} from "lucide-react";
import { EnquiryForm } from "../components/EnquiryForm";
import { StudioVisual, AuditVisual } from "../components/BusinessVisual";
import { site } from "../data/site";
import "../styles/business-pages.css";

const auditAreas = [
  [
    "Website & conversion",
    "Can visitors understand your offer and contact you?",
    [
      "Mobile experience",
      "Clear services & contact buttons",
      "Routes from browsing to enquiry",
    ],
  ],
  [
    "Google & local visibility",
    "Can nearby customers find accurate information about you?",
    [
      "Google Business Profile",
      "Business details & local presence",
      "Search visibility foundations",
    ],
  ],
  [
    "Social media & content",
    "Does your online presence show what makes your business worth choosing?",
    [
      "Profile clarity",
      "Content consistency",
      "Posts, reels & customer relevance",
    ],
  ],
  [
    "Lead generation",
    "Where do enquiries come from—and where are they being lost?",
    [
      "Ads & landing pages, where available",
      "WhatsApp & contact journeys",
      "Tracking and follow-up gaps",
    ],
  ],
  [
    "Reputation & competitors",
    "What do customers see when they compare your business?",
    [
      "Public reviews & responses",
      "Brand consistency",
      "Competitor presence & opportunities",
    ],
  ],
] as const;

export function AuditPage() {
  const [area, setArea] = useState(0);
  return (
    <div className="business-page audit-page audit-revised">
      <header className="bp-hero">
        <div>
          <span className="eyebrow">FREE DIGITAL AUDIT</span>
          <h1>
            A clearer picture.
            <br />
            <em>A smarter next step.</em>
          </h1>
          <p>See where customers get stuck—and what to improve first.</p>
          <a className="button" href="#audit-request">
            Request your free audit <ArrowRight size={18} />
          </a>
          <span className="bp-small">
            No website yet? Share your business or social profile.
          </span>
        </div>
        <AuditVisual />
      </header>
      <section className="audit-takeaways" aria-label="What you receive">
        {[
          {
            Icon: ScanLine,
            title: "Your digital scorecard",
            copy: "See what’s working and what needs attention.",
          },
          {
            Icon: Lightbulb,
            title: "Five opportunities",
            copy: "Know which improvements to prioritise.",
          },
          {
            Icon: CalendarDays,
            title: "A 30-day plan",
            copy: "Leave with practical next steps.",
          },
        ].map(({ Icon, title, copy }, i) => (
          <article key={title}>
            <div className="takeaway-art">
              <Icon size={38} strokeWidth={1.2} />
              <span>0{i + 1}</span>
            </div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>
      <section className="audit-explorer" aria-labelledby="audit-scope">
        <header>
          <span className="eyebrow">WHAT WE LOOK AT</span>
          <h2 id="audit-scope">The whole customer journey.</h2>
          <p>Select an area to see what the review covers.</p>
        </header>
        <div className="audit-explorer-grid">
          <div className="audit-area-buttons" aria-label="Audit review areas">
            {auditAreas.map(([title], i) => (
              <button
                type="button"
                key={title}
                aria-pressed={area === i}
                aria-controls="audit-area-panel"
                onClick={() => setArea(i)}
              >
                <span>0{i + 1}</span>
                {title}
                <ArrowUpRight size={17} />
              </button>
            ))}
          </div>
          <div id="audit-area-panel" className="audit-area-panel" key={area}>
            <span className="eyebrow">REVIEW AREA / 0{area + 1}</span>
            <h3>{auditAreas[area][0]}</h3>
            <p>{auditAreas[area][1]}</p>
            <ul>
              {auditAreas[area][2].map((item) => (
                <li key={item}>
                  <Check size={17} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section
        className="audit-request"
        id="audit-request"
        aria-labelledby="audit-title"
      >
        <div className="audit-request-intro">
          <span className="eyebrow">YOUR NEXT STEP</span>
          <h2 id="audit-title">
            Tell us about
            <br />
            your business.
          </h2>
          <p>
            Send your links and main goal. We’ll confirm the review details and
            delivery timing, then discuss your findings and priorities.
          </p>
          <ol>
            {[
              [
                "Share your details",
                "Business name, website or social links, and what you want to improve.",
              ],
              [
                "We review your presence",
                "Public information first. Any additional access is agreed with you.",
              ],
              [
                "Discuss your action plan",
                "Understand the findings and choose what to tackle next.",
              ],
            ].map(([title, copy], i) => (
              <li key={title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="bp-small">
            The audit identifies opportunities; it doesn’t make changes to your
            accounts or website.
          </p>
        </div>
        <div className="audit-form-card">
          <h3>Request a free audit</h3>
          <p>Fields marked * are required.</p>
          <EnquiryForm audit />
        </div>
      </section>
    </div>
  );
}

export function StudioPage() {
  return (
    <div className="business-page studio-page about-revised">
      <header className="bp-hero studio-hero">
        <div>
          <span className="eyebrow">ABOUT US</span>
          <h1>
            We’re {site.name}.<br />
            <em>Your digital partner.</em>
          </h1>
        </div>
        <div className="studio-intro">
          <p>
            We’re here to help small businesses build a stronger presence online.
            From your first website to your next campaign, we bring the creative
            and practical support to help you move forward.
          </p>
          <Link className="bp-text-link" to="/contact">
            Let’s get to know each other <ArrowUpRight size={19} />
          </Link>
        </div>
      </header>
      <StudioVisual />
      <section className="about-company">
        <div className="about-purpose-art">
          <span>BUILT AROUND</span>
          <div className="purpose-rings">
            <i />
            <i />
            <i />
            <strong>
              Your
              <br />
              business.
            </strong>
          </div>
          <div className="purpose-labels">
            <span>Design</span>
            <span>Marketing</span>
            <span>Systems</span>
          </div>
        </div>
        <div className="about-company-copy">
          <span className="eyebrow">WHO WE ARE</span>
          <h2>
            Good work starts with
            <br />
            understanding your business.
          </h2>
          <p>
            {site.name} brings websites, content, marketing and everyday business
            tools together in one place. We help you explain what you offer,
            reach the right people and make it easier for customers to choose you.
          </p>
          <p>
            Our approach is personal: we listen to your goals, work out what you
            need and build with you. You bring the knowledge of your business.
            We bring the design, ideas and technical support.
          </p>
          <Link className="bp-text-link" to="/services">
            Our services <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <section className="about-human">
        <div>
          <span className="eyebrow">MEET THE FOUNDER</span>
          <h2>
            [Founder name]
            <br />
            <em>The person behind {site.name}.</em>
          </h2>
          <p>
            Hi, I’m [Founder name], the founder of {site.name}. My aim is to make
            good design and digital support feel approachable for business
            owners, whether you’re just starting out or ready for your next step.
          </p>
          <Link className="bp-text-link" to="/contact">
            Let’s get to know each other <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="team-placeholder">
          <Users size={48} strokeWidth={1} />
          <span>[Founder name]</span>
          <p>Founder, {site.name}</p>
          <small>[Founder photo]</small>
        </div>
      </section>
      <section className="about-values" aria-label="Our approach">
        {[
          [
            "Listen first",
            "Understand the business before recommending the work.",
          ],
          [
            "Keep it clear",
            "Agree deliverables, price, timing and review points.",
          ],
          [
            "Work together",
            "Share previews, discuss feedback and refine the details.",
          ],
        ].map(([title, copy], i) => (
          <article key={title}>
            <span>0{i + 1}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>
      <section className="bp-end">
        <div>
          <span className="eyebrow">GET TO KNOW US</span>
          <h2>Tell us about your business.</h2>
        </div>
        <Link className="button" to="/contact">
          Let’s talk <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
