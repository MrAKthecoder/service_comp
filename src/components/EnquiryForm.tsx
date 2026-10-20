import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { offerings as services } from "../data/offerings";
export function EnquiryForm({ audit = false }: { audit?: boolean }) {
  const [params] = useSearchParams();
  const callback = params.get("mode") === "callback";
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      className="enquiry-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      onChange={() => setSubmitted(false)}
    >
      <div className="form-grid">
        <label>
          Your name *
          <input
            name="name"
            autoComplete="name"
            placeholder="Alex Morgan"
            required
          />
        </label>
        <label>
          {callback ? "Email address (optional)" : "Email address *"}
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@company.com"
            required={!callback}
          />
        </label>
        {callback && (
          <label className="full">
            Phone number *
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Include your country code"
              required
            />
          </label>
        )}
        {audit && (
          <>
            <label>
              Business name *
              <input
                name="business"
                autoComplete="organization"
                placeholder="Your business"
                required
              />
            </label>
            <label>
              Website or social profile
              <input name="website" placeholder="https:// or @yourbusiness" />
            </label>
          </>
        )}
        <label className="full">
          What can we help with?
          <select name="service" defaultValue={params.get("service") || ""}>
            <option value="">Help me decide</option>
            {services.map((s) => (
              <option value={s.id} key={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <label className="full">
          {audit
            ? "Your main goal *"
            : callback
              ? "Anything you’d like us to know? (optional)"
              : "A little about your project *"}
          <textarea
            name="message"
            placeholder="What would you like to improve?"
            required={!callback}
          />
        </label>
        {audit && (
          <>
            <label>
              Phone / WhatsApp (optional)
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Include country code"
              />
            </label>
          </>
        )}
      </div>
      <button className="button dark" type="submit">
        {audit
          ? "Preview audit request"
          : callback
            ? "Preview callback request"
            : "Preview enquiry"}
        <ArrowUpRight size={18} />
      </button>
      <p className="fine-print">
        Frontend preview: nothing is sent or stored.{" "}
        <Link to="/privacy">Privacy details</Link>
      </p>
      <div role="status" aria-live="polite">
        {submitted && (
          <div className="form-success">
            <CheckCircle2 />
            <div>
              <strong>Your details are ready.</strong>
              <p>
                This is a demo confirmation. No request was sent. Once
                connected, this step will confirm receipt and explain what
                happens next.
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
