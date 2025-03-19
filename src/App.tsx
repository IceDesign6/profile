import { BrowserRouter } from "react-router";

import Header from "@components/common/Header";
import { RouterWrapper } from "./router";
import useLocalizeDocumentAttributes from "@plugins/i18n/useLocalizeDocumentAttributes";

const App = () => {
  useLocalizeDocumentAttributes();

  return (
    <BrowserRouter>
      <Header />
      <RouterWrapper />
    </BrowserRouter>
  );
};

export default App;
