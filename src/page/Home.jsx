import React from "react";
import Hero from "../components/Hero";
import VisionSection from "../components/VisionSection";
import FeaturesSection from "../components/FeaturesSection";
import HorizontalScrollSection from "../components/HorizontalHeroSection";
import UnlockPotentialSection from "../components/UnlockPotentialSection";
import HoldingBackSection from "../components/HoldingBackSection";
import SelectedWorkVertical from "../components/SelectedWorkVertical";
import FAQSection from "../components/FAQSection";

const Home = () => {
	return (
		<>
			<Hero />
			<VisionSection />
			<FeaturesSection />
			<HorizontalScrollSection />
			<UnlockPotentialSection />
			<HoldingBackSection />
			<SelectedWorkVertical />
			<FAQSection />
		</>
	);
};

export default Home;
