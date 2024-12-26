import { faHouse, faComputer, faGraduationCap, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaLinkedinIn, FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import JsLogo from "../assets/js.png";
import ReactSvg from "../assets/react.svg";
import TailwindSvg from "../assets/tailwindcss.svg";
import HtmlLogo from "../assets/html.png";
import BootstrapLogo from "../assets/bootstrap.svg";
import CssLogo from "../assets/css-3.png";
import GitSvg from "../assets/git.svg";
import JavaSvg from "../assets/java.svg";
import CPP from "../assets/cpp.svg";
import ReduxLogo from "../assets/redux.svg";
import FigmaLogo from "../assets/figma.png"

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: faHouse,
    url: "#home",
    name: "Home",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: faGraduationCap,
    url: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: faComputer,
    url: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: faEnvelope,
    url: "#contact",
    name: "Contact",
  },
];

export const Socials = [
  
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/vivek-nag-a125482b2/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    url: "https://github.com/vivek4nag",
    color: "#fff",
  },
  {
    id: `twitter-${Date.now()}`,
    Icon: FaTwitter,
    url: "https://x.com/vivek4nag",
    color: "#ff0000",
  },
  {
    id: `telegram-${Date.now()}`,
    Icon: FaTelegram,
    url: "https://t.me/Norindar_Mudi",
    color: "#ff0000",
  },
];

export const SkillsInfo = [
  {
    name: "JavaScript",
    Logo: JsLogo,
  },
  {
    name: "ReactJS",
    Logo: ReactSvg,
  },
  
  {
    name: "TailwindCSS",
    Logo: TailwindSvg,
  },
  {
    name: "Figma",
    Logo: FigmaLogo,
  },
  
  {
    name: "Bootstrap",
    Logo: BootstrapLogo,
  },
  {
    name: "Redux Toolkit",
    Logo: ReduxLogo,
  },
  
  {
    name: "HTML",
    Logo: HtmlLogo,
  },
  {
    name: "CSS",
    Logo: CssLogo,
  },
  {
    name: "Git",
    Logo: GitSvg,
  },
  {
    name: "Java",
    Logo: JavaSvg,
  },
  {
    name: "C++",
    Logo: CPP,
  },
];