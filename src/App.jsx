// import ParticleBackground from "./components/ParticleBackGround/ParticlesBackground";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import { StarsBackground } from "./components/ui/stars-background";
import { ShootingStars } from "./components/ui/shooting-stars";

;

export default function App() {
  return (
    <div className="relative min-h-screen">
      <StarsBackground className="fixed top-0 left-0 w-full h-full -z-10"/>
      <ShootingStars className="fixed top-0 left-0 w-full h-full -z-10"/>
    <div className=" w-full xl:w-[1400px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">
      {/* <ParticleBackground  /> */}
      

      {/* Navbar */}
      <Navbar />

      {/* home container */}
      <Home/> 

      {/* skills container */}
      <Skills/>

      {/* projects container */}
      <Projects/>

      {/* contact container */}

      {/* footer */}

    </div>
    </div>

  );
}
