import { HeroFilm } from "../components/HeroFilm";
import { Link } from "react-router-dom";
import { ArrowRight, Search, MousePointer2, MessageCircle } from "lucide-react";
import { ClientFAQ } from "../components/ClientFAQ";
import { GrowthServices } from "../components/GrowthServices";

export function HomePage() {
  return (
    <div className="growth-home">
      <HeroFilm />
      <div className="growth-strip">
        <span>YOUR BUSINESS. OUR FOCUS.</span>
        <div>Social media</div>
        <div>Google & SEO</div>
        <div>Websites</div>
        <div>Content & reels</div>
        <div>Lead generation</div>
      </div>

      <section className="growth-services-section" id="services">
        <div className="growth-heading">
          <h2>
            What does your business
            <br />
            need next?
          </h2>
          <p>Choose the support your business needs.</p>
        </div>
        <GrowthServices />
        <div className="services-overview-action">
          <Link className="button outline" to="/services">
            See all services <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="home-audit-invite">
        <div>
          <span className="eyebrow">NOT SURE WHAT YOU NEED?</span>
          <h2>
            Start with a fresh
            <br />
            <em>pair of eyes.</em>
          </h2>
          <p>
            We review how customers find you, understand your offer and get in
            touch. You get clear next steps.
          </p>
          <Link className="button" to="/audit">
            Explore the free audit <ArrowRight size={18} />
          </Link>
        </div>
        <div
          className="audit-route"
          aria-label="We review how customers find you, explore your business and contact you"
        >
          {[
            [Search, "Find you", "Google & social"],
            [MousePointer2, "Explore", "Your website & content"],
            [MessageCircle, "Get in touch", "Enquiries & follow-ups"],
          ].map(([Icon, title, copy], i) => {
            const StepIcon = Icon as typeof Search;
            return (
              <div key={String(title)}>
                <span className="audit-route-icon">
                  <StepIcon size={25} strokeWidth={1.5} />
                </span>
                <div>
                  <h3>{String(title)}</h3>
                  <p>{String(copy)}</p>
                </div>
                <span className="audit-route-number">0{i + 1}</span>
              </div>
            );
          })}
          <span className="audit-route-end">
            One review. A clearer way forward. <ArrowRight size={17} />
          </span>
        </div>
      </section>
      <ClientFAQ />
      <section className="growth-final">
        <h2>
          Let’s grow
          <br />
          your business.
        </h2>
        <p>Tell us where you are. Let’s work on what comes next.</p>
        <div className="growth-actions">
          <Link className="button" to="/contact">
            Contact us
          </Link>
          <Link className="button glass" to="/services">
            Explore services
          </Link>
        </div>
      </section>
    </div>
  );
}
