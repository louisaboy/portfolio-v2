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
}

export default function Home() {

  const projects = [
    {
      title: "In Love Language",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio aperiam expedita eveniet alias eos rem necessitatibus minima amet? Possimus necessitatibus quod culpa officia in accusamus, quo corrupti accusantium praesentium nihil! Tempora id rerum incidunt nobis consectetur nihil ullam autem, eum voluptas adipisci quibusdam voluptatibus atque placeat. Beatae, sed? Adipisci?",
      url: "",
      tech_stack: ["Typescript", "React", "MongoDB", "Google API", "Vercel"],
      prod_link: "inlovelanguage.com",
      category: "web-app",
    },
    {
      title: "In Love Language",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio aperiam expedita eveniet alias eos rem necessitatibus minima amet? Possimus necessitatibus quod culpa officia in accusamus, quo corrupti accusantium praesentium nihil! Tempora id rerum incidunt nobis consectetur nihil ullam autem, eum voluptas adipisci quibusdam voluptatibus atque placeat. Beatae, sed? Adipisci?",
      url: "",
      tech_stack: ["Typescript", "React", "MongoDB", "Google API", "Vercel"],
      prod_link: "inlovelanguage.com",
      category: "ui-ux",
    },
    {
      title: "In Love Language",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio aperiam expedita eveniet alias eos rem necessitatibus minima amet? Possimus necessitatibus quod culpa officia in accusamus, quo corrupti accusantium praesentium nihil! Tempora id rerum incidunt nobis consectetur nihil ullam autem, eum voluptas adipisci quibusdam voluptatibus atque placeat. Beatae, sed? Adipisci?",
      url: "",
      tech_stack: ["Typescript", "React", "MongoDB", "Google API", "Vercel"],
      prod_link: "inlovelanguage.com",
      category: "artworks",
    }
  ] as Project[]
  return (
    <main>
      <HomePage projects={projects} />
    </main>
  );
}
