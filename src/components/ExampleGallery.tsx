import { Play, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { media, type ServiceId } from "../data/site";
const examples: {
  title: string;
  category: string;
  image: string;
  service: ServiceId;
}[] = [
  {
    title: "The everyday, elevated.",
    category: "Café & hospitality",
    image: media.coffee,
    service: "content",
  },
  {
    title: "Craft with a story.",
    category: "Independent makers",
    image: media.craft,
    service: "content",
  },
  {
    title: "A fresh perspective.",
    category: "Product campaign",
    image: media.campaign,
    service: "ads",
  },
  {
    title: "A home for good design.",
    category: "Architecture & interiors",
    image: media.architecture,
    service: "websites",
  },
  {
    title: "Your business, connected.",
    category: "Local businesses",
    image: media.hero,
    service: "automation",
  },
];
export function ExampleGallery({
  onPreview,
}: {
  onPreview: (id: ServiceId) => void;
}) {
  const track = useRef<HTMLDivElement>(null);
  return (
    <section className="examples-section">
      <div className="container gallery-heading">
        <div>
          <span className="eyebrow">A glimpse of what’s possible</span>
          <h2>See what we can create.</h2>
          <p>Concept previews. Your story comes next.</p>
        </div>
        <div className="gallery-controls">
          <button
            className="icon-button"
            aria-label="Previous examples"
            onClick={() =>
              track.current?.scrollBy({ left: -330, behavior: "smooth" })
            }
          >
            <ArrowLeft size={19} />
          </button>
          <button
            className="icon-button"
            aria-label="Next examples"
            onClick={() =>
              track.current?.scrollBy({ left: 330, behavior: "smooth" })
            }
          >
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
      <div className="example-track" ref={track}>
        {examples.map((e) => (
          <button
            className="example-card"
            key={e.title}
            onClick={() => onPreview(e.service)}
            aria-label={`Preview ${e.title}`}
          >
            <img src={e.image} alt={e.category + " concept"} loading="lazy" />
            <span className="example-category">{e.category}</span>
            <span className="example-play">
              <Play size={18} fill="currentColor" />
            </span>
            <span className="example-bottom">
              <strong>{e.title}</strong>
              <small>CONCEPT PREVIEW</small>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
