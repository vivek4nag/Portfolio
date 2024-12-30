/* eslint-disable react/no-unescaped-entities */
import { AnimatePresence, motion } from "framer-motion";
import { Socials } from "../utils/helper";
import SocialLinks from "../components/Home/SocialLinks";
import resume from "../assets/Dummy CV.pdf";
import AboutMe from "../components/Home/AboutMe";
import MeraThobda from "../components/Home/MeraThobda";
import CV_Button from "../components/Home/CV_Button";
const Home = () => {
    return (
        <section
            id="home"
            className="relative flex flex-col items-center justify-center gap-12 px-4 select-none w-full mb-40"
        >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full pt-4 pb-10">
                {/* image section */}
                <MeraThobda/>

                {/* content section */}
                <div className="w-full md:w-2/3 h-full flex flex-col items-center justify-center gap-4 text-center md:text-left md:pr-8">
                    <AboutMe/>

                    {/* social media links */}
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-8 mb-4">
                        <AnimatePresence>
                            {Socials &&
                                Socials.map((item, idx) => (
                                    <SocialLinks key={idx} data={item} index={idx} />
                                ))}
                        </AnimatePresence>
                    </div>

                    {/* resume button */}

                    <motion.a href={resume} download
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeIn" }}
                    >
                        
                    <CV_Button/>
                    </motion.a>

                </div>
            </div>
        </section>
    );
};

export default Home;
