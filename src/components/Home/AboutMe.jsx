import { StaggerText } from "./StaggerText"
import { motion } from "framer-motion";


const AboutMe = () => {
    return (
        <>
            <motion.h1
                className="text-2xl md:text-4xl mt-8 mb-4  font-extrabold text-secondary leading-tight"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
            >
                Hellooooo, I&apos;m <StaggerText naam="VIVEK" interval={4} />{" "}<StaggerText naam="NAG" interval={6} />
            </motion.h1>

            <motion.p
                className="mt-4 text-base sm:text-lg  md:text-2xl text-white text-center md:text-justify tracking-wide leading-snug md:leading-relaxed lg:leading-loose"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeIn" }}
            // style={{
            //     wordSpacing: "8px",
            //     lineHeight: "2.2"
            // }}
            >
                I&apos;m a passionate <StaggerText naam="frontend" interval={5} />{" "}
                <StaggerText naam="developer" interval={8} /> who loves crafting{" "}
                <StaggerText naam="pixel" interval={3} />{" "}
                <StaggerText naam="perfect" interval={4} /> designs and{" "}
                <StaggerText naam="interactive" interval={6} />{" "}<StaggerText naam="experiences" interval={10} />.
            </motion.p>
        </>
    )
}

export default AboutMe