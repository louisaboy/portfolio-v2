"use client"
import { useEffect } from "react"

export default function HandleScroll() {
    function handleScroll() {
        console.log('went to add scroll')
    }

    useEffect(() => {
        const container = document.querySelector('main')
        if (container) {
            container.addEventListener('scroll', handleScroll, false)
            return () => container.removeEventListener('scroll', handleScroll)

        }
    }, [])
    return (
        <div></div>
    )
}