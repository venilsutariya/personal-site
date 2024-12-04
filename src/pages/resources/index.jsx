import Inner from "@/components/Inner";
import { Card } from "@/components/ui/card";
import { useLenisScroll } from "@/hooks/use-lenis-scroll";
import { resourcesList } from "@/lib/resourcesList";
import { motion } from "framer-motion";
import { ChevronLeft, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Resources = () => {
    useLenisScroll();
    const router = useRouter();

    return (
        <div>
            <button onClick={() => router.push("/")} className="p-2 hover:bg-white/10 absolute top-10 left-5 rounded-full border">
                <ChevronLeft color="#fff" />
            </button>
            <Inner>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="px-10 py-5 lg:px-20 lg:py-10 mt-[100px] lg:mt-0">
                    <div className="lg:px-40">
                        <h1 className="text-4xl">Design and development resources</h1>
                        <div className="grid lg:grid-cols-2 gap-20 mt-20">
                            {resourcesList.map((item, index) => (
                                <Link href={item.href} target="_blank" key={index}>
                                    <Card className="border-none shadow-white/20 shadow-sm cursor-pointer" data-cursor-text="GitHub">
                                        <div className="relative w-full h-[250px]">
                                            {item.video ? (
                                                <VideoWithLoader videoSrc={item.video} />
                                            ) : (
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    layout="fill"
                                                    loading="lazy"
                                                    className="absolute object-cover rounded-3xl"
                                                    placeholder="blur"
                                                    blurDataURL={item.image}
                                                />
                                            )}
                                        </div>
                                        <div className="text-lg mt-4 ms-1">{item.title}</div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </Inner>
        </div>
    );
};

const VideoWithLoader = ({ videoSrc }) => {
    const [loading, setLoading] = useState(true);

    const handleVideoLoaded = () => {
        setLoading(false);
    };

    return (
        <div className="relative w-full h-full">
            {loading && (
                <div className="absolute inset-0 flex justify-center items-center bg-neutral-900 rounded-3xl">
                    <div className="loader">
                        <Loader2 className="animate-spin" />
                    </div>
                </div>
            )}
            <video
                playsInline
                src={videoSrc}
                className={`absolute object-cover rounded-3xl w-full h-full ${loading ? 'hidden' : 'block'}`}
                autoPlay
                loop
                muted
                onLoadedData={handleVideoLoaded}
            />
        </div>
    );
};

export default Resources;