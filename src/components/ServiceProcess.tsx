import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  MessageCircle,
  SlidersHorizontal,
  Layers,
  Flag,
} from "lucide-react";
import { offerings } from "../data/offerings";
import { serviceDetails } from "../data/serviceDetails";
import { serviceProcess } from "../data/serviceProcess";
import "../styles/service-process.css";

export function ServiceProcess({ id }: { id: string }) {
  const [active, setActive] = useState(0);
  const service = offerings.find((item) => item.id === id)!;
  const detail = serviceDetails[id];
  const process = serviceProcess[id];
  const steps = [
    {
      label: "Tell us what you need",
      who: "YOU + US",
      icon: MessageCircle,
      copy: `Use the contact form and tell us about your ${service.scope.toLowerCase()} needs. We’ll discuss the right starting point.`,
      output: "A conversation about your goals.",
    },
    {
      label: "Agree a clear plan",
      who: "WE PLAN TOGETHER",
      icon: SlidersHorizontal,
      copy: process.discuss,
      output: "Agreed scope, cost and next steps.",
    },
    {
      label: "See the work take shape",
      who: "WE CREATE · YOU REVIEW",
      icon: Layers,
      copy: process.create,
      output: "Your feedback shapes the agreed work.",
    },
    {
      label: "Put it into action",
      who: "REVIEW + HANDOVER",
      icon: Flag,
      copy: process.deliver,
      output: process.result,
    },
  ];
  const CurrentIcon = steps[active].icon;
  return (
    <section
      className="service-process"
      aria-label={`${service.name}: from enquiry to delivery`}
    >
      <div className="sp-heading">
        <div>
          <span className="sp-eyebrow">HOW WE MOVE FORWARD</span>
          <h2>
            From “I need help”
            <br />
            to a clear next step.
          </h2>
        </div>
        <Link className="sp-start" to={`/contact?service=${id}`}>
          Let’s discuss {service.scope.toLowerCase()} <ArrowRight size={18} />
        </Link>
      </div>
      <div className="sp-path" aria-label="Project stages">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <button
              key={step.label}
              className={active === i ? "is-current" : ""}
              aria-pressed={active === i}
              aria-controls={`process-panel-${id}`}
              onClick={() => setActive(i)}
            >
              <span className="sp-node">
                <Icon size={23} />
              </span>
              <span className="sp-step-number">0{i + 1}</span>
              <strong>{step.label}</strong>
              <span className="sp-owner">{step.who}</span>
            </button>
          );
        })}
      </div>
      <div className="sp-panel" id={`process-panel-${id}`} aria-live="polite">
        <div className="sp-panel-story" key={active}>
          <span className="sp-eyebrow">
            STEP 0{active + 1} / {service.scope}
          </span>
          <div className="sp-panel-title">
            <CurrentIcon size={30} />
            <h3>{steps[active].label}</h3>
          </div>
          <p>{steps[active].copy}</p>
          <div className="sp-outcome">
            <Check size={18} />
            {steps[active].output}
          </div>
          {active === 0 && (
            <Link className="button" to={`/contact?service=${id}`}>
              Start with an enquiry <ArrowRight size={17} />
            </Link>
          )}
          {active < 3 && (
            <button className="sp-next" onClick={() => setActive(active + 1)}>
              See the next step <ArrowRight size={16} />
            </button>
          )}
        </div>
        <aside>
          <span className="sp-eyebrow">USEFUL TO BRING</span>
          <h3>Start with what you have.</h3>
          {detail.needs.map((item) => (
            <span className="sp-needed" key={item}>
              <Check size={16} />
              {item}
            </span>
          ))}
          <p>Missing something? We’ll work it out together.</p>
        </aside>
      </div>
      <div className="sp-offer">
        <div>
          <span className="sp-eyebrow">WHAT WE CAN PROVIDE</span>
          <h3>Your {service.scope.toLowerCase()} toolkit.</h3>
          <p>
            Choose the support you need. Exact deliverables are agreed in your
            proposal.
          </p>
        </div>
        <div className="sp-deliverables">
          {detail.includes.map(([title, copy], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <h4>{title}</h4>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
