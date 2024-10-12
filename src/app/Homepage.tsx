"use client"

import { Flex, Image } from "@chakra-ui/react"
import AboutMePage from "./components/AboutMePage"
import LandingPage from "./components/LandingPage"
import ProjectsPage from "./components/ProjectsPage"
import SkillsPage from "./components/SkillsPage"
import { Project } from "./page"
import Navbar from "./components/Navbar"

interface HomePageInt {
    projects: Project[]
}

export default function HomePage({ projects }: HomePageInt) {

    return (
        <div style={{ height: "100%" }}>
            <Navbar />

            <LandingPage />
            <AboutMePage />
            <SkillsPage />
            <ProjectsPage projects={projects} />

            <Flex position="fixed" top="0" left="0" marginTop="auto" marginBottom="auto" zIndex={1}>
                <Flex
                    className="blurred-circle"
                    style={{
                        width: "200px",
                        height: "200px",
                        // background: "rgba(217, 217, 217, 0.09)",
                        background: "linear-gradient(90deg, #FC00FF 0%, #00DBDE 100%)",

                        filter: "blur(100px)",
                    }}>
                </Flex>
            </Flex >
            <Flex position="fixed" bottom="0" right="0" marginTop="auto" marginBottom="auto" zIndex={0}>
                <Flex
                    className="blurred-circle"
                    style={{
                        width: "200px",
                        height: "200px",
                        // background: "rgba(217, 217, 217, 0.09)",
                        background: "linear-gradient(90deg, #FC00FF 0%, #00DBDE 100%)",

                        filter: "blur(100px)",
                    }}>
                </Flex>
            </Flex >
        </div>
    )
}