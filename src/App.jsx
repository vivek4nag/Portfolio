import ParticleBackground from "./components/ParticleBackGround/ParticlesBackground";

;

export default function App() {
  return (
    <div className="h-screen">
      <ParticleBackground />
      <div className="relative z-10">
        <h1>Hello</h1>
      </div>
    </div>

  );
}
