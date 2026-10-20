import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { GrowthServices } from "../components/GrowthServices";
import { useState } from "react";

const goals = [
  { label: "All services", ids: undefined },
  { label: "Build my online presence", ids: ["websites", "seo", "reputation"] },
  { label: "Reach more customers", ids: ["social", "content", "ads"] },
  { label: "Organise & grow", ids: ["automation", "crm", "consulting"] },
];

export function ServicesPage() {
  const [goal, setGoal] = useState(0);
  return (
    <section className="services-directory service-selection">
      <div className="growth-heading">
        <span>OUR SERVICES</span>
        <h1>
          The right support.
          <br />
          For your next step.
        </h1>
        <p>Find what your business needs. We’ll take it from there.</p>
        <Link className="directory-help" to="/contact?mode=callback">
          Not sure? Talk to us <ArrowRight size={16} />
        </Link>
      </div>
      <div className="service-goals" aria-label="Choose your business goal">
        {goals.map((item, i) => (
          <button
            key={item.label}
            aria-pressed={goal === i}
            onClick={() => setGoal(i)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="service-result-count" role="status">
        {goal === 0
          ? "Explore all 9 services"
          : "3 services matched to your goal"}
      </p>
      <GrowthServices all ids={goals[goal].ids} />
    </section>
  );
}
