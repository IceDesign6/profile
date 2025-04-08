import { BrowserRouter } from "react-router";

import Header from "@/components/Common/Header";
import { Router } from "./router";
import useLocalizeDocumentAttributes from "@plugins/i18n/useLocalizeDocumentAttributes";

const App = () => {
  useLocalizeDocumentAttributes();

  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
};

export default App;
