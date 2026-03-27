import { FaPaintBrush, FaNode, FaGitAlt } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { SiJira } from "react-icons/si";

import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  profile3,
  profile4,
  profile5,
  profile6,
  figma,
  sketch,
  xd,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  emailicon,
  messengericon,
  whatsappicon,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Testimonials" },
  { name: "Contact" },
];

export const services = [
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    color: "#f97316",
    colorRGB: "249,115,22",
    description: `Crafting visually stunning and user-centric designs that ensure seamless user experiences.`,
  },
  {
    title: "Web Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138,43,226",
    description: `Building responsive, dynamic, and high-performance websites using modern technologies.`,
  },
  {
    title: "Content Creation",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Creating engaging content from blogs to documentation, aligned with your brand goals.`,
  },
];

export const skills = [
  {
    title: "UI/UX",
    data: [
      { skill: "Figma", level: "Experienced", logo: figma },
      {
        skill: "Canva",
        level: "Intermediate",
        logo: "https://img.icons8.com/color/48/canva.png",
      },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      { skill: "HTML", level: "Experienced", logo: html },
      { skill: "CSS", level: "Experienced", logo: css },
      { skill: "JavaScript", level: "Experienced", logo: javascript },
      { skill: "Tailwind", level: "Intermediate", logo: tailwind },
      { skill: "Bootstrap", level: "Experienced", logo: bootstrap },
      { skill: "React", level: "Experienced", logo: react },

      {
        skill: "Redux",
        level: "Experienced",
        logo: "https://img.icons8.com/color/48/redux.png",
      },
    ],
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Node.js",
        level: "Experienced",
        logo: "https://img.icons8.com/color/48/nodejs.png",
      },
      {
        skill: "Express.js",
        level: "Experienced",
        logo: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
      },

      {
        skill: "MongoDB",
        level: "Experienced",
        logo: "https://img.icons8.com/color/48/mongodb.png",
      },
    ],
  },
  {
    title: "Project Management",
    data: [
      {
        skill: "Git",
        level: "Experienced",
        logo: "https://img.icons8.com/color/48/git.png",
      },
      {
        skill: "GitHub",
        level: "Experienced",
        logo: "https://img.icons8.com/ios-glyphs/48/000000/github.png",
      },
      {
        skill: "Jira",
        level: "Intermediate",
        logo: "https://img.icons8.com/color/48/jira.png",
      },
      {
        skill: "GitHub Actions",
        level: "Intermediate",
        logo: "https://img.icons8.com/color/48/github.png",
      },

      {
        skill: "Docker",
        level: "Beginner",
        logo: "https://img.icons8.com/color/48/docker.png",
      },
    ],
  },
];

export const projects = [
  {
    title: "AI Powered School",
    image: project1,
    category: "UI/UX",
    description: `Revolutionizing education with personalized AI features and seamless interfaces.`,
    demoLink: "https://example.com/ai-powered-school",
    link: "https://www.google.com",
    stacks: [{ name: "XD", logo: xd }],
  },
  {
    title: "E-Commerce Application",
    image: project2,
    category: "Web",
    description: `A modern shopping interface with secure transactions and personalized UX.`,
    demoLink: "https://example.com/e-commerce",
    link: "https://www.google.com",
    stacks: [
      { name: "ReactJs", logo: react },
      { name: "XD", logo: xd },
      { name: "CSS", logo: css },
      { name: "JavaScript", logo: javascript },
    ],
  },
];

export const testimonials = [
  {
    avatar: profile3,
    name: "Samuel Eze",
    review: "Excellent work and great communication!",
  },
  {
    avatar: profile4,
    name: "Emmanuel Joseph",
    review: "Truly talented and reliable developer.",
  },
];

export const contactInfo = [
  {
    name: "Email",
    value: "pratikbiswal1997@gmail.com",
    link: "mailto:pratikbiswal1997@gmail.com?subject=Hiring%20Inquiry&body=Hello%20Pratik,%0A%0AI%20came%20across%20your%20portfolio...",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "#3873CD",
  },

  {
    name: "Messenger",
    value: "Message on Messenger",
    link: "https://m.me/100007430177819",
    icon: messengericon,
    btnIcon: <RiMessengerLine />,
    color: "rgb(0,132,255)",
  },
  {
    name: "WhatsApp",
    value: "+91 9556190293",
    link: "https://wa.me/919556190293",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(37,211,102)",
  },
];

export const socialHandles = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/pratikbiswal",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/pratikkumarbiswal/",
  },
  {
    name: "YouTube",
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/@pratikbks?sub_confirmation=1",
  },
];
