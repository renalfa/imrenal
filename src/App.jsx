import React from "react";

import HeroSection from "./views/HeroSection";
import AboutSection from "./views/AboutSection";
import SkillSection from "./views/SkillSection";
import WorkSection from "./views/WorkSection";
import GallerySection from "./views/GallerySection";
import MeSection from "./views/MeSection";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <WorkSection />
      {/* <MeSection /> */}
      {/* <GallerySection /> */}
      <Footer />
    </div>
  );
};

export default App;
