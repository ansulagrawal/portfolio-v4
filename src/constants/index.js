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

const TECH_STACK_MOCK_RENDER_TIME = 7;

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

const blogPosts = [
  {
    id: 1,
    date: "Aug 1, 2025",
    title: "What is TypeScript?",
    image: "/images/blog1.png",
    link: "https://google.com",
  },
  {
    id: 2,
    date: "Sep 1, 2025",
    title: "Master web development",
    image: "/images/blog2.png",
    link: "https://google.com",
  },
];

export {
  blogPosts,
  dockApps,
  FULL_NAME,
  INITIAL_Z_INDEX,
  navIcons,
  navLinks,
  SHORT_NAME,
  TECH_STACK_MOCK_RENDER_TIME,
  techStack,
  WINDOW_CONFIG
};
