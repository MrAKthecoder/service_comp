import { Check, Mail, MessageCircle, CalendarDays } from "lucide-react";
import { PageHeading } from "../components/UI";
import { EnquiryForm } from "../components/EnquiryForm";
import { site } from "../data/site";
import { Link, useSearchParams } from "react-router-dom";
import { offerings } from "../data/offerings";
export function ContactPage({ audit = false }: { audit?: boolean }) {
  const [params] = useSearchParams();
  const callback = !audit && params.get("mode") === "callback";
  const selected = offerings.find(
    (service) => service.id === params.get("service"),
  );
  return (
    <>
      <PageHeading
        eyebrow={audit ? "Free growth audit" : "Start a conversation"}
        title={
          audit
            ? "A fresh perspective.\nThree clear priorities."
            : callback
              ? "Let’s talk about\nyour business."
              : "Good things start\nwith a hello."
        }
        description={
          audit
            ? "A look at your website, visibility and enquiry journey—with practical next steps."
            : callback
              ? "Leave your contact details and tell us what you’d like help with."
              : "Tell us what you’re building and where you’d like to go."
        }
      />
      <section className="container contact-layout">
        <div>
          {selected && (
            <div className="contact-service-context">
              <span className="eyebrow">LET’S DISCUSS</span>
              <h2>{selected.name}</h2>
              <p>{selected.summary}</p>
              <Link to="/services">Choose a different service ↗</Link>
            </div>
          )}
          {audit ? (
            <>
              <h2>
                Small review.
                <br />
                Useful direction.
              </h2>
              <ul className="check-list">
                <li>
                  <Check size={18} />
                  Your first impression
                </li>
                <li>
                  <Check size={18} />
                  How people find you
                </li>
                <li>
                  <Check size={18} />
                  What happens after an enquiry
                </li>
              </ul>
              <div className="audit-preview">
                <span className="eyebrow">Sample audit</span>
                <h3>
                  Make the next
                  <br />
                  step obvious.
                </h3>
                <p>
                  One clear enquiry button. A short explanation of what happens
                  next.
                </p>
                {["Website", "Visibility", "Follow-up"].map((x, i) => (
                  <div key={x}>
                    {x}
                    <span>Priority 0{i + 1}</span>
                  </div>
                ))}
              </div>
              <p className="fine-print">
                Illustrative preview. Delivery timing to be confirmed.
              </p>
            </>
          ) : (
            <>
              <h2>
                Your idea.
                <br />
                Our next conversation.
              </h2>
              <p>
                One service or the full picture.
                <br />
                Let’s figure it out together.
              </p>
              <div className="contact-methods">
                {site.email && (
                  <div>
                    <Mail size={20} />
                    <span>
                      Email<a href={`mailto:${site.email}`}>{site.email}</a>
                    </span>
                  </div>
                )}
                {site.whatsapp && (
                  <div>
                    <MessageCircle size={20} />
                    <span>
                      WhatsApp
                      <a href={`https://wa.me/${site.whatsapp}`}>
                        Start a conversation
                      </a>
                    </span>
                  </div>
                )}
                {site.bookingUrl && (
                  <div>
                    <CalendarDays size={20} />
                    <span>
                      Book a call<a href={site.bookingUrl}>Choose a time</a>
                    </span>
                  </div>
                )}
              </div>
              <p className="fine-print">
                You can make a general enquiry without requesting an audit.
              </p>
              <div className="contact-next-steps">
                <span className="eyebrow">WHAT HAPPENS NEXT</span>
                <ol>
                  <li>
                    <span>01</span>We discuss your business and goals.
                  </li>
                  <li>
                    <span>02</span>You get a proposed scope and price.
                  </li>
                  <li>
                    <span>03</span>We start after you agree the plan.
                  </li>
                </ol>
              </div>
            </>
          )}
        </div>
        <div>
          <div
            className="contact-preference"
            aria-label="Choose how to contact us"
          >
            <Link
              aria-current={!callback ? "page" : undefined}
              to={`/contact${selected ? `?service=${selected.id}` : ""}`}
            >
              Send an enquiry
            </Link>
            <Link
              aria-current={callback ? "page" : undefined}
              to={`/contact?mode=callback${selected ? `&service=${selected.id}` : ""}`}
            >
              Request a call
            </Link>
          </div>
          <EnquiryForm key={`${callback}-${selected?.id}`} audit={audit} />
        </div>
      </section>
    </>
  );
}
