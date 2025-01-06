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
        <div className="relative min-h-screen bg-gray-900 text-white">
            {/* Back Button */}
            <button
                onClick={() => router.push("/")}
                className="p-2 hover:bg-gray-800 absolute top-10 left-5 rounded-full border border-gray-700 focus:outline-none">
                <ChevronLeft color="#fff" />
            </button>

            <Inner>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="px-6 py-8 lg:px-20 lg:py-10 mt-24 lg:mt-0">
                    <div className="lg:px-40">
                        <h1 className="text-5xl font-bold mb-4">Next.js</h1>
                        <p className="text-gray-400">March 25, 2024</p>

                        <img
                            src="/images/nextjs.webp"
                            alt="Next.js"
                            className="my-6 w-full rounded-xl shadow-lg"
                        />

                        <div className="space-y-6">
                            <p className="text-lg">Hi everyone,</p>
                            <p className="text-gray-300">
                                Today, I want to share insights into one of our favorite frameworks at Shilp: Next.js. Whether you&apos;re a seasoned developer or just starting out, this post will help you understand why we rely on it for building modern web applications.
                            </p>

                            <section>
                                <h2 className="text-3xl font-semibold mt-10">What is Next.js?</h2>
                                <p className="text-gray-300 mt-4">
                                    Next.js is a React-based framework that simplifies building high-performance web applications. It offers powerful features like server-side rendering (SSR), static site generation (SSG), and API routes right out of the box, making it a preferred choice for developers aiming to build scalable and optimized web solutions.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mt-10">Why We Love Next.js at Shilp</h2>
                                <div className="text-gray-300 mt-4 space-y-4">
                                    <p>
                                        One of the standout features of <a
                                            href="https://nextjs.org/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:underline">
                                            Next.js
                                        </a> is how easy it is to get started. With minimal setup, we can jump straight into creating robust features for our clients, saving valuable development time.
                                    </p>
                                    <p>
                                        Speed is another reason we trust Next.js. By leveraging techniques like pre-rendering and dynamic imports, it ensures lightning-fast load times, enhancing user experience and boosting SEO rankings.
                                    </p>
                                    <p>
                                        SEO optimization is a breeze with Next.js. Its server-side rendering capabilities ensure search engines can effectively crawl and index content, which helps our clients gain better visibility online.
                                    </p>
                                    <p>
                                        Styling is seamless with Next.js. Whether it&apos;s regular CSS, Sass, or CSS-in-JS solutions, it integrates effortlessly, allowing us to maintain clean and scalable design systems.
                                    </p>
                                    <p>
                                        Additionally, the framework&apos;s active community and comprehensive documentation, backed by <a
                                            href="https://vercel.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:underline">
                                            Vercel
                                        </a>, make troubleshooting and scaling projects much simpler.
                                    </p>
                                </div>
                            </section>

                            <p className="text-gray-300 mt-10">
                                Thanks for reading! If you have questions or want to explore how we can help with your projects, feel free to reach out.
                            </p>

                            <p className="mt-10 font-medium text-xl">Venil Sutariya</p>
                        </div>
                    </div>
                </motion.div>
            </Inner>
        </div>
    );
};

export default NextJs;