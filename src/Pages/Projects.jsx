import Header from "../components/Header";
import Project3DCard from "../components/Projects/Project3DCard";
import { ProjectList } from "../utils/helper";
import SmolProjectCards from "../components/Projects/SmolProjectCards";

const Projects = () => {
  return (
    <>
      <section id="projects" className="w-full mt-2 md:mt-12 md:pt-12 mb-12">
        <Header title="PROJECTS" />

        <div className="flex flex-wrap gap-4 justify-evenly">
          {ProjectList.map((item) => (
            <Project3DCard key={item.id} {...item} />
          ))}
        </div>
        <div>
          <h3 className=" text-center text-xl text-purple-500">Few more fun little projects</h3>
          <SmolProjectCards/>
        </div>
      </section>
    </>
  );
};

export default Projects;
