import { Menus } from "../../utils/helper";
import NavItem from "./NavItem";
import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar = () => {
  return (
    <motion.div className="fixed bottom-0 right-0 lg:top-0 w-full h-auto lg:h-screen lg:w-32 flex justify-center items-end lg:items-center pb-8 lg:pb-0 z-50"
    initial={{opacity: 0, x: 150}}
    animate={{opacity: 1, x: 0}}
    transition={{duration: 1.2, ease: "easeIn"}}
    >
      <div className="px-2 py-3 lg:py-12 rounded-full border-[rgba(255,255,255,0.3)] border-2 flex flex-row items-center justify-center lg:flex-col gap-12 duration-300 backdrop-blur-md">

        {/* diff icons yahn aayga */}
        {Menus.map((ele, idx) => <NavItem key={idx} {...ele} />)}


      </div>

    </motion.div>
  )
}

export default Navbar