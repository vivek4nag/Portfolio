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
import movieImg from "../assets/p1_movieManiaSS.png"
import geminiImg from "../assets/p2_geminiSS.png"
import YogaImg from "../assets/yogaSS.png"
import altImg from "../assets/altproject.jpg"

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


export const ProjectList = [
  {
    id: `project-1-${Date.now()}`,
    projectName: "MovieMania AI",
    projectDescription: "MovieMania AI is a movie recommendation app that suggests movies using AI",
    projectImg: movieImg,
    altImg: altImg,
    livelink: "https://movie-mania-vivke04.netlify.app/",
    githublink: "https://github.com/vivek4nag/MovieMania-AI"

  },
  {
    id: `project-2-${Date.now()}`,
    projectName: "Google Gemini Clone",
    projectDescription: "your personal AI assistant to help you with your daily tasks made using gemini API",
    projectImg: geminiImg,
    altImg: altImg,
    livelink: "#",
    githublink: "https://github.com/vivek4nag/Gemini-clone-React"
  },
  {
    id: `project-3-${Date.now()}`,
    projectName: "Serenity - Yoga App",
    projectDescription: "your personal Meditation & Yoga trainer to help you stay calm and focused",
    projectImg: YogaImg,
    altImg: altImg,
    livelink: "https://vivek4nag.github.io/mindfull-meditation/",
    githublink: "https://github.com/vivek4nag/mindfull-meditation"
  },
]

export const SmallProjects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];