"use client"
import { Button, Flex, Image, Heading } from "@chakra-ui/react";
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
    const [currentView, setCurrentView] = useState<string[]>([])
    const [displayedProjects, setDisplayedProjects] = useState<Project[]>(projects)

    const viewOptions = [
        // { label: "All", value: ["web-app", "ui-ux", "artworks"] },
        { label: "Website/Applications", value: "web-app" },
        { label: "User Interface/User Experience", value: "ui-ux" },
        { label: "Artworks", value: "artworks" },

    ] as ViewOptionType[]

    const handleChangeView = useCallback(async (value: string) => {
        let views = []
        if (currentView?.includes(value)) {
            views = currentView.filter((view: string) => view != value)
        } else {
            views = [...(currentView || []), value]
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

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 480 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 480, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <Flex id="projects"
            w="100vw" h={{ base: "100vh" }}
            maxW="100%"

            {...ContainerPadding}
            bg="background.200" color="foreground.100"
            direction="column"
            gap="32px"
            alignItems="center" justifyContent="center"
            ref={contentRef}
            scrollSnapAlign={{ base: "start" }}
            scrollSnapStop={{ base: "always" }}
        >
            <MotionDivWrapper parentProps={motionStyle} childStyle={headerStyle}>
                <Flex className="header-container" justify="center">
                    <Heading size={{ base: "xs", xl: "sm" }}>Projects</Heading>
                </Flex>
            </MotionDivWrapper>

            <Flex className="body-container" direction="column"
                justify="center"
                gap="32px"
                w="100%"
                zIndex={1}
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
                                    {view.label}
                                </Button>
                            )
                        }

                    </Flex>
                </MotionDivWrapper>

            </Flex>
            <Flex position="absolute" pt="12vh" zIndex={0}>
                <Image src="/ellipse-background.png" alt="blurred circle" h={{ base: "50vh", xl: "80vh" }} pointerEvents="none"
                    style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none" }} />
            </Flex>
        </Flex>
    )
}