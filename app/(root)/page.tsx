"use client";

import { motion } from "framer-motion";
import Hero from "@/components/hero";
import Work from "@/components/work";
import Write from "@/components/write";
import Speak from "@/components/speak";

export default function Home() {

  return (
    <>
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
    </>
  );
}
