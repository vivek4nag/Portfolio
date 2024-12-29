/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { useState } from "react";

const SocialLinks = ({ data, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            key={index}
            href={data.url}
            target="_blank"
            className="relative w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px] flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: index * 0.2 }}
        >
            
            {isHovered && (
                <motion.div
                    className="absolute inset-2 blur-md bg-gradient-to-br from-primary to-secondary -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                />
            )}

            
            <div className="w-full h-full rounded-full bg-bgPrimary flex items-center justify-center">
                <data.Icon className="text-textlight" />
            </div>
        </motion.a>
    );
};

export default SocialLinks;
