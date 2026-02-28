import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";
import Projects from "./page/Projects";
import Expertise from "./page/Expertise";
import ScrollToTop from "./components/ScrollToTop";
import Insights from "./page/Insights";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-black text-brand-white selection:bg-white selection:text-black">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/insights" element={<Insights />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
