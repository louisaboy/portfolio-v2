import { Flex, Text, Image, Icon, IconButton, Button } from "@chakra-ui/react"
import { Project } from "../page"
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FaLink } from "react-icons/fa";

interface ProjectCardInt {
    project: Project
    active: boolean
    index: number;
}

export default function ProjectCard({ project, active, index }: ProjectCardInt) {
    const width = 300
    const height = 350
    const [isHovering, setIsHovering] = useState<boolean>(false)
    const router = useRouter()
    return (
        <Flex
            // w={width / (active ? 1 : 1.2)} h={height / (active ? 1 : 1.2)}
            w={{ base: "400px" }} h={{ base: "250px", xl: "350px" }}
            display="block"
            background="background.200"
            // borderRadius={active ? "32px" : "16px"}
            // backgroundImage="url(https://placehold.co/400)"
            // objectFit="cover"
            // backgroundPosition="center"
            // backgroundRepeat="no-repeat"
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
        >
            <motion.div
                style={{ width: "100%", height: "100%" }}
                variants={{
                    initial: {
                        opacity: 1,
                    },
                    onHover: {
                        opacity: 0.3,
                    }
                }}
                initial="hidden"
                animate={isHovering ? "onHover" : "initial"}
                transition={{ duration: 0.25, }}
            >
                <Image
                    src={project?.url} w="100%" h="100%" objectFit={isHovering ? "contain" : "cover"} />
            </motion.div>
            {isHovering && (
                <motion.div
                    style={{
                    }}
                    variants={{
                        hidden: {
                            opacity: 0,
                        },
                        visible: {
                            opacity: 1,
                        }
                    }}
                    initial="hidden"
                    animate={isHovering ? "visible" : "hidden"}
                    transition={{ duration: 0.25, }}
                >
                    <Flex px={{ base: 8 }} gap={{ base: 2, xl: 4 }} py={{ base: 8, }} w="100%" h="100%" position="absolute" top='0' left='0' direction='column' justifyContent="flex-end">
                        <Flex className="link-container" gap="2" alignItems="center">
                            {(project?.category == "web-app" && project?.github != "") && (
                                <Link href={project?.github} target="_blank" passHref>
                                    <Button borderRadius="full" w={{ base: "40px" }} h={{ base: "40px" }} p="0" _hover={{ bg: { base: "none", lg: "rgba(255,255,255, 0.4)" }, color: "foreground.100" }}
                                        bg="none" color="foreground.100" fontSize={{ base: "16px", xl: "20px" }}>
                                        <Icon
                                            as={FiGithub} aria-label="link-icon"
                                        />
                                    </Button>
                                </Link>
                            )}
                            {((project?.category == "web-app" || project?.category == "ui-ux") && project?.prod_link != "") && (
                                <Link href={project?.prod_link} target="_blank" passHref>
                                    <Button borderRadius="full" w={{ base: "30px", xl: "40px" }} h={{ base: "30px", xl: "40px" }} p="0" _hover={{ bg: { base: "none", lg: "rgba(255,255,255, 0.4)" }, color: "foreground.100" }}
                                        bg="none" color="foreground.100" fontSize={{ base: "16px", xl: "20px" }}>
                                        <Icon
                                            as={FaLink} aria-label="link-icon"
                                        />
                                    </Button>
                                </Link>
                            )}

                        </Flex>
                        <Text fontWeight="bold" size={{ base: "sm", xl: "md" }}>{project?.title}</Text>
                        <Text size={{ base: "xs", xl: "sm" }}>{project?.description}</Text>
                        <Flex wrap="wrap" gap={{ base: 1, xl: 2 }}>
                            {project?.tech_stack.map((skill: string, index: number) => {
                                return (
                                    <Flex key={index} bg="rgba(255,255,255,0.09)" borderRadius="full" px={{ base: 2, xl: 4 }} py={{ base: 1 }}>
                                        <Text size={{ base: "xs", xl: "sm" }}>{skill}</Text>
                                    </Flex>
                                )
                            })}
                        </Flex>
                    </Flex>

                </motion.div>
            )}
        </Flex>
    )
}