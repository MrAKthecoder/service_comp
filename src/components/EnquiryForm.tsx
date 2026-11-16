import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { offerings as services } from "../data/offerings";
export function EnquiryForm({ audit = false }: { audit?: boolean }) {
  const [params] = useSearchParams();
  const callback = params.get("mode") === "callback";
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  return (
    <form
      className="enquiry-form"
      onSubmit={async (e) => {
        e.preventDefault();
        if (sending) return;
        const form = e.currentTarget;
        setSending(true); setError(""); setSubmitted(false);
        try {
          const response = await fetch("/api/enquiries", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({...Object.fromEntries(new FormData(form)), type: audit ? "audit" : callback ? "callback" : "enquiry"}), signal: AbortSignal.timeout(15000) });
          const result = await response.json();
          if (!response.ok) throw new Error(result.error || "Unable to send your request.");
          setSubmitted(true); form.reset();
        } catch (err) { setError(err instanceof Error && err.name !== "SyntaxError" ? err.message : "Unable to send your request. Please try again."); }
        finally { setSending(false); }
      }}
      onChange={() => setSubmitted(false)}
    >
      <input name="companyWebsite" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{display:"none"}} />
      <fieldset disabled={sending} style={{border:0,padding:0,margin:0,minWidth:0}}>
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
      <button className="button dark" type="submit" disabled={sending || submitted}>
        {sending ? "Sending…" : audit
          ? "Request free audit"
          : callback
            ? "Request callback"
            : "Send enquiry"}
        <ArrowUpRight size={18} />
      </button>
      </fieldset>
      {error && <p role="alert">{error}</p>}
      <p className="fine-print">
        We use your details to respond to your request.{" "}
        <Link to="/privacy">Privacy details</Link>
      </p>
      <div role="status" aria-live="polite">
        {submitted && (
          <div className="form-success">
            <CheckCircle2 />
            <div>
              <strong>Thanks — we’ve received your request.</strong>
              <p>
                Your details have been saved. We’ll get back to you using the contact details you provided.
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
