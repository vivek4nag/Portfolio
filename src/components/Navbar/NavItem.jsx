/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const NavItem = ({ Icon, url, name }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <a
            href={url}
            className="w-12 h-12 rounded-full flex items-center justify-center group cursor-pointer hover:bg-gradient-to-br hover:from-primary hover:to-secondary transition-all duration-500 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <FontAwesomeIcon
                icon={Icon}
                className="text-textlight text-lg group-hover:text-bgPrimary transition-all duration-500"
            />

            {/* hover krne pe likha hua show krega */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: -30, rotate: -5 }}
                        animate={{ opacity: 1, x: 0, rotate: 0, backgroundColor: ["#ffffff", "#f0f8ff"] }}
                        exit={{ opacity: 0, x: -30, rotate: -5 }}
                        className="hidden md:block absolute bg-white rounded-md px-6 py-2 -left-[125px] after:absolute after:-right-1 after:top-3 after:w-3  after:h-3 after:bg-white after:rotate-45"
                        style={{ boxShadow: "inset 0 0 10px rgba(0,0,0,0.4)" }}
                    >
                        <p className="text-bgPrimary text-sm">{name}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </a>
    );
};

export default NavItem;
