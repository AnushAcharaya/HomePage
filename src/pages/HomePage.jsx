
import AboutUs from "../components/AboutUs";
import ConditionsWeSupport from "../components/Conditions";
import ConsultingSection from "../components/ConsultingCenter";
import Gallery from "../components/Gallery";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/OurServices";
import VideoSection from "../components/VideoSection";


const HomePage = () => {
    return (
        <>
            <HeroSection />
            <AboutUs />
            <ServicesSection />
            <ConditionsWeSupport />
            <VideoSection />
            <Gallery />
            <ConsultingSection />
        </>




    );
};
export default HomePage;