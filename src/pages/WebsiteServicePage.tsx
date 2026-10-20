import { WebsiteFilm } from "../components/WebsiteFilm";
import { ServiceProcess } from "../components/ServiceProcess";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Pause,
  Play,
  Smartphone,
  Monitor,
  MousePointer2,
} from "lucide-react";
import "../styles/website-service.css";

const formats = [
  {
    name: "Business website",
    headline: "Your business. Beautifully presented.",
    text: "Show your services, build trust and make it easy to get in touch.",
    tags: ["Your services", "Your story", "Enquiries"],
  },
  {
    name: "Landing page",
    headline: "One offer. One clear next step.",
    text: "A focused destination for your ads, launches or special offers.",
    tags: ["One clear offer", "Campaign enquiries", "Simple contact form"],
  },
  {
    name: "Mobile app",
    headline: "Your service, a tap away.",
    text: "Help customers browse, book or manage a task from their phone.",
    tags: ["Designed for your users", "Useful features", "Simple navigation"],
  },
];
const journey = ["Find a property", "Explore the details", "Request a viewing"];
const questions = [
  [
    "How much will my website or app cost?",
    "We quote after understanding the pages, features and content you need. You’ll receive an agreed scope before work starts; hosting, domains and ongoing support are discussed separately.",
  ],
  [
    "How long does it take?",
    "That depends on the size of the project, the features and how ready your content is. We agree milestones and a realistic launch date with you before starting.",
  ],
  [
    "What do I need to provide?",
    "Your business details, goals and any branding, photos or content you already have. We’ll identify any missing pieces together.",
  ],
  [
    "Can you improve my current website?",
    "Yes. We first review its platform and condition, then recommend improvements or a rebuild based on what you need.",
  ],
  [
    "Will it work on phones, and can you help after launch?",
    "Websites are designed for mobile and desktop. Maintenance, updates, ownership, handover and support are agreed as part of your project scope.",
  ],
];

