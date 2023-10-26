import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppDevelopment from "./Components/AppDevelopment";
import SEO from "./Components/SEO";
import Services from "./Components/Services";
import WebDevelopment from "./Components/WebDevelopment";
import Breadcrumbs from "./Components/Breadcrumbs";

function App() {
  return (
    <>
      <Router>
      <Breadcrumbs/>
        <Routes>
          <Route path="/" element={<AppDevelopment />}>
            <Route path="Webdevelopment" element={<WebDevelopment />} />
            <Route path="seo" element={<SEO />} />
            <Route path="services" element={<Services />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
