/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import dp from "../../assets/dp.jpg";
import { StaggerText } from "./StaggerText";
const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center gap-12 px-4 select-none"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
        {/* image section */}
        <div className="w-full md:w-1/3 h-full flex justify-center items-start md:items-center">
          <motion.img
            src={dp}
            className="w-[200px] md:w-[250px] h-auto object-contain rounded-full cursor-pointer scale-100"
            initial={{ y: 0 }}
            animate={{
              y: [-10, 10, -10],
              //   rotate: [-5, 5, -5],
              boxShadow: [
                "0px 0px 10px 2px rgba(255,255,255,0.5)",
                "0px 0px 20px 4px rgba(255,255,255,0.8)",
                "0px 0px 10px 2px rgba(255,255,255,0.5)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* content section */}
        <div className="w-full md:w-2/3 h-full flex flex-col items-center justify-center gap-4 text-center md:text-left">
          <motion.h1
            className="text-2xl md:text-4xl  font-extrabold text-lime-400 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            Hello, I'm <StaggerText naam="VIVEK" interval={4} />
          </motion.h1>

          <motion.p
            className="mt-4 text-base sm:text-lg  md:text-2xl  text-white leading-10 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          >
            a passionate <StaggerText naam="frontend" interval={5} />{" "}
            <StaggerText naam="developer" interval={8} /> who loves crafting{" "}
            <StaggerText naam="pixel-perfect" interval={9} /> designs and{" "}
            <StaggerText naam="interactive " interval={6} />{" "}
            <StaggerText naam="  experiences" interval={10} />.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Home;