export function WebsiteServicePage() {
  const [format, setFormat] = useState(0);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(
    () => !matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [requested, setRequested] = useState(false);
  useEffect(() => {
    const pref = matchMedia("(prefers-reduced-motion: reduce)");
    const stop = () => {
      if (pref.matches) setPlaying(false);
    };
    pref.addEventListener("change", stop);
    return () => pref.removeEventListener("change", stop);
  }, []);
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      if (!document.hidden) setStep((s) => (s + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, [playing]);
  function selectFormat(i: number) {
    setFormat(i);
    setRequested(false);
  }
  return (
    <div className="website-service">
      <section className="ws-intro ws-wrap">
        <Link className="ws-back" to="/services">
          <ArrowLeft size={16} /> All services
        </Link>
        <div className="ws-intro-line">
          <span className="ws-label">WEBSITES & APPS</span>
          <span className="ws-label">DESIGNED AROUND YOUR BUSINESS</span>
        </div>
        <div className="ws-intro-grid">
          <h1>
            Websites & apps.
            <br />
            <em>Made for your customers.</em>
          </h1>
          <div>
            <p>
              Websites, landing pages and apps.
              <br />
              Built to turn “just looking” into “let’s talk”.
            </p>
            <Link className="button" to="/contact?service=websites">
              Discuss your project <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <div className="ws-wrap">
        <WebsiteFilm />
      </div>{" "}
      <section
        className="ws-showroom ws-wrap"
        aria-label="Explore what we build"
      >
        <div
          className="ws-format-tabs"
          role="tablist"
          aria-label="Choose a project type"
        >
          {formats.map((f, i) => (
            <button
              key={f.name}
              id={`format-${i}`}
              role="tab"
              aria-selected={format === i}
              aria-controls="format-preview"
              tabIndex={format === i ? 0 : -1}
              onKeyDown={(event) => {
                if (
                  !["ArrowLeft", "ArrowRight", "Home", "End"].includes(
                    event.key,
                  )
                )
                  return;
                event.preventDefault();
                const next =
                  event.key === "Home"
                    ? 0
                    : event.key === "End"
                      ? 2
                      : (i + (event.key === "ArrowRight" ? 1 : 2)) % 3;
                selectFormat(next);
                document.getElementById(`format-${next}`)?.focus();
              }}
              onClick={() => selectFormat(i)}
            >
              {i === 2 ? (
                <Smartphone size={18} />
              ) : i === 0 ? (
                <Monitor size={18} />
              ) : (
                <MousePointer2 size={18} />
              )}{" "}
              {f.name}
              <ArrowUpRight size={16} />
            </button>
          ))}
        </div>
        <div
          className={`ws-stage ws-format-${format}`}
          role="tabpanel"
          id="format-preview"
          aria-labelledby={`format-${format}`}
        >
          <div className="ws-stage-note">
            <span>NORTH / PROPERTY STUDIO</span>
            <span>INTERACTIVE DESIGN CONCEPT</span>
          </div>
          <div className="ws-browser" key={format}>
            <div className="ws-browser-bar">
              <span>● ● ●</span>
              <span>
                {format === 2 ? "NORTH / Your viewings" : "north.example"}
              </span>
              <span>↗</span>
            </div>
            <div className="ws-example-nav">
              <strong>
                NORTH<span>®</span>
              </strong>
              <span>
                {format === 2
                  ? "Your next home."
                  : "Independent homes. Personal service."}
              </span>
            </div>
            <div className="ws-example-hero">
              <img
                src="/images/editorial/home.jpg"
                alt="Contemporary home shown in a property business website concept"
              />
              <div className="ws-example-copy">
                <span>
                  {format === 1
                    ? "PRIVATE VIEWINGS / BY APPOINTMENT"
                    : "A DIFFERENT WAY TO FIND HOME"}
                </span>
                <h2>
                  {format === 0 ? (
                    <>
                      Find your
                      <br />
                      somewhere.
                    </>
                  ) : format === 1 ? (
                    <>
                      Come see
                      <br />
                      what’s possible.
                    </>
                  ) : (
                    <>
                      A home
                      <br />
                      worth a visit.
                    </>
                  )}
                </h2>
                <button onClick={() => setRequested(true)}>
                  {requested
                    ? "Viewing request previewed"
                    : format === 0
                      ? "Enquire about this home"
                      : format === 1
                        ? "Request a private viewing"
                        : "Book a viewing"}{" "}
                  {requested ? <Check size={17} /> : <ArrowRight size={17} />}
                </button>
              </div>
            </div>
            <div className="ws-example-bottom" aria-live="polite">
              {requested ? (
                <>
                  <Check size={18} /> Demo only — no enquiry was sent.
                </>
              ) : (
                <>
                  <span>
                    {format === 2
                      ? "Garden residence"
                      : "Places with character."}
                  </span>
                  <span>
                    {format === 2
                      ? "Viewings, made simple."
                      : "People who understand."}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="ws-format-description">
          <div>
            <h2>{formats[format].headline}</h2>
            <p>{formats[format].text}</p>
          </div>
          <div className="ws-tags">
            {formats[format].tags.map((t) => (
              <span key={t}>
                <Check size={15} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="ws-journey">
        <div className="ws-wrap">
          <div className="ws-section-heading">
            <div>
              <span className="ws-label">
                MAKE IT EASY TO BECOME A CUSTOMER
              </span>
              <h2>
                From a first look
                <br />
                to a real conversation.
              </h2>
            </div>
            <p>
              A property agent’s website, for example.
              <br />
              Three steps. One clear destination.
            </p>
          </div>
          <div className="ws-journey-grid">
            <div className="ws-journey-controls">
              {journey.map((s, i) => (
                <button
                  key={s}
                  aria-pressed={step === i}
                  onClick={() => {
                    setStep(i);
                    setPlaying(false);
                  }}
                >
                  <span>0{i + 1}</span>
                  <strong>{s}</strong>
                  <ArrowRight size={20} />
                </button>
              ))}
              <button className="ws-play" onClick={() => setPlaying(!playing)}>
                {playing ? <Pause size={16} /> : <Play size={16} />}{" "}
                {playing ? "Pause walkthrough" : "Play walkthrough"}
              </button>
            </div>
            <div
              className="ws-journey-demo"
              aria-live={playing ? "off" : "polite"}
            >
              <div className="ws-mini-heading">
                NORTH<span>EXAMPLE CUSTOMER JOURNEY</span>
              </div>
              <div className="ws-journey-scene" key={step}>
                {step === 0 ? (
                  <>
                    <div className="ws-search">
                      Find your next home <span>⌕</span>
                    </div>
                    <img
                      src="/images/editorial/home.jpg"
                      alt="A home in a property listing"
                    />
                    <div className="ws-listing-caption">
                      <strong>Garden residence</strong>
                      <span>Explore this home ↗</span>
                    </div>
                  </>
                ) : step === 1 ? (
                  <>
                    <img
                      src="/images/editorial/home.jpg"
                      alt="Property detail preview"
                    />
                    <div className="ws-listing-caption">
                      <strong>A little more room to live.</strong>
                      <span>Photos · Location · Property details</span>
                    </div>
                    <div className="ws-demo-action">
                      Request a viewing <ArrowRight size={16} />
                    </div>
                  </>
                ) : (
                  <div className="ws-enquiry-preview">
                    <span className="ws-check-circle">
                      <Check size={28} />
                    </span>
                    <h3>“I’d love to see this home.”</h3>
                    <p>A clear enquiry, ready for your team to follow up.</p>
                    <span>Customer details → Your inbox</span>
                    <small>Illustrative enquiry, not a live submission.</small>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="ws-wrap">
        <ServiceProcess id="websites" />
      </div>
      <section className="ws-faq ws-wrap">
        <div>
          <span className="ws-label">BEFORE WE START</span>
          <h2>
            A few things
            <br />
            you might ask.
          </h2>
        </div>
        <div>
          {questions.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <span>+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="ws-closing ws-wrap">
        <h2>
          Let’s build your
          <br />
          <em>next first impression.</em>
        </h2>
        <Link className="button" to="/contact?service=websites">
          Tell us what you have in mind <ArrowUpRight size={19} />
        </Link>
        <Link className="ws-back" to="/services">
          Explore other services <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
