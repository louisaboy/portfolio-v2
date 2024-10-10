"use client"
import { Button, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { ContainerPadding } from "../utils/layout-sizes";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {

    const handleClickToScroll = (value: string) => {
        const el = document.getElementById(value)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: value == "skills" ? "center" : "end" });
        }
    }
    return (
        <Flex
            id="navbar"
            overflow="hidden"
            bg="background.200" color="foreground.100"
            position="sticky"
            top="0"
            w="100vw" h={{ base: "80px" }}
            maxW="100%"

            {...ContainerPadding}
            zIndex="1000"
            justifyContent="space-between"
        >
            {/* DESKTOP VIEW */}
            <Flex display={{ base: "none", lg: "flex" }} gap="16px"
                w="100%"
                alignItems="center" justifyContent="flex-start"
            >
                <Button
                    variant="basic"
                    onClick={() => handleClickToScroll("home")}
                    size={{ base: "sm", xl: "md" }}
                >
                    <Text size={{ base: "sm", xl: "md" }} fontWeight={700}>
                        Home
                    </Text>
                </Button>
                <Button
                    variant="basic"
                    onClick={() => handleClickToScroll("about-me")}
                    size={{ base: "sm", xl: "md" }}
                >
                    <Text fontWeight={700}>
                        About Me
                    </Text>
                </Button>
                <Button
                    variant="basic"
                    onClick={() => handleClickToScroll("skills")}
                    size={{ base: "sm", xl: "md" }}
                >
                    <Text fontWeight={700}>
                        Skills
                    </Text>
                </Button>
                <Button
                    variant="basic"
                    onClick={() => handleClickToScroll("projects")}
                    size={{ base: "sm", xl: "md" }}
                >
                    <Text fontWeight={700}>
                        Projects
                    </Text>
                </Button>
                <Button
                    variant="basic"
                    onClick={() => handleClickToScroll("footer")}
                    size={{ base: "sm", xl: "md" }}
                >
                    <Text fontWeight={700}>
                        Contacts
                    </Text>
                </Button>
            </Flex>

            {/* MOBILE VIEW */}
            <Flex display={{ base: "flex", lg: "none" }} gap="16px"
                w="100%"
                alignItems="center" justifyContent="flex-start">
                <IconButton _hover={{ bg: "rgba(255, 255, 255, 0.4)", px: "1", borderRadius: "6px" }}

                    borderRadius="none"
                    color="white"
                    bg="none"
                    aria-label="menu-outline"
                    as={IoMenu}
                    w="40px" h="40px" />
            </Flex>

            <Flex w="100%"
                alignItems="center" justifyContent="flex-end">
                <Button
                    variant="solid"
                    position="relative"
                    // rightIcon={}
                    border="none"
                    color="black"
                    _hover={{
                        _before: {
                            width: "100%"
                        }
                    }}
                    _before={{
                        content: '""',
                        height: "100%",
                        position: "absolute",
                        borderRadius: "full",
                        left: 0,
                        top: 0,
                        width: "0%",
                        zIndex: 0,
                        background: "primary.100",
                        transition: "width 0.5s ease"
                    }}
                    overflow="hidden"
                >
                    <Flex zIndex="1000" justifyContent="center" alignItems="center" gap="4px">
                        <Text color='background.200' fontWeight={700}>
                            Download CV
                        </Text>
                        <Icon
                            as={FiArrowRight}
                        />
                    </Flex>

                </Button>
            </Flex>
        </Flex>
    )
}