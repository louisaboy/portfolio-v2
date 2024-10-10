"use client"
import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { ContainerPadding } from "../utils/layout-sizes";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { IconType } from "react-icons";
import Link from "next/link";

type PlatformType = {
    icon: IconType,
    link: string
}

export default function Footer() {
    const social_media_platforms = [
        { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/allenaboy/" },
        { icon: FiGithub, link: "https://github.com/louisaboy" },
        { icon: RiFacebookFill, link: "https://web.facebook.com/louisallen.aboy" },
        { icon: IoMdMail, link: "mailto:l.a.aboy24@gmail.com" }
    ] as PlatformType[]
    return (
        <Flex id="footer"
            w="100vw" h="fit-content"
            maxW="100%"

            bg="background.100"
            {...ContainerPadding}
            wrap="wrap"
            scrollSnapAlign={{ base: "end" }}
            scrollSnapStop={{ base: "always" }}
        >
            <Flex className="left-container" direction="column" gap="16px"
                w="100%"
                justifyContent="center" alignItems="center"
            >
                <Heading size={{ base: "xs", xl: "sm" }} w="100%">
                    Let's work together
                </Heading>
                <Text size="md" w="100%">Contact me on the following platforms</Text>
            </Flex>
            <Flex className="right-container" gap="16px"
                w="100%"
                justifyContent="flex-end" alignItems="center"

            >
                {social_media_platforms.map((platform: PlatformType, index: number) =>
                    <Link href={platform.link}
                        target="_blank"
                        key={index}
                        passHref>
                        <Flex
                            borderRadius="full"
                            cursor="pointer"
                            _hover={{
                                bg: "background.300"
                            }}
                            w="50px" h="50px"
                            px={{ base: "12px" }} py={{ base: "12px" }}
                            justify="center" align="center"
                        >

                            <Icon as={platform.icon} w="100%" h="100%" color="foreground.100" />
                        </Flex>
                    </Link>
                )}
            </Flex>
        </Flex>
    )
}