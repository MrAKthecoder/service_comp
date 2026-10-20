import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export function ButtonLink({
  to,
  children,
  variant = "",
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: string;
  className?: string;
}) {
  return (
    <Link className={`button ${variant} ${className}`} to={to}>
      <span>{children}</span>
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
export function FAQ({ items }: { items: [string, string][] }) {
  return (
    <div className="faq-list">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
export function ContactBanner() {
  return (
    <section className="contact-banner">
      <div>
        <span className="eyebrow">Your next chapter</span>
        <h2>
          Let’s work on
          <br />
          your next step.
        </h2>
      </div>
      <ButtonLink to="/contact">Let’s talk</ButtonLink>
      <span className="banner-word" aria-hidden="true">
        forma
      </span>
    </section>
  );
}
export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="page-heading container">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title.replaceAll("\\n", "\n")}</h1>
      {description && <p>{description}</p>}
    </section>
  );
}
