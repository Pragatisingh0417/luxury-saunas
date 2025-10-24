import AboutUs from "./components/AboutUs";
import CtaSection from "./components/CtaSection";
import Newsletter from "./components/Newsletter";
import OurProjects from "./components/OurProjects";
import PopupForm from "./components/PopupForm";
import Services from "./components/Services";
import Slider from "./components/Slider";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <>
      <main className="">
        <PopupForm />
              <Slider />
              <AboutUs />
              <CtaSection />
              <Services />
              <WhyChooseUs />
              <OurProjects />
              <Testimonials />
              <Newsletter />


      </main>
    </>
  );
}
