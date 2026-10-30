import aswesumaImage from "../assets/aswesuma.jpg";
import learnhubImage from "../assets/learnhub.jpg";
import eventManagementImage from "../assets/event-management.jpg";
import calculatorImage from "../assets/javascript-calculator.jpg";
import passwordGeneratorImage from "../assets/password-generator.jpg";
import endangeredSpeciesImage from "../assets/endangered-species.jpg";

const projectData = [
  {
    id: "aswesuma",
    title: "Aswesuma Benefits Application & Tracking System",
    description:
      "A benefits application and tracking system developed to support application management and review workflows.",
    technologies: ["Laravel", "React", "MySQL", "REST API", "JWT"],
    category: "Academic Project",
    image: aswesumaImage,
    github: "https://github.com/zainabmr46-code/aswasuma_benefit",
    featured: true,
  },
  {
    id: "learnhub",
    title: "LearnHub — Online Learning Platform",
    description:
      "An online learning platform designed to support course management and learning activities for students and instructors.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: "Personal Project",
    image: learnhubImage,
    github: "https://github.com/zainabmr46-code/udemy-clone",
    featured: true,
  },
  {
    id: "event-management",
    title: "Event Management System",
    description:
      "A desktop application developed to manage event-related information using object-oriented programming and database connectivity.",
    technologies: ["Java", "OOP", "MySQL", "JDBC"],
    category: "Academic Project",
    image: eventManagementImage,
    github: "https://github.com/zainabmr46-code/EventManagement",
    featured: true,
  },
  {
    id: "calculator",
    title: "JavaScript Calculator",
    description:
      "A web-based calculator designed to perform basic arithmetic operations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Personal Project",
    image: calculatorImage,
    github: "https://github.com/zainabmr46-code/javascript-calculator",
    featured: false,
  },
  {
    id: "password-generator",
    title: "Password Generator",
    description:
      "A JavaScript utility designed to generate random passwords.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Personal Project",
    image: passwordGeneratorImage,
    github:
      "https://github.com/zainabmr46-code/JavaScript-Password-Generator",
    featured: false,
  },
  {
    id: "endangered-species",
    title: "Endangered Species Website",
    description:
      "An educational website project focused on endangered species.",
    technologies: ["HTML", "CSS"],
    category: "Academic Project",
    image: endangeredSpeciesImage,
    github: "https://github.com/zainabmr46-code/Endangered-Species_",
    featured: false,
  },
];

export default projectData;
