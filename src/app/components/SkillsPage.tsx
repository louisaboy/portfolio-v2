import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ContainerPadding } from "../utils/layout-sizes";
import useScrollEffects from "../lib/useScrollEffects";
import { useRef } from "react";
import useMotionAnimate from "../lib/useMotionAnimate";
import { motion } from "framer-motion";
import MotionDivWrapper from "../lib/MotionDivWrapper";
import SkillComponent from "./SkillComponent";

export type SkillType = {
    text: string;
}

export default function SkillsPage() {
    const contentRef = useRef<HTMLDivElement>(null)

    const leftContainerStyle = useScrollEffects(contentRef, { verticalDisplacement: 75 });

    const rightContainerStyle = useScrollEffects(contentRef, { verticalDisplacement: 50 });

    const motionStyle = useMotionAnimate()

    const data = [
        { text: 'Javascript' },
        { text: 'Typescript', },
        { text: 'React', },
        { text: 'Chakra-UI' },
        { text: 'JQuery', },
        { text: 'CSS' },
        { text: 'HTML', },
        { text: 'NodeJS', },
        { text: 'MySQL' },
        { text: 'OpensearchDB', },
        { text: 'Jest' },
        { text: 'Docker', },
        { text: 'MongoDB', },
        { text: 'NextJS' },
        { text: 'Git', },
        { text: 'Bitbucket' },
        { text: 'GitHub', },
        { text: 'Jupyter Notebook', },
        { text: 'Python' },
        { text: 'PostgreSQL', },
        { text: 'Google APIs' },
        { text: 'MS Graph', },
        { text: 'AWS S3', },
        { text: 'Figma' },
        { text: 'Adobe Photoshop', },
        { text: 'Canva' },
    ] as SkillType[];

    return (
        <Flex id="skills"
            w="100vw" h={{ base: "fit-content" }}
            maxW="100%"
            {...ContainerPadding}
            bg="background.300" color="foreground.100"

            alignItems="center" justifyContent="center"
            direction="column"
            ref={contentRef}
            position="relative"
            scrollSnapAlign={{ base: "center", }}
            scrollSnapStop={{ base: "always" }}
        >
            <MotionDivWrapper parentProps={motionStyle} childStyle={rightContainerStyle}>

                <Flex className="left-container" direction="column" w="100%"
                    justifyContent="center" alignContent="center" mb="64px"
                >
                    <Heading size={{ base: "xs", xl: "sm" }} textAlign="center">Skills and Tools</Heading>
                    <Text textAlign="justify" size={{ base: "sm", xl: "md" }}>
                        I have experience and profiency in over 24 different tech stacks ranging
                        from front-end, back-end, frameworks, data analysis, version controls, UI/UX, and other libraries.
                    </Text>
                </Flex>

                <Flex wrap="wrap" justifyContent="center" gap="2">
                    {
                        data.map((word: SkillType, index: number) => {
                            return (
                                <SkillComponent word={word} key={index} />
                            )
                        })
                    }
                </Flex>
            </MotionDivWrapper>
        </Flex >
    )
}