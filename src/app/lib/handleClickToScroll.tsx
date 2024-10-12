
export const handleClickToScroll = (value: string) => {
    const el = document.getElementById(value)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: value == "skills" ? "start" : "end" });
    }
}