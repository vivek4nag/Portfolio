import { Menus } from "../../utils/helper";
import NavItem from "./NavItem";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar = () => {
  return (
    <div className="fixed bottom-0 right-0 lg:top-0 w-full h-auto lg:h-screen lg:w-32 flex justify-center items-end lg:items-center pb-8 lg:pb-0 z-50">
        <div className="px-4 py-3 lg:py-12 rounded-full border-[rgba(255,255,255,0.3)] border-2 flex flex-row items-center justify-center lg:flex-col gap-12 duration-300 backdrop-blur-md">

            {/* diff icons yahn aayga */}
            {Menus.map((ele, idx) => <NavItem key={idx} {...ele} />)}
          

        </div>

    </div>
  )
}

export default Navbar