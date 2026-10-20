import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./styles/components.css";
import "./styles/pages.css";
import "./styles/responsive.css";
import "./styles/growth.css";
import "./styles/journey.css";
import "./styles/feature-cards.css";
import "./styles/service-demos.css";
import "./styles/client-experience.css";
import "./styles/process-experience.css";
import "./styles/service-detail.css";
import "./styles/service-showcase.css";
import "./styles/service-editorial.css";
import "./styles/service-cinema.css";
import "./styles/site-polish.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
import "./styles/hero-film.css";
import "./styles/green-highlights.css";
