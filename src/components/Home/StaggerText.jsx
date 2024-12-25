/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export const StaggerText = ({ naam, interval }) => {
    const DURATION = 0.30;
    const STAGGER = 0.035;
    const INTERVAL = interval || 5;

    const textVariants = {
        initial: {
            y: "100%",
        },
        animate: {
            y: 0,
        },
    };

    return (
        <motion.span
            className="relative overflow-hidden tracking-[.18em] font-black uppercase text-2xl md:text-4xl cursor-pointer"
            style={{
                display: "inline-block",
                lineHeight: 0.95,
            }}
        >
            <span className="absolute inset-0">
                {naam.split("").map((letter, idx) => (
                    <motion.span
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        transition={{
                            duration: DURATION,
                            ease: "easeIn",
                            delay: STAGGER * idx,
                            repeat: Infinity,
                            repeatType: "loop",
                            repeatDelay: INTERVAL,
                        }}
                        className="inline-block"
                        key={idx}
                    >
                        {letter}
                    </motion.span>
                ))}
            </span>

            <span>
                {naam.split("").map((letter, idx) => (
                    <motion.span
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * idx,
                            repeat: Infinity,
                            repeatType: "loop",
                            repeatDelay: INTERVAL,
                        }}
                        className="inline-block"
                        key={idx}
                    >
                        {letter}
                    </motion.span>
                ))}
            </span>
        </motion.span>
    );
};


//     return (
//         <motion.span
//             initial="initial"
//             whileHover="hovered"
//             className="relative block overflow-hidden whitespace-nowrap text-sm font-black uppercase md:text-5xl lg:text-xl"
//             style={{
//                 lineHeight: 0.95,
//             }}
//         >
//             <div>
//                 {children.split("").map((letter, idx) => (
//                     <motion.span
//                         variants={{
//                             initial: {
//                                 y: 0,
//                             },
//                             hovered: {
//                                 y: "-100%",
//                             },
//                         }}
//                         transition={{
//                             duration: DURATION,
//                             ease: "easeInOut",
//                             delay: STAGGER * idx,
//                         }}
//                         className="inline-block"
//                         key={idx}
//                     >
//                         {letter}
//                     </motion.span>
//                 ))}
//             </div>
//             <div className="absolute inset-0">
//                 {children.split("").map((letter, idx) => (
//                     <motion.span
//                         variants={{
//                             initial: {
//                                 y: "100%",
//                             },
//                             hovered: {
//                                 y: 0,
//                             },
//                         }}
//                         transition={{
//                             duration: DURATION,
//                             ease: "easeInOut",
//                             delay: STAGGER * idx,
//                         }}
//                         className="inline-block"
//                         key={idx}
//                     >
//                         {letter}
//                     </motion.span>
//                 ))}
//             </div>
//         </motion.span>
//     );
// };
