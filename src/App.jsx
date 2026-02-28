import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";
import Projects from "./page/Projects";
import Expertise from "./page/Expertise";
import ScrollToTop from "./components/ScrollToTop";
import Insights from "./page/Insights";

const AppContent = () => {
  const location = useLocation();
  const isInsightsPage = location.pathname === "/insights";

  return (
    <div className="min-h-screen bg-brand-black text-brand-white selection:bg-white selection:text-black">
      <ScrollToTop />
      {!isInsightsPage && <Header />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </main>

      {!isInsightsPage && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
