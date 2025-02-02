import { BrowserRouter, Routes, Route } from "react-router";

import Header from "@components/common/Header";
import Homepage from "@pages/Homepage";
import WorkExperience from "@pages/WorkExperience";

import useLocalizeDocumentAttributes from "@plugins/i18n/useLocalizeDocumentAttributes";

export default () => {
  useLocalizeDocumentAttributes();

  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/work-experience" element={<WorkExperience />} />
      </Routes>
    </BrowserRouter>
  );
};
