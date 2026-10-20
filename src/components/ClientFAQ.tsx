import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Plus } from "lucide-react";

const groups = [
  {
    title: "Choosing a service",
    items: [
      [
        "I need more customers. Which service should I choose?",
        "It depends on where customers lose track of you. Hard to find online? Start with Google visibility. No clear place to browse or enquire? Consider a website. Need to reach more people? Discuss social media or ads with us.",
      ],
      [
        "Can you build my website and manage my social media together?",
        "Yes. We can plan both together so your website, posts and enquiry journey feel consistent. You can also start with just one service.",
      ],
      [
        "I already have a website. Do I need to start again?",
        "Not necessarily. Share your link and tell us what isn’t working. We’ll review what can be improved before discussing a rebuild.",
      ],
      [
        "I don’t know what I need yet. Can you help?",
        "Start with a conversation or a free audit. Share your business details and any website or social links. We’ll discuss the gaps and help you choose a practical first step.",
      ],
    ],
  },
  {
    title: "Cost & timing",
    items: [
      [
        "How do I get a price for my project?",
        "Tell us what you need and your budget range. We’ll define the work and provide a proposal covering deliverables, fees and payment stages before you decide.",
      ],
      [
        "Are ad budgets, hosting and paid tools included?",
        "These depend on the service. Your proposal will separate our work from costs such as Google or Meta ad spend, hosting, domains and paid tools, so you can see the total commitment.",
      ],
      [
        "When can my website or campaign go live?",
        "We’ll agree a schedule once we know the scope and what materials are available. Content, account access and your feedback all affect the launch date.",
      ],
      [
        "Can I book a one-off project instead of monthly support?",
        "Yes, we can discuss a focused project or ongoing support. The scope, duration and any cancellation terms are set out in the proposal.",
      ],
    ],
  },
  {
    title: "Working with us",
    items: [
      [
        "What do I need to send you to get started?",
        "Your business details, goals and existing links are enough for the first conversation. After that, we’ll list the photos, branding, content and account access needed for your chosen service.",
      ],
      [
        "Can you help if I don’t have photos or written content?",
        "Yes, we can discuss content creation as part of the work. We’ll agree what you can supply, what we’ll create and any additional costs before starting.",
      ],
      [
        "Will I see the designs and content before they go live?",
        "Yes. We agree review points so you can check previews and give feedback. The proposal explains the revision rounds and approvals included.",
      ],
      [
        "What happens after launch—and how do we measure progress?",
        "We agree handover and any ongoing support in advance. For marketing, we choose useful measures such as enquiries or campaign performance. Results vary; we don’t promise a fixed number of sales or a top Google ranking.",
      ],
    ],
  },
];

export function ClientFAQ() {
  const [active, setActive] = useState(0);
  return (
    <section
      className="client-faq faq-compact"
      aria-labelledby="client-faq-title"
    >
      <header className="client-faq-intro">
        <span className="eyebrow">BEFORE YOU GET STARTED</span>
        <h2 id="client-faq-title">A little clarity goes a long way.</h2>
        <p>Choosing the right help should feel simple.</p>
      </header>
      <div className="faq-categories" aria-label="Question categories">
        {groups.map((group, i) => (
          <button
            key={group.title}
            type="button"
            aria-pressed={active === i}
            aria-controls="faq-answers"
            onClick={() => setActive(i)}
          >
            {group.title}
            <span>04</span>
          </button>
        ))}
      </div>
      <div
        id="faq-answers"
        className="client-faq-group"
        key={active}
        aria-label={groups[active].title}
      >
        {groups[active].items.map(([question, answer]) => (
          <details key={question}>
            <summary>
              {question}
              <span className="faq-toggle">
                <Plus size={18} />
              </span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
      <div className="faq-contact">
        <p>Have a question about your business?</p>
        <Link to="/contact">
          Let’s talk <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
