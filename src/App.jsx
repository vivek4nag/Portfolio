import Home from "./Pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./Pages/Skills";
import Contact from "./Pages/ContactMe";
import Projects from "./Pages/Projects";
import FooterCard from "./Pages/Footer";
// import { StarsBackground } from "./components/ui/stars-background";
// import { ShootingStars } from "./components/ui/shooting-stars";

;

export default function App() {
  return (
    <>
    {/* <StarsBackground className="fixed top-0 left-0 w-full h-full -z-10"/> 
    <ShootingStars className="fixed top-0 left-0 w-full h-full -z-10"/> */}
    <div className="relative min-h-screen">
      <div className=" w-full pt-28 md:px-4 lg:px-12 lg:pr-32">

        {/* Navbar */}
        <Navbar />

        {/* home Page */}
        <Home />

        {/* skills Page */}
        <Skills />

        {/* projects Page */}
        <Projects/>

        {/* contact Page */}
        <Contact />


      </div>
      <FooterCard/>
    </div>
    </>

  );
}
