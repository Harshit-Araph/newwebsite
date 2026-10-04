import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import DigitalMarketing from "./pages/DigitalMarketing";
import LocalSEO from "./pages/LocalSEO";
import Healthcare from "./pages/Healthcare";
import BrandingContent from "./pages/BrandingContent";
import Automation from "./pages/Automation";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/local-seo" element={<LocalSEO />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/services/branding-content" element={<BrandingContent />} />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
