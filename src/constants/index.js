import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  cpp,
  flutter,
  python,
  mysql,
  git,
  figma,
  docker,
  dipfab,
  coxidev,
  decrease,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Cpp",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  }


];

const experiences = [
  {
    title: "CTO, Data Scientist, LLM Engineer",
    company_name: "DipFab",
    icon: dipfab,
    iconBg: "#383E56",
    date: "July 2023 - September 2023",
    points: [
      "Led development and deployment of machine learning models.",
      "Oversaw engineering team and built a scalable web application with React.js.",
      "Implemented LLM technologies for natural language processing tasks.",
      "Collaborated with cross-functional teams to deliver high-quality products.",
      "Contributed to technical vision and strategic planning."
    ],
  },
  {
    title: "Back-end Developer, UX/UI Designer",
    company_name: "Coxidev",
    icon: coxidev,
    iconBg: "#E6DEDD",
    date: "June 2022 - July 2022",
    points: [
      "Developed and maintained web applications using PowerApps and Azure.",
      "Collaborated closely with clients to enhance UX/UI on their websites.",
      "Designed user-friendly interfaces and improved user experience.",
      "Optimized application performance and scalability.",
    ],
  },
  {
    title: "Web Developer, UX/UI Designer",
    company_name: "Decrease",
    icon: decrease,
    iconBg: "#383E56",
    date: "June 2023-July 2023",
    points: [
      "Designed user-friendly interfaces and improved user experience on Figma.",
      "Developing and maintaining a functionnal website",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "My own Portfolio",
    description:
      "This portfolio website features a seamless, fluid experience with 3D elements and clean animations, showcasing my projects and skills in an engaging and interactive manner.",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "three",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "framer",
        color: "purple-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Arti-0/Portfolio.git",
  },
  {
    name: "G.O.T. Mobile Application",
    description:
      "This mobile app lets you explore the world of Game of Thrones. You can browse through all the books, learn about the characters, and discover details about the various houses.",
    tags: [
      {
        name: "flutter",
        color: "orange-text-gradient",
      },
      {
        name: "dart",
        color: "blue-text-gradient",
      },
      {
        name: "swift",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Arti-0/FlutterApp3A.git",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, technologies, experiences, testimonials, projects };
