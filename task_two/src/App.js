import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppDevelopment from "./Components/AppDevelopment";
import SEO from "./Components/SEO";
import Services from "./Components/Services";
import WebDevelopment from "./Components/WebDevelopment";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/demo" element={<AppDevelopment />}>
            <Route path="Webdevelopment" element={<WebDevelopment />} />
            <Route path="seo" element={<SEO />} />
            {/* <Route path="services" element={<Services />} /> */}
            <Route index element={<Services />} />
            {/*we can declare Deflult Child using index*/}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
