"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ParallaxEffect: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);

    // Handle the scroll event
    const handleScroll = () => {
        // Capture the current scroll position
        const scrollY = window.scrollY;
        console.log("scrollY sa sample", scrollY)

        // Update the state with the scroll position
        setOffsetY(scrollY);
    };

    // useEffect to add the scroll event listener on component mount
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div style={{ height: "200vh", overflow: "hidden" }}>
            <div
                style={{
                    position: "relative",
                    height: "100vh",
                    backgroundColor: "lightgray",
                }}
            >
                <motion.div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: 'red',
                        // backgroundImage: "url('your-image-url.jpg')", // Replace with your image
                        backgroundSize: "cover",
                        transform: `translateY(${offsetY * 0.5}px)`, // Apply the parallax effect
                        zIndex: -1,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "3rem",
                        color: "white",
                    }}
                >
                    Parallax Effect
                </div>
            </div>
        </div>
    );
};

export default ParallaxEffect;
