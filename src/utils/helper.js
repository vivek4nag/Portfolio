import { faHouse,faComputer, faGraduationCap, faEnvelope } from "@fortawesome/free-solid-svg-icons";

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