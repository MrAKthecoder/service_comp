import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function JournalPage() {
  return (
    <section className="journal-page">
      <header className="journal-intro">
        <div>
          <span className="eyebrow">THE FORMA JOURNAL</span>
          <h1>
            A little perspective.
            <br />
            <em>A useful next step.</em>
          </h1>
        </div>
        <p>
          Notes on websites, marketing and the everyday work of growing a
          business.
        </p>
      </header>
      <div className="journal-empty">
        <div className="journal-art" aria-hidden="true">
          <div className="journal-paper">
            <span>NOTES FROM FORMA</span>
            <strong>
              Good things
              <br />
              take shape.
            </strong>
            <i />
            <i />
            <i />
          </div>
        </div>
        <div>
          <span className="eyebrow">IN THE MAKING</span>
          <h2>Our first notes are on their way.</h2>
          <p>
            We’re putting together practical ideas for business owners. In the
            meantime, explore how we can help—or start with a fresh look at your
            online presence.
          </p>
          <div className="journal-links">
            <Link className="button" to="/services">
              Explore our services <ArrowUpRight size={17} />
            </Link>
            <Link to="/audit">Start with a free audit ↗</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
