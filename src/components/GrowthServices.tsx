import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ServiceDemo } from "./ServiceDemo";
import { offerings } from "../data/offerings";

export function GrowthServices({
  all = false,
  ids,
}: {
  all?: boolean;
  ids?: readonly string[];
}) {
  const visible = ids
    ? offerings.filter((service) => ids.includes(service.id))
    : all
      ? offerings
      : offerings.slice(0, 6);
  return (
    <div className={`feature-grid ${all ? "feature-grid-all" : ""}`}>
      {visible.map((service, index) => (
        <Link
          className={`feature-card feature-${service.id}`}
          to={`/services/${service.id}`}
          key={service.id}
        >
          <div className="feature-card-top">
            <span>0{index + 1}</span>
            <span>{service.scope}</span>
          </div>
          <ServiceDemo id={service.id} />
          <div className="feature-card-copy">
            <h3>{service.name}</h3>
            <p>{service.summary}</p>
          </div>
          <span className="feature-card-action">
            Explore service <ArrowUpRight size={18} />
          </span>
        </Link>
      ))}
    </div>
  );
}
