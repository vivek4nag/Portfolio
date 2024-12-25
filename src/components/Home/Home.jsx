/* eslint-disable react/no-unescaped-entities */
import { AnimatePresence, motion } from "framer-motion";
import { Socials } from "../../utils/helper";
import SocialLinks from "./SocialLinks";
import resume from "../../assets/Dummy CV.pdf";
import AboutMe from "./AboutMe";
import MeraThobda from "./MeraThobda";
import CV_Button from "./CV_Button";
const Home = () => {
    return (
        <section
            id="home"
            className="relative flex flex-col items-center justify-center gap-12 px-4 select-none"
        >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                {/* image section */}
                <MeraThobda/>

                {/* content section */}
                <div className="w-full md:w-2/3 h-full flex flex-col items-center justify-center gap-4 text-center md:text-left">
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
