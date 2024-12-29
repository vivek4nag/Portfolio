import { SkillsInfo } from "../utils/helper";
import SkillsCard from "../components/Skills/SkillsCard";
import Header from "../components/Header";
const Skills = () => {
  return (
    <>
    
    <section id="skills" className="w-full h-[38rem] md:h-screen mt-2 md:mt-12 md:pt-12">
    <Header title="SKILLS"/>

      <div className="text-white text-2xl font-bold flex flex-wrap gap-8 max-w-[900px] mx-auto justify-center items-center px-2 md:px-4 pt-8 md:pt-10 lg:pt-16 xl:pt-20">
        {SkillsInfo.map((item, idx) => (
          <SkillsCard key={idx} {...item} />
        ))}
      </div>
    </section>
    </>
  );
};

export default Skills;
