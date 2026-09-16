import { useEffect } from "react";
import "./RainbowGlowCursor.css";

export default function RainbowGlowCursor() {
    useEffect(() => {
        // Disable the effect for touch devices
        const isTouchDevice =
            window.matchMedia("(hover: none), (pointer: coarse)").matches;

        if (isTouchDevice) return;

        const root = document.documentElement;

        const handleMove = (event) => {
            root.style.setProperty("--cursor-x", `${event.clientX}px`);
            root.style.setProperty("--cursor-y", `${event.clientY}px`);
        };

        window.addEventListener("mousemove", handleMove, {
            passive: true,
        });

        return () => {
            window.removeEventListener("mousemove", handleMove);

            root.style.removeProperty("--cursor-x");
            root.style.removeProperty("--cursor-y");
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
            aria-hidden="true"
        >
            <div className="cursor-glow" />
        </div>
    );
}