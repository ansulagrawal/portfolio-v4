const FULL_NAME = "Ansul Agrawal";
const SHORT_NAME = "Ansul";

const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    alt: "finder",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Safari",
    icon: "safari.png",
    alt: "safari",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    alt: "photos",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    alt: "contact",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    alt: "terminal",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    alt: "trash",
    canOpen: false,
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Hapi.js"],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Devops",
    items: ["CI/CD", "Bitbucket pipelines", "AWS", "Azure"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const TECH_STACK_RENDER_TIME = 7;

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtFile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgFile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export {
  FULL_NAME,
  SHORT_NAME,
  navLinks,
  navIcons,
  dockApps,
  techStack,
  TECH_STACK_RENDER_TIME,
  INITIAL_Z_INDEX,
  WINDOW_CONFIG,
};
