import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";
import { projects, type ServiceId } from "../data/site";
import { ButtonLink, ContactBanner, PageHeading } from "../components/UI";
import { ServiceVisual } from "../components/ServiceVisual";
import { DemoDialog } from "../components/DemoDialog";
import { NotFoundPage } from "./SupportingPages";
export function WorkPage() {
  return (
    <>
      <PageHeading
        eyebrow="Selected concepts"
        title="Good work.\nYou can see it."
        description="Fictional brands. Real design thinking. A glimpse of what we could make together."
      />
      <section className="container work-grid">
        {projects.map((p) => (
          <Link key={p.id} to={`/work/${p.id}`}>
            <div className="project-image">
              <img src={p.image} alt={p.title + " concept"} loading="lazy" />
              <span className="round-arrow">
                <ArrowUpRight />
              </span>
            </div>
            <div className="project-caption">
              <div>
                <span className="eyebrow">{p.category}</span>
                <h2>{p.title}</h2>
                <p>{p.subtitle}</p>
              </div>
              <span className="badge">Concept</span>
            </div>
          </Link>
        ))}
      </section>
      <ContactBanner />
    </>
  );
}
export function ProjectPage() {
  const { slug } = useParams();
  const p = projects.find((x) => x.id === slug);
  const [demo, setDemo] = useState<ServiceId | null>(null);
  if (!p) return <NotFoundPage />;
  return (
    <>
      <PageHeading
        eyebrow={"Concept / " + p.category}
        title={p.title}
        description={p.subtitle}
      />
      <section className="container project-detail">
        <ServiceVisual type={p.service} step={1} />
        <p className="fine-print">
          Demonstration project. No client results claimed.
        </p>
        <div className="project-story">
          <div>
            <span className="eyebrow">The challenge</span>
            <h2>{p.problem}</h2>
          </div>
          <div>
            <span className="eyebrow">Our approach</span>
            <h2>{p.solution}</h2>
            <button className="button dark" onClick={() => setDemo(p.service)}>
              Explore the demo
              <Play size={16} />
            </button>
          </div>
        </div>
        <ButtonLink to={`/contact?service=${p.service}`}>
          Discuss something like this
        </ButtonLink>
      </section>
      <ContactBanner />
      <DemoDialog serviceId={demo} onClose={() => setDemo(null)} />
    </>
  );
}
