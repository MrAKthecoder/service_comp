import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Phone, LayoutGrid, Check } from "lucide-react";

export function GettingStarted() {
  return (
    <section
      className="getting-started"
      id="how-it-works"
      aria-labelledby="getting-started-title"
    >
      <div className="growth-heading">
        <span>FROM YOUR FIRST CLICK TO A CLEAR PLAN</span>
        <h2 id="getting-started-title">
          Two ways to start.
          <br />
          One team to help.
        </h2>
        <p>Tell us what you need, or let’s work it out together.</p>
      </div>
      <div className="client-flow">
        <div className="flow-start">
          <span className="flow-dot" /> Your business starts here
        </div>
        <div className="flow-fork" aria-hidden="true" />
        <div className="flow-choices">
          <article className="flow-choice">
            <div className="flow-choice-top">
              <Phone size={23} />
              <span>01 / TALK TO US</span>
            </div>
            <h3>“I’d like some guidance.”</h3>
            <p>
              Leave your name and number. We’ll discuss your goals on a call.
            </p>
            <Link className="button" to="/contact?mode=callback">
              Request a call <ArrowRight size={17} />
            </Link>
            <div className="flow-mini-step">
              <ArrowDown size={15} />
              <span>We listen and help you choose.</span>
            </div>
          </article>
          <article className="flow-choice">
            <div className="flow-choice-top">
              <LayoutGrid size={23} />
              <span>01 / EXPLORE YOUR OPTIONS</span>
            </div>
            <h3>“I know what I need.”</h3>
            <p>
              Browse our services and choose the support your business needs.
            </p>
            <Link className="button outline" to="/services">
              Choose a service <ArrowRight size={17} />
            </Link>
            <div className="flow-mini-step">
              <ArrowDown size={15} />
              <span>Tell us about your chosen service.</span>
            </div>
          </article>
        </div>
        <div className="flow-merge" aria-hidden="true" />
        <ol className="flow-next">
          <li>
            <span>02</span>
            <div>
              <h3>Agree a plan</h3>
              <p>Clear work, price and next steps.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>We get to work</h3>
              <p>You review. We refine together.</p>
            </div>
          </li>
          <li>
            <span>
              <Check size={19} />
            </span>
            <div>
              <h3>Launch & move forward</h3>
              <p>See the work go live. Plan what’s next.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
