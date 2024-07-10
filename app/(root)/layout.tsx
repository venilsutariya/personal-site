"use client";

import gsap from "gsap";
import MouseFollower from "mouse-follower";
import { useEffect, useState } from "react";
import "./style.css";
import Lenis from "lenis";
import { CursorContext } from "@/useCursor";

interface Props {
    children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
    const [cursor, setCursor] = useState<MouseFollower | null>(null);

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    useEffect(() => {
        MouseFollower.registerGSAP(gsap);

        const cursorInstance = new MouseFollower({
            textClassName: 'mf-cursor-text'
        });
        setCursor(cursorInstance);

        return () => {
            if (cursorInstance !== null) {
                cursorInstance.destroy();
            }
        };
    }, []);

    return (
        <main>
            <CursorContext.Provider value={cursor}>
                {children}
            </CursorContext.Provider>
        </main>
    );
}

export default RootLayout;