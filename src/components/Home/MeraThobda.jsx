import dp1 from "../../assets/dp1.jpg";
import dp2 from "../../assets/dp2.jpg";
import dp3 from "../../assets/dp3.jpg";
import dp4 from "../../assets/dp4.jpg";
import dp5 from "../../assets/dp5.jpg";
import { motion } from "framer-motion";
const MeraThobda = () => {

    let dp = [dp1, dp2, dp3, dp4, dp5];
    let randomIdx = Math.floor(Math.random() * dp.length);
    // console.log(randomIdx);

    return (
        <>
            <div className="w-full md:w-1/3 h-full flex justify-center items-start md:items-center">
                <motion.img
                    src={dp[randomIdx]}
                    className="w-[200px] md:w-[240px] h-auto object-contain rounded-full cursor-pointer scale-100"
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
    );
};

export default MeraThobda;
