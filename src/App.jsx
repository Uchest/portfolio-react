import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import FAQs from "./sections/faqs/FAQs.jsx";
import About from "./sections/about/About.jsx";
import Services from "./sections/services/Services.jsx";
import Testimonials from "./sections/testimonials/Testimonials.jsx";
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact.jsx";
import Footer from "./sections/footer/Footer.jsx";
import FloatingNav from "./sections/floating-nav/FloatingNav.jsx";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/theme-context";
import { useRef, useState, useEffect } from "react";

const App = () => {
  const { themeState } = useThemeContext();

  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  //Check if floating Nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    //check if we scrolled up or down at least 20px
    if (
      siteYPosition < mainRef?.current?.getBoundingClientRect().y - 20 ||
      siteYPosition < mainRef?.current?.getBoundingClientRect().y + 20
    ) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  };

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    //cleanup function
    return () => clearInterval(checkYPosition);
  }, [siteYPosition]);

  return (
    <main
      className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}
    >
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
