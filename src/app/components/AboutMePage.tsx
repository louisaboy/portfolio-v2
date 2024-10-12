"use client"

import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { ContainerPadding } from "../utils/layout-sizes";
import { useCallback, useRef, } from "react";
import { motion, } from "framer-motion";
import useScrollEffects from "../lib/useScrollEffects";
import useMotionAnimate from "../lib/useMotionAnimate";
import MotionDivWrapper from "../lib/MotionDivWrapper";

export default function AboutMePage() {
    const contentRef = useRef<HTMLDivElement>(null);

    const leftContainerStyle = useScrollEffects(contentRef, { verticalDisplacement: 50, threshold: 1000 });

    const rightContainerStyle = useScrollEffects(contentRef, { verticalDisplacement: 75, threshold: 1000 });

    const motionStyle = useMotionAnimate()
    return (
        <Flex
            id="about-me"
            w="100vw"
            h="100vh"
            maxW="100%"
            {...ContainerPadding}
            bg="background.200"
            color="foreground.100"
            justify={{ base: "center", xl: "space-evenly" }}
            align="center"
            gap={{ base: "12px", xl: "64px" }}
            ref={contentRef}
            position="relative"
            direction={{ base: "column", xl: "row" }}
            scrollSnapAlign={{ base: "none", xl: "start" }}
            scrollSnapStop={{ base: "always" }}
        >
            <Flex position="absolute" display={{ base: "none", xl: "flex" }} w="55%" h="100%" justifyContent="space-between" alignItems="center">
                <Flex className="text-container" justifyContent="flex-start" zIndex={2} direction="column" w="80%"
                >
                    <MotionDivWrapper parentProps={motionStyle} childStyle={leftContainerStyle}>
                        <Heading size={{ base: "xs", xl: "sm" }}>About me</Heading>
                        <Flex direction="column" gap={{ base: "12px", xl: "32px" }}>
                            <Text textAlign="justify" size={{ base: "sm", xl: "md" }}>
                                {"I'm a freelance website developer with a BS in Computer Science, specializing in Software Technology from DLSU Manila."}
                            </Text>
                            {/* <Text textAlign="justify">
                            I've also gained experience as a full-stack developer in a startup, working in Agile teams to deliver efficient digital solutions.
                            Skilled in both front-end and back-end development, I’m passionate about building innovative, high-quality web experiences.
                        </Text> */}
                        </Flex>

                    </MotionDivWrapper>
                </Flex>
                <Flex w="100%" className="image-container" zIndex={1} justifyContent="flex-end" position="absolute" height="100vh" >
                    <MotionDivWrapper parentProps={motionStyle} childStyle={{ ...rightContainerStyle, height: "100%" }}>
                        {/* <Flex borderRadius="24px" h="200px" w="100%" background="foreground.100"></Flex> */}
                        <Flex h="100%" alignItems="end">
                            <Image src="allenPicture-v1.png" h="80%" bottom="0" />
                        </Flex>

                    </MotionDivWrapper>
                </Flex>
            </Flex>
            <Flex position="absolute" direction="column" gap="32px" display={{ base: "flex", xl: "none" }} w="100%" h="100%" justifyContent="flex-end" alignItems="center">
                <Flex className="text-container" justifyContent="flex-start" zIndex={2} direction="column" w="80%"
                >
                    <MotionDivWrapper parentProps={motionStyle} childStyle={leftContainerStyle}>
                        <Heading size={{ base: "xs", xl: "sm" }}>About me</Heading>
                        <Flex direction="column" gap={{ base: "12px", xl: "32px" }}>
                            <Text textAlign="justify" size={{ base: "sm", xl: "md" }}>
                                {"I'm a freelance website developer with a BS in Computer Science, specializing in Software Technology from DLSU Manila."}
                            </Text>
                            {/* <Text textAlign="justify">
                            I've also gained experience as a full-stack developer in a startup, working in Agile teams to deliver efficient digital solutions.
                            Skilled in both front-end and back-end development, I’m passionate about building innovative, high-quality web experiences.
                        </Text> */}
                        </Flex>

                    </MotionDivWrapper>
                </Flex>
                <Flex w="100%" className="image-container" zIndex={1} justifyContent="flex-end" height="fit-content" >
                    <MotionDivWrapper parentProps={motionStyle} childStyle={{ ...rightContainerStyle, height: "fit-content" }}>
                        {/* <Flex borderRadius="24px" h="200px" w="100%" background="foreground.100"></Flex> */}
                        <Flex h="100%" alignItems="end">
                            <Image src="allenPicture-v1.png" h="80%" bottom="0" />
                        </Flex>

                    </MotionDivWrapper>
                </Flex>
            </Flex>
        </Flex >
    );
}
