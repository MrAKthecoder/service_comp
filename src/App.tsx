import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ServicePage } from "./pages/ServicePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ProcessExperience } from "./pages/ProcessExperience";
import { WorkPage, ProjectPage } from "./pages/WorkPage";
import { ContactPage } from "./pages/ContactPage";
import { AuditPage, StudioPage } from "./pages/BusinessPages";
import { InfoPage, NotFoundPage, PackagesPage } from "./pages/SupportingPages";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServicePage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="work/:slug" element={<ProjectPage />} />
          <Route path="process" element={<ProcessExperience />} />
          <Route path="packages" element={<PackagesPage />} />
          <Route path="about" element={<StudioPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="audit" element={<AuditPage />} />
          <Route path="insights" element={<InfoPage type="insights" />} />
          <Route path="blog" element={<section className="blog-placeholder"><span className="eyebrow">THE JOURNAL</span><h1>Blog</h1><p>New perspectives. Coming soon.</p></section>} />
          <Route path="privacy" element={<InfoPage type="privacy" />} />
          <Route path="terms" element={<InfoPage type="terms" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
