
import { motion, useMotionTemplate, useMotionValue, animate, AnimatePresence } from "framer-motion"
import { useEffect } from "react";
import { Socials } from "../utils/helper";
import SocialLinks from "../components/Home/SocialLinks";

const COLOR = ["#13FFAA", "#CE84CF", "#DD335C", "#FF5733", "#335CFF", "#1E67C6", "#5CFF33", "#33E7FF", "#FFAA33"]

const FooterCard = () => {
    const color = useMotionValue(COLOR[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(100% 120% at 50% 0%, #020010 50% , ${color})`


    useEffect(() => {
        animate(color, COLOR, {
            ease: 'easeInOut',
            duration: 25,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, [])

    return (
        <motion.div style={{
            backgroundImage,
        }} className=" relative flex max-w-full h-[25rem] md:h-[18rem] overflow-hidden bg-transparent text-grey-200 -z-50 "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
        >


            <div className="text-slate-200 w-screen flex flex-col justify-end items-center px-2 md:px-10 pt-[8rem] pb-24 md:pb-8">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-8 mb-4">
                    <AnimatePresence>
                        {Socials &&
                            Socials.map((item, idx) => (
                                <SocialLinks key={idx} data={item} index={idx} />
                            ))}
                    </AnimatePresence>
                </div>

                <h4 className="text-center gap-3 text-lg md:text-xl">Built with passion and React by  <span className="text-2xl md:text-3xl text-bold text-lime-500">Vivek</span></h4>
                <p className=" text-center gap-3 text-xl">😉 <span className="text-green-500">No copyrights here.</span> Feel free to remix this portfolio into your own masterpiece! 😉</p>
                <p className=" text-center gap-3 text-xl">🤝 Collaboration and creativity make the web a better place! 🤝</p>

            </div>

        </motion.div>
    )
}
export default FooterCard;