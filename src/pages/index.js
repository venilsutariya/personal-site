import { motion } from "framer-motion";
import Hero from "@/components/hero";
import Work from "@/components/work";
import Write from "@/components/write";
import Speak from "@/components/speak";
import Inner from "@/components/Inner";
import { useLenisScroll } from "@/hooks/use-lenis-scroll";
import { useEffect } from "react";

export default function Home() {
  useLenisScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Inner>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Hero />
        <Work />
        <Write />
        <Speak />
      </motion.div>
    </Inner>
  );
}
