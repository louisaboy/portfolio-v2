import { Flex, Text } from "@chakra-ui/react";
import { SkillType } from "./SkillsPage";
import { gradientStyle } from "../utils/gradient-skills";

interface SkillComponentProps {
    word: SkillType
}
export default function SkillComponent({ word }: SkillComponentProps) {

    return (
        <Flex
            borderRadius="full"
            w="fit-content" h="fit-content"
            minW={{ base: "50px", xl: "100px" }}
            // color="defaut"
            px={{ base: 4 }} py={{ base: 1 }}
            {...gradientStyle[word?.category]}
            justifyContent="center"
        >
            <Text fontWeight="bold" textAlign="center" size={{ base: "xs", xl: "sm" }} color="background.200">{word.text}</Text>
        </Flex>
    )
}