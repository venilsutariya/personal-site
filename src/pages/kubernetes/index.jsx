"use client";

import { useLenisScroll } from "@/hooks/use-lenis-scroll";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Inner from "@/components/Inner";

const KubernetesPage = () => {
    useLenisScroll();
    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <button onClick={() => router.push("/")} className="p-2 hover:bg-white/10 absolute top-10 left-5 rounded-full border">
                <ChevronLeft color="#fff" />
            </button>
            <Inner>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="px-10 py-5 lg:px-20 lg:py-10 mt-[100px] lg:mt-0">
                    <div className="lg:px-40">
                        <h1 className="text-4xl">Scaling with Kubernetes</h1>
                        <p className="text-[#fff]/50">July 8, 2024</p>
                        <img src="/images/kubernetes.webp" className="my-[24px] rounded-xl" alt="" />
                        <div>
                            <p className="mb-5">Hey everyone,</p>
                            <p className="text-[#fff]/50">I&apos;m excited to share how we use Kubernetes at Shilp to scale our applications. If you&apos;re interested in learning about this powerful tool, this post is for you! Let&apos;s get started and keep it simple.</p>
                            <div className="mt-10 font-semibold text-2xl">
                                What is Kubernetes?
                            </div>
                            <p className="mt-5 text-[#fff]/50">
                                Kubernetes, often called K8s, is an open-source platform that helps manage containerized applications in different environments. It&apos;s like having a supercharged control system for your applications, ensuring they run smoothly and efficiently.
                            </p>
                            <div className="mt-10 font-semibold text-2xl">
                                Why Kubernetes is Great for Scaling?
                            </div>
                            <div className="mt-5 text-[#fff]/50">
                                <p>
                                    Scaling an application means adjusting the resources allocated to it based on demand. Kubernetes makes this easy and efficient. It automatically adjusts the number of running instances of your application based on how much load it&apos;s under. This means you only use the resources you need, saving both time and money.
                                </p>
                                <p className="mt-5">
                                    Kubernetes also ensures that your application is always available. If one instance fails, Kubernetes can automatically start a new one to take its place. This reduces downtime and makes sure your users have a smooth experience.
                                </p>
                                <p className="mt-5">
                                    Additionally, Kubernetes can balance the load between instances, so no single server gets overwhelmed. This keeps everything running efficiently, even during high traffic periods.
                                </p>
                            </div>
                            <div className="mt-10 font-semibold text-2xl">
                                Why Developers Love Kubernetes?
                            </div>
                            <div className="mt-5 text-[#fff]/50">
                                <p>
                                    Kubernetes offers a lot of flexibility. It works with any containerized application, no matter what technology stack you&apos;re using. This means you can use Kubernetes with the tools and frameworks you already know and love.
                                </p>
                                <p className="mt-5">
                                    The community and support around Kubernetes are fantastic. There are plenty of tutorials, forums, and tools available to help you get started and solve any issues you might face. This makes it easier for developers to adopt and use Kubernetes in their projects.
                                </p>
                                <p className="mt-5">
                                    Thanks for reading! If you have any questions or want to learn more about how we use Kubernetes at Shilp, feel free to reach out.
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
        </>
    );
}

export default KubernetesPage;