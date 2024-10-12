import { Box, Button, Flex, Image, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { ContainerPadding } from "../utils/layout-sizes";
import { motion, useAnimation, useInView, useMotionValueEvent, useScroll, useTransform, useViewportScroll } from "framer-motion";
import { FadeInEffect, FadeSlideInEffect } from "../utils/animation-variants";
import { useEffect, useRef, useState } from "react";
import useScrollEffects from "../lib/useScrollEffects";
import useMotionAnimate from "../lib/useMotionAnimate";
import MotionDivWrapper from "../lib/MotionDivWrapper";

export default function LandingPage() {
    const handleClickToScroll = (value: string) => {
        const el = document.getElementById(value)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: value == "skills" ? "center" : "end" });
        }
    }
    const contentRef = useRef<HTMLDivElement>(null)

    const subContainerValue = useBreakpointValue({ base: 75, lg: 75 },)
    const mainContainerValue = useBreakpointValue({ base: 50, lg: 50 },)

    const subContainerStyle = useScrollEffects(contentRef, { verticalDisplacement: subContainerValue, isStarting: true });

    const mainContainerStyle = useScrollEffects(contentRef, { verticalDisplacement: mainContainerValue, isStarting: true });

    const motionStyle = useMotionAnimate()

    return (
        <Flex
            id="home"
            w="100vw" h={{ base: "100vh" }}
            maxWidth="100%"
            {...ContainerPadding}
            gap="32px"
            className="landing-page"
            bg="background.200" color="foreground.100"
            direction="column" alignItems="center" justifyContent="center"
            ref={contentRef}
            position="relative"
            py="0"
            marginTop="0"
            top="0"
            scrollSnapAlign={{ base: "none", xl: "start" }}
            scrollSnapStop={{ base: "always" }}
        >
            <Flex className="header" direction="column" gap="8px" zIndex={2}>
                <MotionDivWrapper parentProps={motionStyle} childStyle={subContainerStyle}>
                    <Text textAlign="center" size={{ base: "sm", xl: "md" }} >
                        Hi, my name is
                    </Text>
                </MotionDivWrapper>
                <MotionDivWrapper parentProps={motionStyle} childStyle={mainContainerStyle}>
                    <Heading textAlign="center" size={{ base: "sm", xl: "md" }}>
                        Allen Aboy
                    </Heading>
                </MotionDivWrapper>

            </Flex>
            <Flex className="body" direction="column" gap="32px" justifyContent="center" zIndex={2}>
                <MotionDivWrapper parentProps={motionStyle} childStyle={subContainerStyle}>

                    <Flex direction="column" textAlign="center" >
                        <Text size={{ base: "sm", xl: "md" }}>
                            I am passionate and dedicated developer,
                        </Text>
                        <Text size={{ base: "sm", xl: "md" }}>
                            mainly designs and builds website applications
                        </Text>
                    </Flex>
                </MotionDivWrapper>
                <MotionDivWrapper parentProps={motionStyle} childStyle={subContainerStyle}>
                    <Flex justifyContent="center">
                        <Button variant="solid" bg="primary.100" _hover={{ opacity: 0.6 }} onClick={() => handleClickToScroll("about-me")}>
                            <Text color="background.200" size={{ base: "sm", xl: "md" }}> Click to Learn More!</Text>
                        </Button>
                    </Flex>
                </MotionDivWrapper>
            </Flex >

        </Flex >

    )
}/* Ellipse 2 */
