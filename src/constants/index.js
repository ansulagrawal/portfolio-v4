const FULL_NAME = "Ansul Agrawal";
const SHORT_NAME = "Ansul";

const navLinks = [
  {
    id: 1,
    name: "Work",
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
    name: "Blogs",
    icon: "safari.png",
    alt: "safari",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    alt: "photos",
    canOpen: false,
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
  // {
  //   id: 1,
  //   date: "Aug 1, 2025",
  //   title: "What is TypeScript?",
  //   image: "/images/blog1.png",
  //   link: "https://google.com",
  // },
];

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: "work-red",
      name: "RedAnt Technologies",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-5 left-5",
      children: [
        {
          id: "work-red-4",
          name: "Robot OTA Updates.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          subtitle: "OTA Update System for Robotics — RedAnt Technologies",
          tech: [
            "Python",
            "FastAPI",
            "React",
            "Keycloak",
            "Grafana",
            "Azure",
            "GitHub Pipelines",
          ],
          meta: {
            role: "Software Engineer",
            duration: "Aug 2025 – Present",
          },
          description: [
            "Engineering an OTA (Over-the-Air) update system for robots developed at RedAnt Technologies, enabling remote firmware and software rollout across field units.",
            "Implemented core backend services using FastAPI with Python modules for update packaging, validation, and delivery workflows tailored for robotic hardware constraints.",
            "Designed secure authentication and role-based access control using Keycloak to protect device communication and management interfaces.",
            "Building the control dashboard with React to manage robot update jobs, rollout stages, and live device status.",
            "Integrated Grafana to visualize telemetry, update progress, and system health in real time.",
            "Configured CI/CD workflows through GitHub Pipelines for automated versioning, packaging, and Azure-based deployments.",
            "Contributing to key architectural decisions and Phase 1 implementation to support scalable robot fleet update management.",
          ],
        },
        {
          id: "work-red-3",
          name: "Company SharePoint Portal.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-20",
          subtitle: "Internal tools & Automation — RedAnt Technologies",
          tech: ["SharePoint", "Power Automate", "Intune", "JavaScript"],
          meta: {
            role: "Software Engineer",
            duration: "Feb 2025 – Nov 2025",
          },
          metrics: [
            { label: "Search time ↓", value: "60%" },
            { label: "HR processing ↓", value: "90%" },
          ],
          description: [
            "Designed and launched the official Company SharePoint portal to gather internal tools and resources in one place.",
            "Integrated services such as Leave Requests, Attendance, and Announcements into a single experience.",
            "Adjusted branding and structure based on input from employees and HR.",
            "Automated news posts and approvals by using Power Automate workflows.",
            "Cut the time spent searching for internal resources by more than 60%.",
            "Set SharePoint as the homepage on all company laptops, regardless of operating system (Windows or macOS) using browser-specific scripts through Microsoft Intune for Chrome, Brave, Firefox, and Safari.",
          ],
        },
        {
          id: "work-red-2",
          name: "Process Management.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-45 left-10",
          subtitle: "End-to-End Process Management — RedAnt Technologies",
          tech: [
            "Fastify",
            "MongoDB",
            "React",
            "Ant Design",
            "Tailwind CSS",
            "Bitbucket Pipelines",
          ],
          meta: {
            role: "Software Engineer",
            duration: "Mar 2025 – Apr 2025",
          },
          description: [
            "Led full-stack development across backend (Fastify, MongoDB) and frontend (React, Tailwind CSS).",
            "Structured the API layer using Fastify with a focus on performance and scalability.",
            "Developed core UI components and page layouts using React, AntD, and Tailwind CSS.",
            "Implemented JWT authentication and role-based access control.",
            "Set up CI/CD pipelines with Bitbucket Pipelines to support smooth development and deployment.",
          ],
        },
        {
          id: "work-red-1",
          name: "Company Website.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-45 right-20",
          subtitle: "Company Website Revamp — RedAnt Technologies",
          tech: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Static Site Generation",
            "SEO Optimization",
          ],
          meta: {
            role: "Software Engineer",
            duration: "Feb 2025",
          },
          metrics: [
            { label: "Bundle size ↓", value: "20%" },
            { label: "Page speed ↑", value: "23%" },
          ],
          description: [
            "Migrated the company’s static website to Next.js with static site generation, improving performance and maintainability.",
            "Optimized page speed through code splitting, lazy loading, and image optimization.",
            "Implemented structured metadata to enhance SEO and boost search visibility.",
            "Developed reusable, accessible UI components using React and Tailwind CSS.",
            "Improved accessibility by aligning with WCAG standards and ensuring full mobile responsiveness.",
          ],
        },
      ],
    },
    {
      id: "work-ga",
      name: "General Aeronautics",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-45",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: "work-ga-3",
          name: "Castor.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-5",
          subtitle: "End-to-End Fleet Management Platform",
          tech: [
            "React",
            "Redux Toolkit",
            "Ant Design",
            "Tailwind CSS",
            "Hapi.js",
            "MySQL",
            "Camunda",
          ],
          meta: {
            role: "L3 Software Engineer",
            duration: "Feb 2022 – Jan 2025",
          },
          metrics: [
            { label: "Page load time ↓", value: "40%" },
            { label: "Bundle size ↓", value: "20%" },
            { label: "User engagement ↑", value: "20%" },
          ],
          description: [
            "Developed the web platform for managing autonomous fleet operations using React, Ant Design, and Tailwind CSS.",
            "Optimized front-end performance, reducing page load time by 40% and decreasing the bundle size by 20%.",
            "Implemented reusable UI components and enforced coding standards through code reviews.",
            "Built 50+ APIs and 20+ backend features using Hapi.js, Node.js, and MySQL to improve data processing.",
            "Developed an automated WhatsApp booking bot using Meta APIs and Camunda, improving user engagement by 20%.",
            "Led a team of 6+ engineers, coordinating front-end strategy and cross-team collaboration.",
            "Constructed a CI/CD pipeline to automate deployments across environments.",
          ],
        },
        {
          id: "work-ga-2",
          name: "Pegasus.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 right-10",
          subtitle: "Pegasus — Internal Ticket Management Platform",
          tech: ["React", "Redux", "Socket.io", "JavaScript", "AntDesign"],
          meta: {
            role: "L3 Software Engineer",
            duration: "Dec 2023 – Oct 2024",
          },
          metrics: [
            { label: "Development cycle ↓", value: "20%" },
            { label: "Team productivity ↑", value: "30%" },
            { label: "Management efficiency ↑", value: "24%" },
          ],
          description: [
            "Led the frontend development of Pegasus, a ticket management platform designed to streamline workflows for engineering teams.",
            "Conducted code reviews for a team of 4+ developers to maintain code quality and best practices.",
            "Built a modular component system using React and Vite, reducing development cycle time by 20%.",
            "Implemented real-time communication using Socket.io to enable live chat between team members.",
            "Developed an intuitive ticket flow interface that improved team productivity by 30% and management efficiency by 24%.",
          ],
        },
        {
          id: "work-ga-1",
          name: "IRIS.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-40 left-5",
          subtitle: "IRIS — Drone Live Tracking & Management Platform",
          tech: [
            "React",
            "Redux Toolkit",
            "Ant Design",
            "Server-Sent Events",
            "Google Maps API",
          ],
          meta: {
            role: "L3 Software Engineer",
            duration: "Nov 2023 – Feb 2024",
          },
          metrics: [
            { label: "Debugging time ↓", value: "30%" },
            { label: "Bug reports ↓", value: "28%" },
          ],
          description: [
            "Led frontend development for IRIS, a real-time drone tracking and management system.",
            "Built a high-performance UI architecture using React, Ant Design, and Redux Toolkit.",
            "Integrated live tracking features using Server-Sent Events and Google Maps API.",
            "Improved debugging efficiency by 30% through better state management and tooling.",
            "Collaborated with cross-functional teams to integrate 20+ backend services, reducing bug reports by 28%.",
          ],
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: "about",
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    // {
    //   id: "about-2",
    //   name: "me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-10 left-30",
    //   imageUrl: "/macbook.png",
    // },
    {
      id: "about-1",
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-5",
      subtitle: "Meet Ansul",
      image: "/images/profile.jpg",
      description: [
        "Hey, I’m Ansul 👋 — a full-stack developer who likes building the whole thing, front to back, and then wiring up the DevOps so it actually runs without catching fire.",
        "On the frontend, I’m all about smooth interactions and layouts that don’t fight you. On the backend, I enjoy spinning up APIs that behave themselves.",
        "And when it comes to DevOps, I somehow became the person who sets up pipelines, automation, and deployments… mostly because it's fun watching everything click into place.",        "I like clean code, fast sites, and projects that don’t need a rescue mission later. Off the clock, you’ll usually find me testing random tools, redesigning something at 1AM, or buying yet another gadget that I absolutely swear is essential 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: "trash",
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    // {
    //   id: 2,
    //   name: "trash2.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-40 left-80",
    //   imageUrl: "/images/trash-2.png",
    // },
  ],
};

const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/ansulagrawal",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/ansulagrawal",
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
  WINDOW_CONFIG,
  locations,
  socials,
};
