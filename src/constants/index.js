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
  id: "work",
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
          id: "work-red-0",
          name: "Readme.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-5",
          subtitle: "RedAnt Technologies",
          tech: [
            "React",
            "Next.js",
            "JavaScript",
            "Tailwind CSS",
            "Ant Design",
            "Node.js",
            "FastAPI",
            "Python",
            "MongoDB",
            "PostgreSQL",
            "SharePoint",
            "Power Automate",
            "Microsoft Intune",
            "Keycloak",
            "Grafana",
            "GitHub Actions",
            "Bitbucket Pipelines",
            "Azure",
          ],
          meta: {
            role: "Software Engineer",
            duration: "Feb 2025 – Present",
          },
          description: [
            "Worked as a Software Engineer delivering full-stack applications, internal platforms, and automation systems used across the organization.",
            "Owned end-to-end development of internal tools, from requirements gathering to production rollout and maintenance.",
            "Built systems focused on automation, security, and performance, reducing manual operational effort across HR and engineering workflows.",
            "Collaborated closely with HR, operations, and leadership to translate business processes into scalable technical solutions.",
            "Contributed to CI/CD practices and deployment workflows to improve reliability and development speed across projects.",
          ],
        },
        {
          id: "work-red-1",
          name: "Company Website.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-50",
          subtitle: "Company Website Revamp — RedAnt Technologies",
          tech: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Static Site Generation",
            "SEO",
          ],
          meta: {
            duration: "Feb 2025",
          },
          metrics: [
            {
              label: "Bundle size ↓",
              value: "20%",
            },
            {
              label: "Page speed ↑",
              value: "23%",
            },
          ],
          description: [
            "Migrated the legacy static website to Next.js using static site generation.",
            "Reduced bundle size by 20% and improved page speed by 23% through code splitting and optimization.",
            "Implemented lazy loading and image optimization to improve initial load performance.",
            "Enhanced SEO using structured metadata and semantic HTML.",
            "Built accessible, WCAG-compliant UI components with full mobile responsiveness.",
          ],
        },
        {
          id: "work-red-2",
          name: "Process Management.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-5",
          subtitle: "Process Management Platform — RedAnt Technologies",
          tech: [
            "Fastify",
            "MongoDB",
            "React",
            "Ant Design",
            "Tailwind CSS",
            "Bitbucket Pipelines",
          ],
          meta: {
            duration: "Mar 2025 – Apr 2025",
          },
          description: [
            "Delivered an end-to-end full-stack business process automation platform.",
            "Built high-performance backend APIs using Fastify and MongoDB, optimized for concurrent requests.",
            "Developed frontend interfaces using React, Ant Design, and Tailwind CSS.",
            "Implemented JWT-based authentication and role-based access control to secure user data.",
            "Set up CI/CD pipelines with Bitbucket Pipelines for automated testing and deployment.",
          ],
        },
        {
          id: "work-red-3",
          name: "Company SharePoint Portal.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-40 left-5",
          subtitle: "Company SharePoint Portal — RedAnt Technologies",
          tech: [
            "SharePoint",
            "Power Automate",
            "Microsoft Intune",
            "JavaScript",
          ],
          meta: {
            role: "Software Engineer",
            duration: "Feb 2025 – Nov 2025",
          },
          metrics: [
            {
              label: "Resource discovery ↓",
              value: "60%",
            },
            {
              label: "HR processing ↓",
              value: "70%",
            },
          ],
          description: [
            "Designed and launched a company-wide SharePoint portal serving 100+ employees as a centralized internal resource hub.",
            "Integrated HR tools including attendance, leave management, announcements, and internal documentation.",
            "Automated approval workflows using Power Automate, significantly reducing administrative overhead.",
            "Improved information architecture and navigation, cutting resource discovery time by 60%.",
            "Deployed the portal as the default homepage across all company devices (Windows and macOS) using Microsoft Intune browser policies.",
          ],
        },
        {
          id: "work-red-4",
          name: "Robot OTA Updates.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-40 left-50",
          subtitle: "OTA Update System for Robots — RedAnt Technologies",
          tech: [
            "Python",
            "FastAPI",
            "React",
            "Keycloak",
            "Grafana",
            "Azure",
            "GitHub Actions",
          ],
          meta: {
            duration: "Aug 2025 – Present",
          },
          description: [
            "Architected an OTA (Over-the-Air) update system for secure remote firmware deployment across field robotics units.",
            "Built backend services using FastAPI and Python for update packaging, validation, and controlled rollout workflows.",
            "Implemented enterprise-grade authentication and role-based access control using Keycloak to secure device communication and management endpoints.",
            "Developed a React-based control dashboard to manage update rollouts, deployment stages, and live device status.",
            "Integrated Grafana for real-time telemetry visualization and system health monitoring.",
            "Established CI/CD pipelines using GitHub Actions and Azure for automated versioning, packaging, and deployment.",
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
          id: "work-ga-0",
          name: "Readme.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-5",
          subtitle: "General Aeronautics",
          tech: [
            "React",
            "Redux Toolkit",
            "Node.js",
            "Hapi.js",
            "MySQL",
            "Ant Design",
            "Tailwind CSS",
            "WebSocket",
            "Server-Sent Events",
            "Google Maps API",
            "Camunda",
            "Bitbucket Pipelines",
          ],
          meta: {
            role: "L3 Software Engineer",
            duration: "Feb 2022 – Jan 2025",
          },
          description: [
            "Worked as an L3 Software Engineer building and scaling enterprise platforms for autonomous drone and fleet operations.",
            "Owned end-to-end delivery of large frontend systems while contributing to backend services and overall system architecture.",
            "Led and mentored multiple engineering teams, driving code quality, performance optimization, and engineering best practices.",
            "Delivered production systems used by 1000+ users, with strong emphasis on scalability, reliability, and real-time data handling.",
            "Collaborated closely with product, backend, and operations teams to translate complex operational workflows into robust software solutions.",
          ],
        },
        {
          id: "work-ga-1",
          name: "IRIS.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-50",
          subtitle: "IRIS — Drone Tracking & Management Platform",
          tech: [
            "React",
            "Redux Toolkit",
            "Ant Design",
            "Server-Sent Events",
            "Google Maps API",
          ],
          meta: {
            duration: "Nov 2023 – Feb 2024",
          },
          metrics: [
            { label: "Debugging time ↓", value: "30%" },
            { label: "Bug reports ↓", value: "28%" },
          ],
          description: [
            "Led frontend development for IRIS, a real-time drone tracking and monitoring platform.",
            "Architected a high-performance React application using Redux Toolkit and Ant Design.",
            "Implemented live drone tracking using Server-Sent Events and Google Maps API, supporting 50+ concurrent flights.",
            "Improved state management and developer tooling, reducing debugging time by 30%.",
            "Collaborated with backend teams to integrate 20+ services, reducing production bug reports by 28%.",
          ],
        },
        {
          id: "work-ga-2",
          name: "Pegasus.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          subtitle: "Pegasus — Internal Ticket Management Platform",
          tech: ["React", "Vite", "Redux", "WebSocket", "Ant Design"],
          meta: {
            duration: "Dec 2023 – Oct 2024",
          },
          metrics: [
            { label: "Development cycle ↓", value: "20%" },
            { label: "Team productivity ↑", value: "30%" },
            { label: "Management efficiency ↑", value: "24%" },
          ],
          description: [
            "Led frontend development for Pegasus, an internal ticket management platform used by 100+ team members.",
            "Mentored and reviewed code for a frontend team of 4 engineers, improving consistency and maintainability.",
            "Built a modular component architecture using React and Vite, reducing development cycle time by 20%.",
            "Implemented real-time collaboration using WebSocket-based communication, reducing response times by 40%.",
            "Designed end-to-end ticket workflows that improved team productivity and operational visibility.",
          ],
        },
        {
          id: "work-ga-3",
          name: "Castor.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-40 left-5",
          subtitle: "Castor — Fleet Management Platform",
          tech: [
            "React",
            "Redux Toolkit",
            "Ant Design",
            "Tailwind CSS",
            "Hapi.js",
            "Node.js",
            "MySQL",
            "Camunda",
          ],
          meta: {
            duration: "Feb 2022 – Jan 2025",
          },
          metrics: [
            { label: "Page load time ↓", value: "40%" },
            { label: "Bundle size ↓", value: "20%" },
            { label: "User engagement ↑", value: "20%" },
          ],
          description: [
            "Led full-stack development of Castor, an enterprise fleet management platform serving 1000+ users.",
            "Built 50+ REST APIs and 20+ core features using Hapi.js, Node.js, and MySQL, supporting 500+ concurrent users.",
            "Architected frontend using React, Redux Toolkit, and Ant Design, reducing page load time by 40% through code splitting and lazy loading.",
            "Designed reusable component architecture and applied build optimizations, reducing bundle size by 20%.",
            "Developed an automated WhatsApp booking system using Meta APIs and Camunda, increasing user engagement by 20%.",
            "Led a team of 6 engineers, conducting code reviews and enforcing coding standards to reduce production issues.",
            "Established CI/CD pipelines using Bitbucket Pipelines, cutting deployment time from hours to minutes.",
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
        "Hey, I'm Ansul 👋 — a full-stack engineer who builds complete systems from React frontends to Node.js backends, with the DevOps infrastructure to keep everything running smoothly.",
        "I craft accessible, performant user interfaces and design APIs that are secure, scalable, and maintainable.",
        "I'm passionate about automation and CI/CD, building workflows that eliminate manual work and reduce deployment risk.",
        "I previously maintained React Big Schedule, an open-source scheduling library that now serves 2000+ weekly downloads.",
        "I believe great software comes from owning the full stack, collaborating closely with teams, and writing code that's still easy to understand six months later.",
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
    //   id: 1,
    //   name: "trash2.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-40 left-80",
    //   imageUrl: "/images/trash.png",
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
