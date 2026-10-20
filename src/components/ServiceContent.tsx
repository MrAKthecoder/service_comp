import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { offerings } from "../data/offerings";
import { serviceDetails } from "../data/serviceDetails";
import { ServiceProcess } from "./ServiceProcess";
import { ServiceStory } from "./ServiceStory";
export function ServiceContent({ id }: { id: string }) {
  const service = offerings.find((item) => item.id === id)!;
  const detail = serviceDetails[id];
  return (
    <div className={`service-detail service-cinema detail-${id}`}>
      <Link className="detail-back" to="/services">
        <ArrowLeft size={14} />
        All services
      </Link>
      <div className="service-opening">
        <header className="detail-heading">
          <span className="eyebrow">{service.name}</span>
          <h1>{service.title}</h1>
          <p>{detail.intro}</p>
          <Link className="button" to={`/contact?service=${id}`}>
            Let’s talk
            <ArrowRight size={17} />
          </Link>
        </header>
        <ServiceStory id={id} />
      </div>
      <ServiceProcess id={id} />
      <details className="detail-question">
        <summary>
          {detail.question}
          <span>+</span>
        </summary>
        <p>{detail.answer}</p>
      </details>
      <section className="detail-next">
        <div>
          <h2>
            Let’s make it work
            <br />
            for your business.
          </h2>
          <Link to="/process">
            See how we work together <ArrowRight size={16} />
          </Link>
        </div>
        <Link className="button" to={`/contact?service=${id}`}>
          Discuss this service <ArrowRight size={17} />
        </Link>
      </section>
      <div className="detail-related">
        <span>EXPLORE MORE</span>
        {offerings
          .filter((item) => item.id !== id)
          .slice(0, 3)
          .map((item) => (
            <Link key={item.id} to={`/services/${item.id}`}>
              {item.scope}
              <ArrowRight size={14} />
            </Link>
          ))}
      </div>
    </div>
  );
}
