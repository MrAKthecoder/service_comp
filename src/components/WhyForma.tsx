import { Check, Eye, MessageCircleMore, Route } from "lucide-react";

const reasons = [
  {
    Icon: Eye,
    number: "01",
    title: "A clearer online presence",
    copy: "We help people understand what you offer, trust your business and know what to do next.",
  },
  {
    Icon: MessageCircleMore,
    number: "02",
    title: "Real conversation, not confusion",
    copy: "You can ask questions, review the work and make decisions without needing to know technical language.",
  },
  {
    Icon: Route,
    number: "03",
    title: "A plan that fits your next step",
    copy: "Start with one need or bring us the bigger picture. We’ll help you choose a practical way forward.",
  },
];

export function WhyForma() {
  return (
    <section className="why-forma" aria-labelledby="why-forma-title">
      <header>
        <span className="eyebrow">WHY FORMA</span>
        <h2 id="why-forma-title">
          Less guesswork.
          <br />
          <em>More forward motion.</em>
        </h2>
        <p>
          Digital support should make your business feel easier to run, not
          harder to understand.
        </p>
      </header>
      <div className="why-forma-list">
        {reasons.map(({ Icon, number, title, copy }) => (
          <article key={number}>
            <div className="why-forma-mark">
              <Icon size={23} strokeWidth={1.5} />
              <span>{number}</span>
            </div>
            <h3>{title}</h3>
            <p>{copy}</p>
            <span className="why-forma-check">
              <Check size={15} /> Clear, practical support
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
