import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Globe,
  MessageCircle,
  MousePointer2,
  Search,
  Smartphone,
  Sparkles,
  Target,
} from "lucide-react";

const work = [
  {
    name: "Design",
    title: "A place for your business.",
    detail: "Website & app design",
    icon: Globe,
  },
  {
    name: "Create",
    title: "Something worth sharing.",
    detail: "Social media & content",
    icon: Smartphone,
  },
  {
    name: "Connect",
    title: "Turn interest into a conversation.",
    detail: "Enquiries & follow-ups",
    icon: MessageCircle,
  },
];

export function StudioVisual() {
  const [active, setActive] = useState(0);
  const Icon = work[active].icon;
  return (
    <section
      className="studio-canvas"
      aria-label="Explore the work we bring together"
    >
      <div className="canvas-caption">
        <span>IDEAS → SOMETHING REAL</span>
        <span>AN ILLUSTRATION OF OUR WORK</span>
      </div>
      <div className={`creative-scene creative-scene-${active}`}>
        <div className="material-note">
          <span>THE STARTING POINT</span>
          <h3>
            Your business.
            <br />
            Your next chapter.
          </h3>
          <div className="material-swatches">
            <i />
            <i />
            <i />
          </div>
          <small>Identity · Direction · Detail</small>
        </div>
        <div className="creative-window" key={active}>
          <div className="visual-browser">
            <i />
            <i />
            <i />
            <span>{work[active].detail}</span>
          </div>
          {active === 0 ? (
            <div className="design-art">
              <div>
                <small>FORM / OBJECT</small>
                <h3>
                  Everyday.
                  <br />
                  <em>Extraordinary.</em>
                </h3>
                <span className="mock-link">
                  Discover the collection <ArrowUpRight size={14} />
                </span>
              </div>
              <div className="sculpture">
                <i />
                <b />
              </div>
            </div>
          ) : active === 1 ? (
            <div className="content-art">
              <div className="content-poster">
                <small>THOUGHTFULLY MADE</small>
                <h3>
                  Less noise.
                  <br />
                  <em>More meaning.</em>
                </h3>
                <div className="poster-orbit" />
              </div>
              <div className="content-schedule">
                <span>YOUR CONTENT PLAN</span>
                {["Monday", "Wednesday", "Friday"].map((day, i) => (
                  <div key={day}>
                    <span>{day}</span>
                    <b>{["Introduce", "Inspire", "Invite"][i]}</b>
                    <Check size={15} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="connect-art">
              <div className="message-bubble">Hi! I’d like to know more.</div>
              <div className="message-bubble reply">
                Let’s find the right next step.
              </div>
              <div className="enquiry-ticket">
                <MessageCircle />
                <div>
                  <b>A conversation starts.</b>
                  <span>Enquiry → Follow-up → Next step</span>
                </div>
                <Check size={20} />
              </div>
            </div>
          )}
        </div>
        <div className="creative-stamp">
          <Icon size={22} />
          <span>{work[active].title}</span>
          <MousePointer2 size={17} />
        </div>
      </div>
      <div className="canvas-controls">
        <span>One company. Connected capabilities.</span>
        <div>
          {work.map((item, i) => (
            <button
              key={item.name}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
            >
              {item.name}
              <ArrowUpRight size={15} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

const review = [
  {
    label: "Be found",
    icon: Search,
    finding: "Make your business easier to find.",
    action: "Check your Google profile and business details.",
    kind: "Search visibility",
  },
  {
    label: "Be understood",
    icon: Globe,
    finding: "Make the next step obvious.",
    action: "Give visitors a clear route to contact you.",
    kind: "Website experience",
  },
  {
    label: "Get enquiries",
    icon: Target,
    finding: "Connect the enquiry journey.",
    action: "Review contact forms, WhatsApp and follow-ups.",
    kind: "Customer journey",
  },
];
export function AuditVisual() {
  const [active, setActive] = useState(0);
  const current = review[active];
  return (
    <div className="review-visual">
      <div className="review-top">
        <span>
          <span className="live-dot" /> YOUR DIGITAL PRESENCE
        </span>
        <small>ILLUSTRATIVE REVIEW</small>
      </div>
      <div className="review-scene" key={active}>
        <div className="review-site">
          <div className="visual-browser">
            <i />
            <i />
            <i />
            <span>your-business.example</span>
          </div>
          <div className="review-site-body">
            <div className="mock-wordmark">
              Your business<span>✳</span>
            </div>
            <div className="mock-site-grid">
              <div>
                <h3>
                  A great business.
                  <br />
                  Ready to be found.
                </h3>
                <span className="mock-contact">
                  Contact us <ArrowUpRight size={13} />
                </span>
              </div>
              <div className="mock-product">
                <Sparkles size={36} />
              </div>
            </div>
            <div className="mock-lines">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="scan-beam" />
        </div>
        <div className="review-finding">
          <span className="finding-icon">
            <current.icon size={22} />
          </span>
          <div>
            <small>{current.kind}</small>
            <h3>{current.finding}</h3>
            <p>{current.action}</p>
          </div>
        </div>
      </div>
      <div className="review-tabs">
        {review.map((item, i) => (
          <button
            key={item.label}
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            <item.icon size={17} />
            {item.label}
          </button>
        ))}
      </div>
      <div className="review-foot">
        <Check size={16} />
        <span>Clear findings. Practical next steps.</span>
        <ArrowUpRight size={18} />
      </div>
    </div>
  );
}
