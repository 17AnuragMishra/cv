import {
  BarepapersLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Anurag Mishra",
  initials: "Mr",
  location: "Lucknow, India",
  locationLink: "https://www.google.com/maps/place/lucknow",
  about:
    "FrontEnd/Backend Developer, Building a career in Software Development.",
  summary:
    "As a Developer, I specialize in taking products from concept to launch. I excel in leading teams and creating environments where individuals perform at their best. Currently, I work mostly with JavaScript, React, Node.js, and MongoDB. Fresher in terms of experience looking for remote work with companies worldwide.",
  avatarUrl: "https://i.postimg.cc/CLwnmNff/banner-01-jpg.png",
  personalWebsiteUrl: "#",
  contact: {
    email: "anuragmishra0521@gmail.com",
    tel: "+919755293141",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/17AnuragMishra",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/17AnuragMishra/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/17AnuragMishra",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "BBD National Institute of Technology and Management",
      degree: "Bachelor's of Technology in Computer Science Engineering",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Sugarcane AI",
      link: "https://play.sugarcaneai.dev/",
      badges: ["Remote"],
      title: "Gen AI & Prompt Intern",
      logo: ParabolLogo,
      start: "01/2024",
      end: "04/2024",
      description:
        "Increased prompt accuracy by 92% through refined design, surpassing peers and improving AI-generated content quality. Gained hands-on experience with tech stacks including Artificial Intelligence, Prompt writing and improved Analysis ability",
    },
  ],
  skills: [
    "C++",
    "Data Structure",
    "Java",
    "Object Oriented Programming",
    "JavaScript",
    "Python",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Postman",
    "Tailwind CSS",
    "Cloud Computing",
    "HTML/CSS"
  ],
  projects: [
    {
      title: "ThoughtVibe",
      techStack: [
        "Full Stack Developer",
        "JavaScript",
        "EJS",
        "Node.js",
        "MongoDB",
        "APIs"
      ],
      description:
        "ThoughtVibe also know as 'Share Your Experience' is a article based Blog application.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/17AnuragMishra/ThoughtVibe",
      }
    },
    {
      title: "Tabs Remainder",
      techStack: ["Side Project", "EJS", "HTML/CSS", ""],
      description:
        "Tabs Reminder is a browser extension designed to help users manage and organize their open tabs effectively by providing a reminder feature.",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://github.com/17AnuragMishra/Tabs-Reminder-Extension",
      },
    },
    {
      title: "innTrack",
      techStack: ["Python", "Django", "HTML/CSS", "JavaScript", "APIs", "PostgrSQL"],
      description:
        "We are developing a cutting-edge tracking system for logistics, called 'innTrack'.",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://github.com/17AnuragMishra/innTrack-",
      },
    }
  ],
} as const;
