import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Inner from "@/components/Inner";
import { useLenisScroll } from "@/hooks/use-lenis-scroll";
import { useEffect } from "react";

const NextJs = () => {
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
                    <h1 className="text-4xl">Next.js</h1>
                    <p className="text-[#fff]/50">March 25, 2024</p>
                    <img src="/images/nextjs.webp" className="my-[24px] rounded-xl" alt="" />
                    <div>
                        <p className="mb-5">Hey everyone,</p>
                        <p className="text-[#fff]/50">I&apos;m excited to share about an awesome tool we&apos;ve been using at Shilp called Next.js. If you&apos;re into web development or just curious about how we build our websites, this post is for you! I&apos;ll keep it simple, so let&apos;s get started.</p>
                        <div className="mt-10 font-semibold text-2xl">
                            What is Next.js?
                        </div>
                        <p className="mt-5 text-[#fff]/50">
                            Next.js is a framework built on top of React, one of the most popular JavaScript libraries for creating user interfaces. it makes building web applications easier and faster.
                        </p>
                        <div className="mt-10 font-semibold text-2xl">
                            Why We Love Next.js at Shilp?
                        </div>
                        <div className="mt-5 text-[#fff]/50">
                            <p>
                                We love <a href="https://nextjs.org/" target="_ blank" className="text-blue-500 hover:underline">Next.js</a> because it&apos;s very easy to set up. With just a few commands, we can start a new project quickly, which means we have more time to build cool features for our clients. Next.js also makes our websites load really fast. It uses smart techniques to ensure pages load almost instantly, which makes users happy and improves search engine rankings.
                            </p>
                            <p className="mt-5">
                                Next.js is also great for SEO. Since it can render pages on the server, search engines can easily read and index our content, helping our client&apos;s websites rank higher and attract more visitors. Another reason we like Next.js is that it only loads the JavaScript needed for the current page, which keeps things fast.
                            </p>
                            <p className="mt-5">
                                Styling websites is easy with Next.js too. It works with regular CSS and Sass, so we can keep our styles organized. There&apos;s also a big online community and lots of resources to help us solve any problems we face, thanks to <a href="https://vercel.com" target="_ blank" className="text-blue-500 hover:underline">Vercel</a>, the company behind Next.js.
                            </p>
                            <p className="mt-5">
                                Thanks for reading! If you have any questions or want to learn more about our projects, feel free to reach out.
                            </p>
                        </div>
                        <div className="mt-10">
                            Venil Sutariya
                        </div>
                        <a href="https://shilp.co" target="_blank" className="text-blue-500 hover:underline">
                            Shilp Agnecy
                        </a>
                    </div>
                </div>
            </motion.div>
        </Inner>
    );
}

export default NextJs;