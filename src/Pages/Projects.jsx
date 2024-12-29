import Header from "../components/Header";
import Project3DCard from "../components/Projects/Project3DCard";
import { ProjectList } from "../utils/helper";
import SmolProjectCards from "../components/Projects/SmolProjectCards";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <section id="projects" className="w-full mt-2 md:mt-12 md:pt-12 mb-12">
        <Header title="PROJECTS" />

        <motion.div
          className="flex flex-wrap gap-4 justify-evenly pb-5 md:pb-10"
          initial={{ opacity: 0, scaleY: 0.5 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ ease: "easeIn", duration: 1, delay: 0.2 }}
        >
          {ProjectList.map((item) => (
            <Project3DCard key={item.id} {...item} />
          ))}
        </motion.div>

        <div className="pt-4 md:pt-8">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
            className=" text-center text-lg sm:text-2xl md:text-4xl text-purple-500 select-none"
          >
            Few more fun little projects
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.1 }}
            className="flex flex-wrap gap-4 justify-evenly pb-4 md:pb-10"
          >
            <SmolProjectCards />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
