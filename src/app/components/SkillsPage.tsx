import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ContainerPadding } from "../utils/layout-sizes";
import useScrollEffects from "../lib/useScrollEffects";
import { useRef } from "react";
import useMotionAnimate from "../lib/useMotionAnimate";
import { motion } from "framer-motion";
import MotionDivWrapper from "../lib/MotionDivWrapper";
import SkillComponent from "./SkillComponent";
import { gradientStyle } from "../utils/gradient-skills";

export type SkillType = {
    text: string;
    category: "front-end" | "back-end" | "data-analysis" | "other-library" | "ui-ux";
}

export default function SkillsPage() {
    const contentRef = useRef<HTMLDivElement>(null)

    const leftContainerStyle = useScrollEffects(contentRef, { verticalDisplacement: 75 });

    const rightContainerStyle = useScrollEffects(contentRef, { verticalDisplacement: 50 });

    const motionStyle = useMotionAnimate()

    const data = [
        { text: 'Javascript', category: "front-end" },
        { text: 'Typescript', category: "front-end" },
        { text: 'React', category: "front-end" },
        { text: 'Chakra-UI', category: "front-end" },
        { text: 'JQuery', category: "front-end" },
        { text: 'CSS', category: "front-end" },
        { text: 'HTML', category: "front-end" },
        { text: 'NodeJS', category: "back-end" },
        { text: 'MySQL', category: "back-end" },
        { text: 'OpensearchDB', category: "back-end" },
        { text: 'Jest', category: "back-end" },
        { text: 'Docker', category: "back-end" },
        { text: 'MongoDB', category: "back-end" },
        { text: 'NextJS', category: "back-end" },
        { text: 'Jupyter Notebook', category: "data-analysis" },
        { text: 'Python', category: "data-analysis" },
        { text: 'PostgreSQL', category: "data-analysis" },
        { text: 'Git', category: "version-control" },
        { text: 'Bitbucket', category: "version-control" },
        { text: 'GitHub', category: "version-control" },
        { text: 'Figma', category: "ui-ux" },
        { text: 'Adobe Photoshop', category: "ui-ux" },
        { text: 'Canva', category: "ui-ux" },
        { text: 'Google APIs', category: "other-library" },
        { text: 'MS Graph', category: "other-library" },
        { text: 'AWS S3', category: "other-library" },
    ] as SkillType[];

    return (
        <Flex id="skills"
            w="100vw" h={{ base: "fit-content" }}
            maxW="100%"
            {...ContainerPadding}
            bg="rgba(49, 50, 53, 0.2)" color="foreground.100"
            alignItems="center" justifyContent="center"
            direction="column"
            ref={contentRef}
            position="relative"
            zIndex={2}
            scrollSnapAlign={{ base: "none", xl: "center" }}
            scrollSnapStop={{ base: "always" }}
        >
            <MotionDivWrapper parentProps={motionStyle} childStyle={rightContainerStyle}>

                <Flex className="left-container" direction="column" w="100%"
                    justifyContent="center" alignContent="center" mb="64px"
                >
                    <Heading size={{ base: "xs", xl: "sm" }} textAlign="center">Skills and Tools</Heading>
                    <Text textAlign="justify" size={{ base: "sm", xl: "md" }}>
                        I have experience and profiency in over 24 different tech stacks ranging
                        from <span
                            style={{
                                background: gradientStyle?.["front-end"]?.background,
                                backgroundClip: "text",
                                color: "transparent",
                                fontWeight: "bold",
                            }}
                        >
                            front-end
                        </span>, <span
                            style={{
                                background: gradientStyle?.["back-end"]?.background,
                                backgroundClip: "text",
                                color: "transparent",
                                fontWeight: "bold",
                            }}
                        >
                            back-end
                        </span>, <span
                            style={{
                                background: gradientStyle?.["data-analysis"]?.background,
                                backgroundClip: "text",
                                color: "transparent",
                                fontWeight: "bold",
                            }}
                        >
                            data analysis
                        </span>, <span
                            style={{
                                background: gradientStyle?.["version-control"]?.background,
                                backgroundClip: "text",
                                color: "transparent",
                                fontWeight: "bold",
                            }}
                        >
                            version controls
                        </span>, <span
                            style={{
                                background: gradientStyle?.["ui-ux"]?.background,
                                backgroundClip: "text",
                                color: "transparent",
                                fontWeight: "bold",
                            }}
                        >
                            UI/UX
                        </span>, and <span
                            style={{
                                background: gradientStyle?.["other-library"]?.background,
                                backgroundClip: "text",
                                color: "transparent",
                                fontWeight: "bold",
                            }}
                        >
                            other libraries
                        </span>.
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