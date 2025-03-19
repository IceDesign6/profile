import { Routes, Route } from "react-router";

import Biography from "@/pages/Biography";
import WorkExperiences from "@/pages/WorkExperiences";
import Portfolios from "@/pages/Portfolios";
import Contact from "@/pages/Contact";

const routes = [
  { path: "/", element: <Biography /> },
  { path: "/work-experience", element: <WorkExperiences /> },
  { path: "/portfolios", element: <Portfolios /> },
  { path: "/contact", element: <Contact /> },
];

export const RouterWrapper = () => (
  <Routes>
    {
      routes.map(({ path, element }) => 
        <Route key={path} path={path} element={element}></Route>
      )
    }
  </Routes>
)
