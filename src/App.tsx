import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
const ServicePage = lazy(() => import("./pages/ServicePage").then(m => ({ default: m.ServicePage })));
const ServicesPage = lazy(() => import("./pages/ServicesPage").then(m => ({ default: m.ServicesPage })));
const ProcessExperience = lazy(() => import("./pages/ProcessExperience").then(m => ({ default: m.ProcessExperience })));
const WorkPage = lazy(() => import("./pages/WorkPage").then(m => ({ default: m.WorkPage })));
const ProjectPage = lazy(() => import("./pages/WorkPage").then(m => ({ default: m.ProjectPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })));
const AuditPage = lazy(() => import("./pages/BusinessPages").then(m => ({ default: m.AuditPage })));
const StudioPage = lazy(() => import("./pages/BusinessPages").then(m => ({ default: m.StudioPage })));
const InfoPage = lazy(() => import("./pages/SupportingPages").then(m => ({ default: m.InfoPage })));
const NotFoundPage = lazy(() => import("./pages/SupportingPages").then(m => ({ default: m.NotFoundPage })));
const PackagesPage = lazy(() => import("./pages/SupportingPages").then(m => ({ default: m.PackagesPage })));
const AdminPage = lazy(() => import("./pages/AdminPage"));
export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div role="status" style={{padding:"160px 6%", minHeight:"60vh"}}>Loading page...</div>}>
      <Routes>
        <Route path="admin/*" element={<AdminPage />} />
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
      </Suspense>
    </BrowserRouter>
  );
}
