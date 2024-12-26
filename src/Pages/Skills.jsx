import { SkillsInfo } from "../utils/helper";
import SkillsCard from "../components/Skills/SkillsCard";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <>
    
    <section id="skills" className="w-full h-screen mt-2 md:mt-12 md:pt-12">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
        // exit={{ opacity: 0, y: 40 }}
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 py-4 sm:py-7 lg:py-10 tracking-widest"
      >
        SKILLS
      </motion.h1>

      <div className="text-white text-2xl font-bold flex flex-wrap gap-8 max-w-[900px] mx-auto justify-center items-center pt-8 md:pt-10 lg:pt-16 xl:pt-20">
        {SkillsInfo.map((item, idx) => (
          <SkillsCard key={idx} {...item} />
        ))}
      </div>
    </section>
    </>
  );
};

export default Skills;
