import { useState } from "react";
import {
  ArrowRight,
  Check,
  Calendar,
  Search,
  MapPin,
  Play,
  Star,
  Mail,
  Clock,
  ChevronRight,
  Monitor,
  Smartphone,
} from "lucide-react";
import { media } from "../data/site";

type Props = { id: string; stage: number; onInteract: () => void };
function BrowserBar({ label }: { label: string }) {
  return (
    <div className="showcase-browserbar">
      <span>● ● ●</span>
      <span>{label}</span>
      <ArrowRight size={12} />
    </div>
  );
}

function WebsiteExample({ stage, onInteract }: Omit<Props, "id">) {
  const [slot, setSlot] = useState("11:00");
  const [requested, setRequested] = useState(false);
  return (
    <div className={`web-product product-stage-${stage}`}>
      <div className="product-desktop">
        <BrowserBar label="NORTH / Property studio" />
        <div className="north-header">
          <b>NORTH.</b>
          <span>Homes &nbsp; Studio &nbsp; Contact</span>
        </div>
        <div className="north-hero">
          <img
            src={media.architecture}
            alt="Property website concept with a modern home"
          />
          <div>
            <span>SPACES FOR LIVING</span>
            <h3>
              Find a place
              <br />
              that feels like you.
            </h3>
            <button
              onClick={() => {
                onInteract();
                setRequested(true);
              }}
            >
              Request a viewing <ArrowRight size={12} />
            </button>
          </div>
        </div>
        <div className="north-bottom">
          <span>
            Considered homes.
            <br />
            <b>A personal approach.</b>
          </span>
          <span>Explore. Shortlist. Enquire.</span>
        </div>
      </div>
      <div className="product-phone">
        <div className="phone-island" />
        <div className="phone-brand">
          NORTH.<span>Viewing planner</span>
        </div>
        <div className="phone-home">
          <img src={media.architecture} alt="Selected property" />
          <span>
            Garden residence<small>Private viewing</small>
          </span>
        </div>
        <h4>
          Make time for
          <br />
          your next home.
        </h4>
        <div className="phone-date">
          <Calendar size={16} />
          Choose a viewing time
        </div>
        <div className="phone-slots">
          {["11:00", "14:00", "16:30"].map((time) => (
            <button
              key={time}
              aria-pressed={slot === time}
              onClick={() => {
                onInteract();
                setSlot(time);
                setRequested(false);
              }}
            >
              {time}
            </button>
          ))}
        </div>
        <button
          className="phone-confirm"
          onClick={() => {
            onInteract();
            setRequested(true);
          }}
        >
          {requested ? (
            <>
              <Check size={14} />
              Request previewed
            </>
          ) : (
            <>
              Request viewing
              <ArrowRight size={14} />
            </>
          )}
        </button>
        <p aria-live="polite">
          {requested
            ? `Example request for ${slot}. Nothing was sent.`
            : "Interactive app concept · try a time"}
        </p>
      </div>
      <div className="product-caption">
        <Monitor size={15} />
        Your website <span>+</span>
        <Smartphone size={15} />
        Your customer’s next step
      </div>
    </div>
  );
}
function SocialExample({ stage }: { stage: number }) {
  return (
    <div className="social-campaign outdoor-campaign">
      <div className="campaign-heading">
        <div>
          <span>CAMPAIGN CONCEPT / FIELDWORK</span>
          <h3>Built to be seen.</h3>
        </div>
        <span className="campaign-month">
          CONTENT PLAN
          <br />
          <b>WEEK 01</b>
        </span>
      </div>
      <div className="campaign-posts">
        <article className={stage === 0 ? "post-selected" : ""}>
          <span>MON / BRAND STORY</span>
          <div className="daybreak-poster">
            <b>FIELDWORK®</b>
            <h4>
              Take the
              <br />
              long way.
            </h4>
            <img
              src="/images/editorial/mountain.jpg"
              alt="Mountain summit beneath an open sky"
            />
            <small>OUTSIDE IS CALLING.</small>
          </div>
          <footer>
            Introduce your business <Check size={14} />
          </footer>
        </article>
        <article className={stage === 1 ? "post-selected" : ""}>
          <span>WED / PRODUCT MOMENT</span>
          <div className="daybreak-photo">
            <img
              src="/images/editorial/forest.jpg"
              alt="Forested valley beneath a granite cliff, used in a campaign concept"
            />
            <h4>
              Less scrolling.
              <br />
              More exploring.
            </h4>
          </div>
          <footer>
            Show what you offer <Check size={14} />
          </footer>
        </article>
        <article className={stage === 2 ? "post-selected" : ""}>
          <span>FRI / INVITATION</span>
          <div className="daybreak-invite">
            <small>THE WEEKEND EDIT</small>
            <h4>
              Make room
              <br />
              for outside.
            </h4>
            <span>
              Fresh air.
              <br />A fresh perspective.
            </span>
            <b>FIELDWORK ↗</b>
          </div>
          <footer>
            Give people a reason to visit <Check size={14} />
          </footer>
        </article>
      </div>
      <div className="campaign-approval">
        <Check size={14} />
        {stage === 2
          ? "Approved content → publishing schedule"
          : "Brand voice → content plan → your approval"}
      </div>
    </div>
  );
}
function ContentExample({ stage }: { stage: number }) {
  return (
    <div className="editor-workspace">
      <div className="editor-library">
        <span>THE MATERIAL</span>
        <h3>
          A story in
          <br />
          the making.
        </h3>
        <img src={media.craft} alt="Craftsperson shaping pottery" />
        <span>01 / THE MAKER</span>
        <div className="editor-text-asset">
          A thoughtful object.
          <br />
          Made by hand.
        </div>
        <span>02 / THE MESSAGE</span>
      </div>
      <div className="editor-main">
        <div className="editor-top">
          STUDIO FILM / PORTRAIT EDIT{" "}
          <span>{["SELECT", "EDIT", "PREVIEW"][stage]}</span>
        </div>
        <div className="editor-film">
          <img
            src={media.craft}
            alt="Portrait film concept showing a potter at work"
          />
          <div className={`film-type film-type-${stage}`}>
            <small>THE MAKER SERIES</small>
            <h3>
              {[
                "Start with\nthe real story.",
                "Every detail.\nMade by hand.",
                "Craft worth\nslowing down for.",
              ][stage]
                .split("\n")
                .map((line) => (
                  <span key={line}>{line}</span>
                ))}
            </h3>
          </div>
          <span className="film-count">00:0{stage * 2} / 00:06</span>
        </div>
        <div className="edit-timeline">
          <span>
            <Play size={12} />
            EDIT TIMELINE
          </span>
          <div className="timeline-track">
            {["Opening", "The craft", "The detail"].map((label, i) => (
              <span key={label} className={i === stage ? "clip-active" : ""}>
                {label}
              </span>
            ))}
          </div>
          <div className="audio-track">
            Audio & captions <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}
function SearchExample({ stage, onInteract }: Omit<Props, "id">) {
  const [panel, setPanel] = useState("Overview");
  return (
    <div className="local-search">
      <div className="search-audit">
        <span className="showcase-eyebrow">LOCAL DISCOVERY</span>
        <h3>
          The right details.
          <br />
          In the right places.
        </h3>
        {["Business information", "Services & location", "Website pages"].map(
          (label, i) => (
            <div className={i <= stage ? "audit-done" : ""} key={label}>
              <Check size={15} />
              {label}
            </div>
          ),
        )}
        <small>
          Illustrative search experience.
          <br />
          No position or ranking is promised.
        </small>
      </div>
      <div className="local-results">
        <div className="local-searchbar">
          <Search size={16} />
          <span>interior design studio near me</span>
        </div>
        <div className="local-listing">
          <div className="local-listing-header">
            <span className="listing-monogram">a.</span>
            <div>
              <h4>Atelier interiors</h4>
              <span>Interior design studio · Your city</span>
            </div>
          </div>
          <div className="local-tabs">
            {["Overview", "Services", "Contact"].map((label) => (
              <button
                key={label}
                aria-pressed={panel === label}
                onClick={() => {
                  onInteract();
                  setPanel(label);
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="local-panel">
            {panel === "Overview" ? (
              <>
                <h4>Spaces made for everyday living.</h4>
                <p>
                  A clear introduction, accurate opening hours and an easy way
                  to get in touch.
                </p>
              </>
            ) : panel === "Services" ? (
              <>
                <h4>What this studio offers</h4>
                <p>Home interiors · Space planning · Design consultation</p>
              </>
            ) : (
              <>
                <h4>Start a conversation</h4>
                <p>
                  Website · Directions · Contact details
                  <br />
                  Available together, when a customer needs them.
                </p>
              </>
            )}
            <span>
              <MapPin size={14} />
              Business details that are easy to find
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
function AdsExample({ stage }: { stage: number }) {
  return (
    <div className="advertising-board">
      <div className="ad-poster">
        <span>CAMPAIGN CONCEPT / MOVEMENT STUDIO</span>
        <h3>
          Make room
          <br />
          for a stronger
          <br />
          <em>you.</em>
        </h3>
        <div className="movement-graphic">
          <i />
          <i />
          <i />
        </div>
        <span className="poster-offer">DISCOVER YOUR FIRST SESSION ↗</span>
      </div>
      <div className="ad-path">
        <span className="showcase-eyebrow">
          A CLEAR PATH FROM AD TO ENQUIRY
        </span>
        {[
          ["The offer", "A relevant message for the people you want to reach."],
          ["The destination", "A focused page with one useful next step."],
          ["The enquiry", "An enquiry your team can respond to."],
        ].map(([title, copy], i) => (
          <div className={i === stage ? "path-current" : ""} key={title}>
            <span>0{i + 1}</span>
            <div>
              <h4>{title}</h4>
              <p>{copy}</p>
            </div>
            <ArrowRight size={16} />
          </div>
        ))}
        <small>Creative, audience, budget and tracking agreed together.</small>
      </div>
    </div>
  );
}
function AutomationExample({ stage }: { stage: number }) {
  return (
    <div className="workflow-product">
      <div className="workflow-sidebar">
        <span className="showcase-eyebrow">EXAMPLE WORKFLOW</span>
        <h3>
          A request.
          <br />A clear route.
          <br />A next action.
        </h3>
        <p>Built around your tools and your approval rules.</p>
        <div>
          <span className="workflow-status" />
          Human review included
        </div>
      </div>
      <div className="workflow-canvas">
        {[
          ["01", "Form received", "A new customer request arrives.", Mail],
          [
            "02",
            "Review & assign",
            "Check the details. Choose an owner.",
            Search,
          ],
          [
            "03",
            "Follow-up task",
            "Create the next action for your team.",
            Check,
          ],
        ].map(([n, title, copy, Icon], i) => {
          const Symbol = Icon as typeof Check;
          return (
            <div
              className={`workflow-block ${i <= stage ? "workflow-complete" : ""}`}
              key={String(n)}
            >
              <span>{String(n)}</span>
              <Symbol size={19} />
              <div>
                <h4>{String(title)}</h4>
                <p>{String(copy)}</p>
              </div>
              <i>{i <= stage ? "✓" : "·"}</i>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function ReputationExample({ stage }: { stage: number }) {
  return (
    <div className="reputation-product">
      <div className="brand-specimen">
        <span>BRAND PRESENCE / EXAMPLE</span>
        <div className="brand-wordmark">
          Luma<span>ADVISORY</span>
        </div>
        <div className="brand-rules">
          <span>Clear.</span>
          <span>Considered.</span>
          <span>Consistent.</span>
        </div>
        <div className="brand-swatches">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="reputation-inbox">
        <span className="showcase-eyebrow">CUSTOMER FEEDBACK</span>
        <div className="feedback-entry">
          <span className="feedback-avatar">C</span>
          <div>
            <h4>A customer’s experience</h4>
            <small>Illustrative review</small>
            <div className="feedback-stars">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star size={13} key={i} />
              ))}
            </div>
            <p>“The team explained everything clearly and kept us informed.”</p>
          </div>
        </div>
        <div className={`feedback-reply reply-phase-${stage}`}>
          <span>
            {stage === 0
              ? "RESPONSE DRAFT"
              : stage === 1
                ? "REVIEW THE TONE"
                : "READY FOR APPROVAL"}
          </span>
          <p>
            Thank you for sharing this. We’re pleased the guidance was helpful.
          </p>
          <small>
            <Check size={13} />A thoughtful response in your voice.
          </small>
        </div>
      </div>
    </div>
  );
}
function CRMExample({ stage, onInteract }: Omit<Props, "id">) {
  const [selected, setSelected] = useState("Alex Morgan");
  return (
    <div className="crm-product">
      <div className="crm-product-head">
        <div>
          <span className="showcase-eyebrow">CUSTOMER WORKSPACE / CONCEPT</span>
          <h3>Every conversation, in view.</h3>
        </div>
        <span>Enquiries & follow-ups</span>
      </div>
      <div className="crm-product-body">
        <div className="crm-contact-list">
          {["Alex Morgan", "Sam Patel", "Jordan Lee"].map((name, i) => (
            <button
              key={name}
              aria-pressed={selected === name}
              onClick={() => {
                onInteract();
                setSelected(name);
              }}
            >
              <span>
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <div>
                <b>{name}</b>
                <small>
                  {
                    [
                      "Website enquiry",
                      "Consultation request",
                      "Follow-up due",
                    ][i]
                  }
                </small>
              </div>
              <ChevronRight size={14} />
            </button>
          ))}
        </div>
        <div className="crm-contact-detail">
          <span className="showcase-eyebrow">EXAMPLE CONTACT</span>
          <h3>{selected}</h3>
          <div className="crm-stages">
            {["New", "In conversation", "Follow-up"].map((label, i) => (
              <span className={i === stage ? "current" : ""} key={label}>
                {label}
              </span>
            ))}
          </div>
          <div className="crm-activity">
            <Mail size={16} />
            <div>
              <b>Enquiry received</b>
              <p>Interested in discussing the available services.</p>
            </div>
          </div>
          <div className="crm-task">
            <Clock size={17} />
            <div>
              <b>
                {
                  [
                    "Assign a contact owner",
                    "Arrange an introductory call",
                    "Confirm the next steps",
                  ][stage]
                }
              </b>
              <p>Clear responsibility. A visible next action.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function ConsultingExample({ stage }: { stage: number }) {
  return (
    <div className="strategy-product">
      <header>
        <span>BUSINESS REVIEW / WORKING PLAN</span>
        <span>01 — 03</span>
      </header>
      <div className="strategy-title">
        <h3>
          Fewer priorities.
          <br />
          <em>More direction.</em>
        </h3>
        <p>
          A practical example of turning a business review into next actions.
        </p>
      </div>
      <div className="strategy-columns">
        {[
          [
            "Understand",
            "Where are enquiries coming from?",
            "Review the current customer journey.",
          ],
          [
            "Prioritise",
            "What is getting in the way?",
            "Find the most useful improvements.",
          ],
          [
            "Plan",
            "What should happen next?",
            "Agree actions, owners and resources.",
          ],
        ].map(([title, q, copy], i) => (
          <div className={i === stage ? "strategy-active" : ""} key={title}>
            <span>
              0{i + 1} / {title}
            </span>
            <h4>{q}</h4>
            <p>{copy}</p>
            <ArrowRight size={19} />
          </div>
        ))}
      </div>
    </div>
  );
}
export function ServiceShowcase(props: Props) {
  const { id, ...rest } = props;
  switch (id) {
    case "websites":
      return <WebsiteExample {...rest} />;
    case "social":
      return <SocialExample {...rest} />;
    case "content":
      return <ContentExample {...rest} />;
    case "seo":
      return <SearchExample {...rest} />;
    case "ads":
      return <AdsExample {...rest} />;
    case "automation":
      return <AutomationExample {...rest} />;
    case "reputation":
      return <ReputationExample {...rest} />;
    case "crm":
      return <CRMExample {...rest} />;
    default:
      return <ConsultingExample {...rest} />;
  }
}
