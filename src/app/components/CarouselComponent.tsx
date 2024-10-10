import { Flex, Icon, useBreakpointValue } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../carousel.module.css"
import { Project } from "../page";
import ProjectCard from "./ProjectCard";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
interface CarouselComponentInt {
    // children: React.ReactNode,
    displayedProjects: Project[]
}

export default function CarouselComponent({ displayedProjects }: CarouselComponentInt) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const CustomLeftArrow = ({ onClick, ...rest }: any) => {
        const {
            carouselState: { currentSlide, deviceType }
        } = rest;
        // setCurrentSlideIndex(currentSlide)
        return (
            <button onClick={onClick} style={{ position: "absolute", left: "16px" }}>
                <Icon as={CiCircleChevLeft} w="40px" h="40px" />
            </button>
        )
    }

    const CustomRightArrow = ({ onClick, ...rest }: any) => {
        const {
            carouselState: { currentSlide, deviceType }
        } = rest;
        // setCurrentSlideIndex(currentSlide)

        return (
            <button onClick={onClick} style={{ position: "absolute", right: "16px" }}>
                <Icon as={CiCircleChevRight} w="40px" h="40px" />
            </button>
        )
    }

    const autoPlayCondition = useBreakpointValue({ base: true, md: false })

    return (
        <div>
            <Carousel swipeable={true}
                draggable={true}
                showDots={true}
                centerMode={true}
                responsive={responsive}
                ssr={false}
                infinite={true}
                autoPlay={autoPlayCondition}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                // customTransition="all .5"
                // transitionDuration={500}
                containerClass="carousel-container"
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                // arrows
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item"
            >
                {
                    displayedProjects.map((project: Project, index: number) => {
                        // console.log("project", project)
                        return (
                            <Flex
                                className="carousel-item"
                                // width="100%"  // Ensures the item takes full width
                                // maxWidth="300px" // Set a maxWidth to avoid growing
                                justifyContent="center"
                                key={index}
                            >
                                <ProjectCard key={index} index={index} project={project} active={index == 1} />

                            </Flex>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}