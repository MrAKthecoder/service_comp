import { useParams } from "react-router-dom";
import { offerings } from "../data/offerings";
import { NotFoundPage } from "./SupportingPages";
import { ServiceContent } from "../components/ServiceContent";
import { WebsiteServicePage } from "./WebsiteServicePage";

export function ServicePage() {
  const { slug } = useParams();
  const service = offerings.find((item) => item.id === slug);
  if (!service) return <NotFoundPage />;
  if (service.id === "websites") return <WebsiteServicePage />;
  return <ServiceContent key={service.id} id={service.id} />;
}
