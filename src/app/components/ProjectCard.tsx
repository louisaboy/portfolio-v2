import { Flex } from "@chakra-ui/react"
import { Project } from "../page"

interface ProjectCardInt {
    project: Project
    active: boolean
    index: number;
}

export default function ProjectCard({ project, active, index }: ProjectCardInt) {
    const width = 300
    const height = 350
    return (
        <Flex
            // w={width / (active ? 1 : 1.2)} h={height / (active ? 1 : 1.2)}
            w="300px" h="350px"
            display="block"
            bg="red.100"
        // borderRadius={active ? "32px" : "16px"}
        // backgroundImage="url(https://placehold.co/400)"
        // objectFit="cover"
        // backgroundPosition="center"
        // backgroundRepeat="no-repeat"
        >

            {"asdf " + index}
        </Flex>
    )
}