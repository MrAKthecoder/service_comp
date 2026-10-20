import {
  Check,
  CheckCheck,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Play,
  Search,
  Send,
} from "lucide-react";
import { media, type ServiceId } from "../data/site";

function WebsiteScreen() {
  return (
    <div className="website-screen">
      <img
        src={media.architecture}
        alt="Concept architecture website"
        loading="lazy"
      />
      <div className="sample-nav">
        <b>NORTH STUDIO</b>
        <span>Spaces &nbsp; About &nbsp; Contact</span>
      </div>
      <div className="sample-copy">
        <span>THOUGHTFULLY DESIGNED</span>
        <h3>
          Space to live.
          <br />
          Room to dream.
        </h3>
        <span className="sample-cta">Explore our spaces ↗</span>
      </div>
    </div>
  );
}
export function ServiceVisual({
  type,
  step = 0,
  mobile = false,
}: {
  type: ServiceId;
  step?: number;
  mobile?: boolean;
}) {
  if (type === "websites")
    return (
      <div
        className={`service-visual website-visual ${mobile ? "mobile-preview" : ""}`}
      >
        <div className="browser-mock">
          <div className="browser-chrome">
            <i />
            <i />
            <i />
            <span>
              <Globe size={10} /> northstudio.example
            </span>
          </div>
          <WebsiteScreen />
        </div>
        <div className="phone-mock">
          <WebsiteScreen />
        </div>
        {step === 2 && (
          <div className="floating-note">
            <Check size={19} />
            <div>
              <strong>Enquiry received</strong>
              <small>A new conversation starts here.</small>
            </div>
          </div>
        )}
      </div>
    );
  if (type === "seo")
    return (
      <div className="service-visual search-visual">
        <div className="search-card">
          <div className="search-brand">
            Search<span>●</span>
          </div>
          <div className="search-input">
            <Search size={17} />
            <span>architecture studio near me</span>
          </div>
          <div className="search-tabs">
            All &nbsp;&nbsp; Maps &nbsp;&nbsp; Images &nbsp;&nbsp; More
          </div>
          <div className="search-result">
            <span>
              <Globe size={15} /> northstudio.example
            </span>
            <h3>North Studio — Spaces for living</h3>
            <p>
              Thoughtful architecture. Local knowledge.
              <br />
              Discover our work and meet the team.
            </p>
          </div>
          <div className="local-result">
            <img
              src={media.architecture}
              alt="Architecture studio concept"
              loading="lazy"
            />
            <div>
              <strong>North Studio</strong>
              <small>
                <MapPin size={12} /> Architecture & interiors
              </small>
              <span>View business →</span>
            </div>
          </div>
        </div>
        <span className="visual-label">Illustrative search result</span>
      </div>
    );
  if (type === "social")
    return (
      <div className="service-visual calendar-visual">
        <div className="calendar-card">
          <div className="calendar-header">
            <span>YOUR CONTENT CALENDAR</span>
            <span className="status-pill">
              <Check size={11} /> Ready to review
            </span>
          </div>
          <div className="weekdays">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>
          <div className="calendar-grid">
            {Array.from({ length: 14 }, (_, i) => (
              <div key={i} className={i % 5 === 3 ? "empty-day" : ""}>
                <span>{i + 1}</span>
                {i % 5 !== 3 && (
                  <img
                    src={
                      [
                        media.coffee,
                        media.craft,
                        media.architecture,
                        media.campaign,
                      ][i % 4]
                    }
                    loading="lazy"
                    alt={`Sample post ${i + 1}`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="calendar-bottom">
            A consistent look. A month with a plan.
            <CheckCheck size={16} />
          </div>
        </div>
      </div>
    );
  if (type === "content")
    return (
      <div className="service-visual content-visual">
        <img
          className="content-background"
          src={media.craft}
          alt="Ceramic artist at work — concept Reel"
          loading="lazy"
        />
        <div className="reel-frame">
          <div className="reel-top">
            THE MAKERS SERIES <span>01 / 03</span>
          </div>
          <div className="reel-title">
            Made by hand.
            <br />
            Worth a closer look.
          </div>
          <div className="reel-bottom">
            <Play size={13} fill="currentColor" />
            <span>Concept film</span>
            <div />
            <span>9:16</span>
          </div>
        </div>
        <span className="visual-label">
          Reel storyboard · final video to follow
        </span>
      </div>
    );
  if (type === "ads")
    return (
      <div className="service-visual ad-visual">
        <div className="ad-card">
          <div className="ad-account">
            <span className="brand-avatar">d.</span>
            <span>
              Daybreak<small>Sponsored · concept</small>
            </span>
            <span>•••</span>
          </div>
          <div className="ad-image">
            <img
              src={media.campaign}
              alt="Fictional citrus beverage campaign"
              loading="lazy"
            />
            <h3>
              A brighter
              <br />
              kind of break.
            </h3>
          </div>
          <div className="ad-bottom">
            <span>Find your new favourite.</span>
            <span>Learn more ↗</span>
          </div>
        </div>
        {step > 0 && (
          <div className="floating-note">
            <Mail size={20} />
            <div>
              <strong>New product enquiry</strong>
              <small>Your offer started a conversation.</small>
            </div>
          </div>
        )}
      </div>
    );
  return (
    <div className="service-visual automation-visual">
      <div className="chat-card">
        <div className="chat-header">
          <span className="chat-icon">
            <MessageCircle size={22} />
          </span>
          <div>
            Your business<small>Enquiry journey · example</small>
          </div>
        </div>
        <div className="chat-bubble incoming">
          Hi, can I book a consultation?<small>10:14</small>
        </div>
        {step >= 1 && (
          <div className="chat-bubble outgoing">
            Thanks for getting in touch.
            <br />
            Our team will contact you shortly.
            <small>
              10:15 <CheckCheck size={13} />
            </small>
          </div>
        )}
        <div className="chat-compose">
          Message <Send size={16} />
        </div>
      </div>
      <div className={`lead-task ${step >= 2 ? "complete" : ""}`}>
        <span className="task-avatar">A</span>
        <div>
          <strong>
            {step >= 2 ? "Consultation booked" : "Follow up with Alex"}
          </strong>
          <small>
            {step >= 2
              ? "Your team takes it from here."
              : "Assigned to your team"}
          </small>
        </div>
        <Check size={18} />
      </div>
    </div>
  );
}
