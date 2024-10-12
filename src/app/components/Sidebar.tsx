import { Button, Flex, Text, Icon, Slide } from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";
import { handleClickToScroll } from "../lib/handleClickToScroll";
import { handleClickToCV } from "../lib/handleClickToCV";
import { useEffect, useLayoutEffect } from "react";

interface SidebarProps {
    isOpen: boolean;
}
export default function Sidebar({ isOpen }: SidebarProps) {
    useLayoutEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'unset';
        return () => {
            document.body.style.overflow = 'unset'
        };
    }, [isOpen]);
    return (
        <Slide
            in={isOpen}
            direction="left"
            style={{ background: "#242527", zIndex: 10, position: "fixed", height: "100%", width: "100%", top: "80px", left: 0 }}
        >
            {/* DESKTOP VIEW */}
            <Flex gap="16px"
                w="100%"
                alignItems="flex-start"
                direction="column"
                px={{ base: 2 }} py={{ base: 8 }}
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
                <Button
                    variant="basic"
                    onClick={() => handleClickToCV()}
                    size={{ base: "sm", xl: "md" }}
                >
                    <Text fontWeight={700}>
                        Download CV
                    </Text>
                </Button>
            </Flex>
        </Slide>
    )
}