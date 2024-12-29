import dp from "../../assets/dp3.jpg";
import { motion } from "framer-motion";
const MeraThobda = () => {
    return (
        <>
            <div className="w-full md:w-1/3 h-full flex justify-center items-start md:items-center">
                <motion.img
                    src={dp}
                    className="w-[220px] md:w-[280px] h-auto object-contain rounded-full cursor-pointer scale-100"
                    initial={{ y: 0 }}
                    animate={{
                        x: [-4, 4, -4],
                        y: [-12, 12, -12],
                        rotate: [-5, 5, -5, 5, -5],
                        boxShadow: [
                            "0px 0px 10px 2px rgba(255,255,255,0.4)",
                            "0px 0px 20px 4px rgba(255,255,255,0.8)",
                            "0px 0px 10px 2px rgba(255,255,255,0.4)",
                        ],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: "easeInOut",
                    }}
                />
            </div>
        </>
    )
}

export default MeraThobda