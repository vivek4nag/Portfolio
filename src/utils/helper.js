import { faHouse, faComputer, faGraduationCap, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaLinkedinIn, FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";

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