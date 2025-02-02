import { BrowserRouter, Routes, Route } from "react-router";

import Header from "@components/common/Header";
import Biography from "@/pages/Biography";
import WorkExperiences from "@/pages/WorkExperiences";
import Portfolios from "@/pages/Portfolios";
import Contact from "@/pages/Contact";

import useLocalizeDocumentAttributes from "@plugins/i18n/useLocalizeDocumentAttributes";

export default () => {
  useLocalizeDocumentAttributes();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Biography />} />
        <Route path="/work-experience" element={<WorkExperiences />} />
        <Route path="/portfolios" element={<Portfolios />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
