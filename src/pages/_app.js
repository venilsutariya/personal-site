import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import MouseFollower from "mouse-follower";
import gsap from "gsap"; // Import gsap
import { CursorContext } from "@/hooks/useCursor";
import "./style.css";
import '@/styles/styles.scss';

// Import your font
export const GeistMono = localFont({
  src: "../../public/fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function App({ Component, pageProps, router }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cursor, setCursor] = useState(null);
  const nextRouter = useRouter();

  useEffect(() => {
    // Ensure MouseFollower is correctly initialized
    if (typeof window !== 'undefined') {
      MouseFollower.registerGSAP(gsap);

      const cursorInstance = new MouseFollower({
        textClassName: "mf-cursor-text",
      });
      setCursor(cursorInstance);

      return () => {
        if (cursorInstance !== null) {
          cursorInstance.destroy();
        }
      };
    }
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const handleRouteChangeStart = () => {
      setScrollPosition(window.scrollY);
    };

    const handleRouteChangeComplete = () => {
      window.scrollTo(0, scrollPosition);
    };

    nextRouter.events.on("routeChangeStart", handleRouteChangeStart);
    nextRouter.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      nextRouter.events.off("routeChangeStart", handleRouteChangeStart);
      nextRouter.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [scrollPosition, nextRouter]);

  return (
    <div className={GeistMono.className}>
      <CursorContext.Provider value={cursor}>
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </CursorContext.Provider>
    </div>
  );
}