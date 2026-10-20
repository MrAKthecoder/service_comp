import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services, type ServiceId } from "../data/site";
import { ServiceVisual } from "./ServiceVisual";

const order: ServiceId[] = [
  "websites",
  "content",
  "seo",
  "social",
  "ads",
  "automation",
];
export function ServiceGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`bento-grid ${compact ? "standard-grid" : ""}`}>
      {order.map((id) => {
        const service = services.find((s) => s.id === id)!;
        return (
          <Link
            className={`service-tile tile-${id}`}
            to={`/services/${id}`}
            key={id}
          >
            <ServiceVisual type={id} step={id === "automation" ? 1 : 0} />
            <div className="tile-caption">
              <div>
                <span className="eyebrow">{service.label}</span>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
              </div>
              <span className="round-arrow">
                <ArrowUpRight size={20} />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
