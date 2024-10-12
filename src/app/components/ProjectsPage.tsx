"use client"
import { Button, Flex, Image, Text, Heading } from "@chakra-ui/react";
import { ContainerPadding } from "../utils/layout-sizes";
import { useCallback, useRef, useState } from "react";
import MotionDivWrapper from "../lib/MotionDivWrapper";
import useMotionAnimate from "../lib/useMotionAnimate";
import useScrollEffects from "../lib/useScrollEffects";
import { Project } from "../page";
import CarouselComponent from "./CarouselComponent";

type ViewOptionType = {
    label: string,
    value: string,
}

interface ProjectsPageInt {
    projects: Project[]
}

export default function ProjectsPage({ projects }: ProjectsPageInt) {
    const [currentView, setCurrentView] = useState<string[]>(["web-app"])
    const [displayedProjects, setDisplayedProjects] = useState<Project[]>(projects.filter((project: Project) => { return currentView.includes(project.category) }))

    const viewOptions = [
        { label: "Website/Applications", value: "web-app" },
        { label: "User Interface/User Experience", value: "ui-ux" },
        { label: "Artworks", value: "artworks" },

    ] as ViewOptionType[]

    const handleChangeView = useCallback(async (value: string) => {
        let views = []
        if (currentView?.includes(value)) {
            views = currentView.filter((view: string) => view != value)
        } else {
            views = [value]
        }
        setCurrentView(views)

        const conditionalViews = views.length == 0 ? ["web-app", "ui-ux", "artworks"] : views

        setDisplayedProjects(projects.filter((project: Project) => conditionalViews.includes(project.category)))
    }, [setCurrentView, setDisplayedProjects, currentView,])


    const contentRef = useRef<HTMLDivElement>(null)
    const headerStyle = useScrollEffects(contentRef)
    const mainCarouselStyle = useScrollEffects(contentRef)

    const tabCarouselStyle = useScrollEffects(contentRef, { verticalDisplacement: 50 })

    const motionStyle = useMotionAnimate()

    return (
        <Flex id="projects"
            w="100vw" h={{ base: "100vh" }}
            maxW="100%"
            bg="background.200"
            {...ContainerPadding}
            color="foreground.100"
            direction="column"
            gap="32px"
            alignItems="center" justifyContent="center"
            ref={contentRef}
            scrollSnapAlign={{ base: "none", xl: "start" }}
            scrollSnapStop={{ base: "always" }}
        >
            <MotionDivWrapper parentProps={motionStyle} childStyle={headerStyle}>
                <Flex className="header-container" justify="center" zIndex={2}>
                    <Heading size={{ base: "xs", xl: "sm" }}>Projects</Heading>
                </Flex>
            </MotionDivWrapper>

            <Flex className="body-container" direction="column"
                justify="center"
                gap="32px"
                w="100%"
                zIndex={2}
            >
                <MotionDivWrapper parentProps={motionStyle} childStyle={mainCarouselStyle}>
                    <CarouselComponent displayedProjects={displayedProjects} />
                </MotionDivWrapper>
                <MotionDivWrapper parentProps={motionStyle} childStyle={tabCarouselStyle}>
                    <Flex className="tab-container" gap="16px" justify="center" wrap="wrap">
                        {
                            viewOptions.map((view: ViewOptionType, index: number) =>
                                <Button
                                    key={index}
                                    variant={currentView.includes(view.value) ? "solid" : "solid_light"}
                                    onClick={() => handleChangeView(view.value)}
                                >
                                    <Text size={{ base: "xs", xl: "sm" }} {...(currentView.includes(view.value) ? { color: "background.200", fontWeight: "bold" } : { color: "foreground.100" })}>
                                        {view.label}
                                    </Text>
                                </Button>
                            )
                        }

                    </Flex>
                </MotionDivWrapper>

            </Flex>
        </Flex>
    )
}