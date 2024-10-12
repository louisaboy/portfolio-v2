"use client"
import { Button, Flex, Icon, IconButton, Image, Text, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { ContainerPadding } from "../utils/layout-sizes";
import { IoMenu } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { handleClickToScroll } from "../lib/handleClickToScroll";
import Sidebar from "./Sidebar";
import { handleClickToCV } from "../lib/handleClickToCV";

export default function Navbar() {
    const contentRef = useRef<HTMLDivElement>(null)
    const {
        isOpen, onToggle,
    } = useDisclosure({ defaultIsOpen: false })

    const [scrolled, setScrolled] = useState(false);

    const onScroll = () => {
        if (window.scrollY >= 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    console.log("isOpen", isOpen)
    const handleOpenSidebar = () => {
        onToggle();
    }
    useEffect(() => {

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [contentRef, onScroll])
    return (
        <>
            <Flex
                id="navbar"
                overflow="hidden"
                bg={scrolled ? "background.200" : "none"} color="foreground.100"
                position="fixed"
                top="0"
                w="100vw" h={{ base: "80px" }}
                maxW="100%"
                {...ContainerPadding}
                py={{ base: "12px", xl: scrolled ? "24px" : "64px" }}
                zIndex="1000"
                justifyContent="space-evenly"
                transition="0.32s ease-in-out"
                ref={contentRef}
            >
                <Flex display={{ base: "flex", lg: "none" }} w="100%" gap="16px"
                    alignItems="center" justifyContent="flex-start">
                    <IconButton _hover={{ bg: "rgba(255, 255, 255, 0.4)", px: "1", borderRadius: "6px" }}
                        onClick={() => { handleOpenSidebar() }}
                        borderRadius="none"
                        color="white"
                        bg="none"
                        aria-label="menu-outline"
                        as={IoMenu}
                        w="40px" h="40px" />
                </Flex>
                <Flex alignItems="center" w="100%" _hover={{}} onClick={() => handleClickToScroll("home")} cursor="pointer">
                    <Text
                        alignItems="center" justifyContent="flex-start"
                        background="linear-gradient(90deg, #FC00FF 0%, #00DBDE 80%)"
                        backgroundClip="text"
                        size={{ base: "lg" }}
                    // textShadow="2px 5px 10px 10px #000"
                    >
                        {"allen.dev"}

                    </Text>
                </Flex>


                {/* DESKTOP VIEW */}
                <Flex display={{ base: "none", lg: "flex" }} gap="16px"
                    w="100%"
                    alignItems="center" justifyContent="center"
                >
                    <Button
                        variant="basic"
                        onClick={() => handleClickToScroll("home")}
                        size={{ base: "sm", xl: "md" }}
                    >
                        <Text size={{ base: "sm" }} fontWeight={700}>
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

                <Flex w="100%"
                    alignItems="center" justifyContent="flex-end">
                    <Button
                        variant="solid"
                        position="relative"
                        px={{ base: "8" }}
                        border="none"
                        color={{ base: "foreground.100", xl: "background.200" }}
                        background={{ base: "none", xl: "foreground.100" }}
                        _hover={{
                            _before: {
                                width: "100%",
                            },
                            boxShadow: "3px 0px 7.4px -1px #00DBDE, -5px 0px 7.4px -1px #FC00FF",

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
                            background: "linear-gradient(90deg, #FC00FF 0%, #00DBDE 100%)",
                            // border: "1px solid",
                            // borderColor: "primary.100",
                            transition: "all 0.5s ease"
                        }}/* Download CV Button */
                        overflow="hidden"
                        onClick={() => handleClickToCV()}
                    >
                        <Flex zIndex="1000" justifyContent="center" alignItems="center" gap="4px">
                            <Icon
                                as={FiDownload}
                                fontWeight="bold"
                                fontSize={{ base: "28px", xl: "20px" }}
                            />
                            <Text display={{ base: "none", xl: "block" }} color='background.200' fontWeight={700}>
                                Download CV
                            </Text>

                        </Flex>

                    </Button>


                </Flex>
            </Flex >
            <Sidebar isOpen={isOpen} />
        </>

    )
}