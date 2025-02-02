import ReactDOM from "react-dom/client";
import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router";

import Header from "@components/common/Header";
import Homepage from "@pages/Homepage";
import WorkExperience from "@pages/WorkExperience";

import en from "@locales/en.json";
import zh from "@locales/zh.json";

import "@assets/style.scss";

const root = document.getElementById("root");

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    zh: {
      translation: zh,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/work-experience" element={<WorkExperience />} />
    </Routes>
  </BrowserRouter>
);
