import {
  mobile,
  backend,
  creator,
  web,
  ansible,
  javascript,
  typescript,
  html,
  css,
  lead,
  reactjs,
  PRANA,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  linux,
  starbucks,
  tesla,
  shopify,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Open Source",
    icon: backend,
  },
  {
    title: "Teacher",
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
    name: "ansible",
    icon: ansible,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Siemens DISW, Pune",
    icon: ansible,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Enhanced software installation procedures, using the open-source automation tool Ansible. ",
      "Successfully automated the installation and configuration of four complex applications.",
      "Experience in crafting shell scripts, and working with Fedora Linux to optimize system deployments and enhance operational efficiency",

    ],
  },
  {
    title: "Technical Associate Lead",
    company_name: "Google Developer Students' Club, WCE",
    icon: lead,
    iconBg: "#E6DEDD",
    date: "July 2022 - July 2023",
    points: [
      "Orchestrated internal hackathons, guiding student groups to ideate and develop web projects, leading to a spirited competition and recognition of their interest.",
      "Coordinated diverse events centered on Google technologies, such as Google Cloud Platform (GCP), Android Boot Camp, Flutter Boot Camp, and Hacktoberfest.",
      "Pivotal role in organizing insightful talk sessions, sharing and encouraging exploration of cutting-edge technologies within the student community.",
      
    ],
  },
  {
    title: "Assistant Club Service Director and Joint Editor",
    company_name: "Walchand Linux Users Group",
    icon: linux,
    iconBg: "#383E56",
    date: "July 2022 - July 2023",
    points: [
      "Presented at the national-level event LINUX DIARY, delivering a comprehensive Linux workshop to educate and empower 200 students.",
      "Featured as a presenter at the prestigious national event METAMORPHOSIS, where I shared insights and conducted sessions on Open Source Technologies, with a special focus on Golang.",
      "Actively contributed to the open-source community within and beyond the club by learning, sharing knowledge through blog posts, and organizing club services to foster a culture of continuous learning and collaboration. ",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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

const projects = [
  {
    name: "PRANA",
    description:
      "A hackathon winning Web-based platform and app acting as a one step solution for all the health related problems including Physical as well as Mental Health. The features Include different sections focusing on Physical Health, Mental Health, To do List, Pranachat",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "orange-text-gradient",
      },
    ],
    image: PRANA,
    source_code_link: "https://github.com/WceSahilOtari/SNAC",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
