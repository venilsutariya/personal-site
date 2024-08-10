"use client";

import { useLenisScroll } from "@/hooks/use-lenis-scroll";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Inner from "@/components/Inner";

const RustPage = () => {
    useLenisScroll();
    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Inner>
            <button onClick={() => router.push("/")} className="p-2 hover:bg-white/10 absolute top-10 left-5 rounded-full border">
                <ChevronLeft color="#fff" />
            </button>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="px-10 py-5 lg:px-20 lg:py-10 mt-[100px] lg:mt-0">
                <div className="lg:px-40">
                    <h1 className="text-4xl">Why Backend Developers Are Switching to Rust</h1>
                    <p className="text-[#fff]/50">July 8, 2024</p>
                    <img src="/images/rust.webp" className="my-[24px] w-full object-cover rounded-xl" alt="" />
                    <div>
                        <p className="mb-5">Hey everyone,</p>
                        <p className="text-[#fff]/50">I&apos;m excited to talk about a new trend we&apos;ve noticed at Shilp: backend developers are switching to Rust. If you&apos;re curious about why Rust is becoming so popular, this post is for you! Let&apos;s dive in and keep it simple.</p>
                        <div className="mt-10 font-semibold text-2xl">
                            What is Rust?
                        </div>
                        <p className="mt-5 text-[#fff]/50">
                            <a href="https://www.rust-lang.org/" target="_blank" className="text-blue-500 hover:underline">Rust</a> is a systems programming language focused on speed, memory safety, and parallelism. It&apos;s designed to help developers create fast and reliable software without fear of crashes and bugs.
                        </p>
                        <div className="mt-10 font-semibold text-2xl">
                            Why Rust is Better for Memory Safety?
                        </div>
                        <div className="mt-5 text-[#fff]/50">
                            <p>
                                Rust has been gaining a lot of love in the developer community for several reasons. Firstly, Rust ensures memory safety without needing a garbage collector, which means programs are less likely to crash or leak memory. This makes Rust a great choice for backend development where reliability is crucial.
                            </p>
                            <p className="mt-5">
                                Another big reason is performance. Rust is fast. It compiles to machine code, making it as fast as languages like C and C++. For backend developers, this means they can handle more requests with fewer resources, which is especially important for large-scale applications.
                            </p>
                            <p className="mt-5">
                                Rust also has excellent concurrency support, allowing developers to write safe, concurrent code. This makes it easier to take full advantage of multi-core processors, leading to better performance in server applications.
                            </p>
                            <p className="mt-5">
                                The Rust community is another strong point. There are lots of resources, libraries, and tools available, making it easier to get started and find help when needed. The community is very active and supportive, which is always a plus.
                            </p>
                            <p className="mt-5">
                                Thanks for reading! If you have any questions or want to learn more about why we love Rust at Shilp, feel free to reach out.
                            </p>
                        </div>
                        <div className="mt-10">
                            Venil Sutariya
                        </div>
                        <a href="https://shilp.co" target="_blank" className="text-blue-500 hover:underline">
                            Shilp Agency
                        </a>
                    </div>
                </div>
            </motion.div>
        </Inner>
    );
}

export default RustPage;