
import AboutUs from "../components/AboutUs";
import ConditionsWeSupport from "../components/Conditions";
import ConsultingSection from "../components/ConsultingCenter";
import FAQSection from "../components/FaqSection";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/OurServices";
import Specialist from "../components/Specialist";
import TestimonialSection from "../components/Testimonial";
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
            <Specialist />
            <TestimonialSection />
            <FAQSection />
            <Footer />
        </>




    );
};
export default HomePage;