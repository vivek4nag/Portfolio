import {
  faHouse,
  faComputer,
  faGraduationCap,
  faAddressBook
} from "@fortawesome/free-solid-svg-icons";
import { FaLinkedinIn, FaGithub, FaTelegram, FaTwitter, FaEnvelope } from "react-icons/fa";
import JsLogo from "../assets/js.png";
import ReactSvg from "../assets/react.svg";
import TailwindSvg from "../assets/tailwindcss.svg";
import HtmlLogo from "../assets/html.png";
import BootstrapLogo from "../assets/bootstrap.svg";
import CssLogo from "../assets/css-3.png";
import GitSvg from "../assets/git.svg";
import JavaSvg from "../assets/java.svg";
import CPP from "../assets/cpp.svg";
import Python from "../assets/python.png"
import ReduxLogo from "../assets/redux.svg";
import FigmaLogo from "../assets/figma.png";
import movieImg from "../assets/p1_movieManiaSS.png";
import geminiImg from "../assets/p2_geminiSS.png";
import YogaImg from "../assets/yogaSS.png";
import altImg from "../assets/altproject.jpg";
import CrickLiveImg from "../assets/sp01_criclive.png";
import pokemonImg from "../assets/sp02_pokemon.png";
import JokeImg from "../assets/sp03_jokes.png";
import NewsImg from "../assets/sp04_newsApp.png";
import TicTacToeImg from "../assets/sp05_tictactoe.png";
import RPSImg from "../assets/sp06_RPS.png";
import FlappyBirdImg from "../assets/sp07_flappybird.png"
import PasswordGeneratorImg from "../assets/sp08_password.png"
import weatherImg from "../assets/sp09_weatherApp.png"

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
    Icon: faAddressBook,
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
    id: `email-${Date.now()}`,
    Icon: FaEnvelope,
    url: "mailto:vivek4nag@gmail.com",
    color: "#D44638",
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
  {
    name: "Python",
    Logo: Python,
  },
];

export const ProjectList = [
  {
    id: `project-1-${Date.now()}`,
    projectName: "MovieMania AI",
    projectDescription:
      "MovieMania AI is a movie recommendation app that suggests movies using AI",
    projectImg: movieImg,
    altImg: altImg,
    livelink: "https://moviemania-ai.vercel.app/",
    githublink: "https://github.com/vivek4nag/MovieMania-AI",
  },
  {
    id: `project-2-${Date.now()}`,
    projectName: "Google Gemini Clone",
    projectDescription:
      "your personal AI assistant to help you with your daily tasks made using gemini API",
    projectImg: geminiImg,
    altImg: altImg,
    livelink: "https://gemini-react-vivek04.netlify.app/",
    githublink: "https://github.com/vivek4nag/Gemini-clone-React",
  },
  {
    id: `project-3-${Date.now()}`,
    projectName: "Serenity - Yoga App",
    projectDescription:
      "your personal Meditation & Yoga trainer to help you stay calm and focused",
    projectImg: YogaImg,
    altImg: altImg,
    livelink: "https://vivek4nag.github.io/mindfull-meditation/",
    githublink: "https://github.com/vivek4nag/mindfull-meditation",
  },
];

export const SmallProjects = [
  {
    title: "CrickLive Score 🏏",
    description:
      "A live cricket score app that shows the live score of the ongoing cricket match across the world",
    img: CrickLiveImg,
    altImg:altImg,
    link: "https://cricklive-score-vivek04.netlify.app/",
  },
  {
    title: "HeadlineHub 📰",
    description:
      "An interactive news app, offering categorized news from across the world at your fingertips.",
    img: NewsImg,
    altImg:altImg,
    link: "https://github.com/vivek4nag/NEWS_App_React",
  },
  {
    title: "PokeMon Card Quest🐣 ",
    description:
      "Powered by PokeAPI, this app allows you to search for any Pokemon and get detailed information about it.",
    img: pokemonImg,
    altImg:altImg,
    link: "https://vivek4nag.github.io/PokeCard-Quest-/",
  },
  {
    title: "Jokes Generator 😜",
    description:
      "This app serves up fresh jokes for every mood, from harmless dad jokes to dark, edgy humor.",
    img: JokeImg,
    altImg:altImg,
    link: "https://vivek4nag.github.io/DAD-Jokes-Generator/",
  },
  {
    title: "Flappy Bird 🕊️",
    description:
      "The retro Flappy Bird game, featuring a clean UI and responsive gameplay.",
    img: FlappyBirdImg,
    altImg:altImg,
    link: "https://vivek4nag.github.io/Flappy-Bird/",
  },
  {
    title: "Tic-Tac-Toe❌⭕",
    description:
      "A simple Tic-Tac-Toe game, featuring a clean UI and responsive gameplay.",
    img: TicTacToeImg,
    altImg:altImg,
    link: "https://vivek4nag.github.io/Tic-Tac-Toe/",
  },
  {
    title: "Rock-Paper-Scissors 🪨",
    description:
      "The classic Rock-Paper-Scissors game, featuring a clean UI and responsive gameplay.",
    img: RPSImg,
    altImg:altImg,
    link: "https://vivek4nag.github.io/Rock-Paper-Scissors/",
  }, 
  {
    title: "Password Generator 🔑",
    description:
      "A password generator that generates a random password every time based on the user's input.",
    img: PasswordGeneratorImg,
    altImg:altImg,
    link: "https://vivek4nag.github.io/Password-Generator/",
  },
  {
    title: "WeatherGo 🌦️",
    description:
      "A simple weather app that fetches real-time weather details for any location using a weather API",
    img: weatherImg,
    altImg:altImg,
    link: "https://vivek4nag.github.io/Weather-App/",
  },
  
  
];
