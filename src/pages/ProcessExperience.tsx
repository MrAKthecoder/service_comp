import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { WebsiteFilm } from "../components/WebsiteFilm";
import { ProcessFilmArtwork } from "../components/ProcessFilmArtwork";
import "../styles/process-film.css";

const captions = [
  "You know your business. We help people discover it.",
  "Tell us what you need. Not sure? We’ll help you choose.",
  "Websites. Marketing. Content. Systems that save you time.",
  "Agree the work, price and timeline before we start.",
  "We create. You see previews. We refine together.",
  "You approve. We launch. Then plan what comes next.",
];

export function ProcessExperience() {
  return (
    <div className="process-experience process-film-page">
      <header className="process-intro">
        <span className="eyebrow">HOW WE WORK</span>
        <h1>
          From “where do I start?”
          <br />
          <em>to “let’s make it happen.”</em>
        </h1>
        <p>Your business, our team. Watch how it comes together.</p>
      </header>
      <WebsiteFilm
        title="YOUR BUSINESS. OUR TEAM."
        chapters={["Say hello", "Make a plan", "Create & launch"]}
        storyShots={captions.map((c) => [c, c])}
        artwork={(shot) => (
          <ProcessFilmArtwork shot={shot} description={captions[shot]} />
        )}
        note="An illustrated example. Services, deliverables and ongoing support are agreed with you."
      />
      <section className="pf-start" aria-label="Choose your next step">
        <div>
          <span className="eyebrow">START WHERE YOU ARE</span>
          <h2>One service or a bigger plan.</h2>
          <p>
            You don’t need a finished brief. Just tell us about your business.
          </p>
        </div>
        <div className="pf-actions">
          <Link className="button" to="/contact?mode=callback">
            Let’s talk <ArrowRight size={18} />
          </Link>
          <Link className="button button-outline" to="/services">
            Explore services <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <div className="pf-summary" aria-label="Our process at a glance">
        {[
          ["01", "Talk", "Your business. Your goals."],
          ["02", "Plan", "Clear scope, price and timing."],
          ["03", "Create", "Previews and your feedback."],
          ["04", "Launch", "Approval, handover and next steps."],
        ].map(([n, title, copy]) => (
          <div key={n}>
            <span>{n}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
