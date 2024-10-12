import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./Homepage";

export type Project = {
  title: string;
  description: string;
  url: string;
  tech_stack: string[];
  prod_link: string;
  category: "web-app" | "ui-ux" | "artworks";
  github: string;
}

export default function Home() {

  const projects = [
    // WEB APPLICATIONS/APPLICATIONS
    {
      title: "In Love Language",
      description: "E-commerce web application specializing in tailor-made gifts",
      url: "/web-app/inlovelanguage.png",
      tech_stack: ["Typescript", "React", "MongoDB", "Google API", "Vercel", "Netlify", "NextJS"],
      prod_link: "https://inlovelanguage.com",
      category: "web-app",
      github: "",
    },
    {
      title: "ScholarScout",
      description: "Tutoring web application for students and tutors",
      url: "/web-app/scholarScout.png",
      tech_stack: ["Typescript", "Supabase", "Vercel"],
      prod_link: "https://scholar-scout.vercel.app/",
      category: "web-app",
      github: "https://github.com/azrielortega/scholar_scout",
    },
    {
      title: "Cuisina 2.0",
      description: "E-commerce web application specializing in tailor-made gifts",
      url: "/web-app/cuisina.png",
      tech_stack: ["Javascript", "MongoDB", "Handlebars", "Heroku"],
      prod_link: "",
      category: "web-app",
      github: "",
    },
    {
      title: "Colorful Image Colorization",
      description: "Colorizer web application for restoring and repairing pictures based from Instance-aware Image Colorization (2020)",
      url: "/web-app/colorful-image-colorization.png",
      tech_stack: ["Python", "Flask", "Heroku", "HTML"],
      prod_link: "",
      category: "web-app",
      github: "https://github.com/louisaboy/DIGIMAP-Group-6",
    },
    {
      title: "Allen Portfolio 1",
      description: "First personal portfolio by Allen Aboy",
      url: "/web-app/first-portfolio.png",
      tech_stack: ["Python", "Flask", "Heroku", "HTML"],
      prod_link: "https://allen-aboy-portfolio.vercel.app/",
      category: "web-app",
      github: "https://github.com/louisaboy/aboy-portfolio",
    },
    {
      title: "Pomogochi",
      description: "Productivity and Time-management mobile application",
      url: "/web-app/pomogochi.png",
      tech_stack: ["Java",],
      prod_link: "",
      category: "web-app",
      github: "https://github.com/louisaboy/MOBDEVE-Pomo-Gochi",
    },

    // USER INTERFACE/USER EXPERIENCE
    {
      title: "In Love Language Early Hi-Fi Prototype",
      description: "High fidelity prototype of the early version of the website",
      url: "/ui-ux/inlovelanguage-v1.png",
      tech_stack: ["Figma", "Canva", "Photoshop"],
      prod_link: "https://www.figma.com/proto/1BcwLseNDgfLVhsJxoeG4o/In-Love-Language-Project?node-id=174-2313&node-type=frame&t=e7W1P421IVpf5WQs-0&scaling=contain&content-scaling=fixed&page-id=6%3A3&starting-point-node-id=174%3A2313&show-proto-sidebar=1",
      category: "ui-ux",
      github: "",
    },
    {
      title: "Portfolio Version 1 Early Hi-Fi Prototype",
      description: "High fidelity prototype of the early version of the portfolio",
      url: "/ui-ux/portfolio-v1.png",
      tech_stack: ["Figma", "Canva"],
      prod_link: "https://www.figma.com/proto/fXUIeynk82O0pdZZJNU9Zr/Portfolio-v2?node-id=1-2&node-type=canvas&t=7nzNEhXCqlN9lt2p-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      category: "ui-ux",
      github: "",
    },
    {
      title: "MLS Enlistment Hi-Fi Prototype",
      description: "High fidelity prototype for an improvement of DLSU enlistment website",
      url: "/ui-ux/mls-dlsu.png",
      tech_stack: ["Figma"],
      prod_link: "https://www.figma.com/proto/rcKnoHJezVGzTsmxjwRMWW/STHCIUX?node-id=179-48&starting-point-node-id=179%3A48",
      category: "ui-ux",
      github: "",
    },
    {
      title: "VirtuStyleAI Hi-Fi Prototype",
      description: "High fidelity prototype for Accenture's Ideathon Competition in 2023",
      url: "/ui-ux/src-retail.png",
      tech_stack: ["Figma", "Midjourney"],
      prod_link: "https://www.figma.com/proto/pfACUAcIewi3XL5aJ6HQsg/SLC-Retail-Team-2-Prototype?node-id=186-1230&node-type=canvas&t=gL92l0hi0RTSdgr8-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=186%3A1230",
      category: "ui-ux",
      github: "",
    },
    // ARTWORKS
    {
      title: "Break the C-mulation",
      description: "Invitational poster for an amazing race event",
      url: "/artworks/break.jpg",
      tech_stack: ["Photoshop"],
      prod_link: "",
      category: "artworks",
      github: "",
    },
    {
      title: "Happy Chinese New Year",
      description: "Holiday poster in celebration of the chinese new year",
      url: "/artworks/chinese.png",
      tech_stack: ["Photoshop"],
      prod_link: "",
      category: "artworks",
      github: "",
    },
    {
      title: "C-Games: CODM",
      description: "Congratulatory poster for champions of our organization's contest",
      url: "/artworks/codm.png",
      tech_stack: ["Photoshop", "Canva"],
      prod_link: "",
      category: "artworks",
      github: "",
    },
    {
      title: "Good Luck Midterms",
      description: "Good luck poster for computer science students on their midterms exam",
      url: "/artworks/goodluck.png",
      tech_stack: ["Photoshop"],
      prod_link: "inlovelanguage.com",
      category: "artworks",
      github: "",
    },
    {
      title: "Tech Careers",
      description: "Invitational poster for our event which aims to equip job application skills",
      url: "/artworks/tech.png",
      tech_stack: ["Photoshop"],
      prod_link: "inlovelanguage.com",
      category: "artworks",
      github: "",
    },
    {
      title: "You Experience",
      description: "Invitational poster for our event that tackles UI/UX related-skills",
      url: "/artworks/youexperience.png",
      tech_stack: ["Photoshop"],
      prod_link: "inlovelanguage.com",
      category: "artworks",
      github: "",
    }
  ] as Project[]
  return (
    <main>
      <HomePage projects={projects} />
    </main>
  );
}
