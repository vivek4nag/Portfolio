import Particles from "react-tsparticles";
import ParticlesConfig from "../../utils/ParticlesConfig";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      options={ParticlesConfig}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute inset-0 w-full h-full -z-10"
    />
  );
}

export default ParticleBackground;

