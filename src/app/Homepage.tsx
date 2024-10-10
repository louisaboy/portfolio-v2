"use client"

import AboutMePage from "./components/AboutMePage"
import LandingPage from "./components/LandingPage"
import ProjectsPage from "./components/ProjectsPage"
import SkillsPage from "./components/SkillsPage"
import { Project } from "./page"

interface HomePageInt {
    projects: Project[]
}

export default function HomePage({ projects }: HomePageInt) {

    return (
        <>
            <LandingPage />
            <AboutMePage />
            <SkillsPage />
            <ProjectsPage projects={projects} />
        </>
    )
}