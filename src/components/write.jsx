"use client";

import { useCursor } from "@/hooks/useCursor";
import { useRouter } from "next/navigation";

const Write = () => {
    const router = useRouter();
    const cursor = useCursor();

    return (
        <div className="mt-[100px] px-10 py-5 lg:px-20 lg:py-10">
            <div className="lg:ps-40">
                <div className="text-4xl">Write</div>
                <p className="mt-[24px] lg:max-w-[700px] text-opacity-50">
                    I really enjoy writing because it allows me to express my thoughts and ideas clearly and creatively. turning words into meaningful stories and engaging content brings me a lot of satisfaction.
                </p>
                <div className="mt-[50px]">
                    <div className="grid lg:grid-cols-4 gap-x-4 gap-y-8">
                        <div onClick={() => {
                            router.push("/nextjs");
                            cursor?.removeText();
                        }} data-cursor-text="Read" className="cursor-pointer">
                            <img src="/images/journal3.webp" className="lg:h-[200px] lg:w-[300px]" alt="write1" />
                            <div className="mt-[10px]">Next.js</div>
                        </div>
                        <div onClick={() => {
                            router.push("/rust");
                            cursor?.removeText();
                        }} data-cursor-text="Read" className="cursor-pointer">
                            <img src="/images/journal2.webp" className="lg:h-[200px] lg:w-[300px]" alt="write2" />
                            <div className="mt-[10px]">Why backend developers are switching to rust</div>
                        </div>
                        <div
                            onClick={() => {
                                router.push("/kubernetes");
                                cursor?.removeText();
                            }}
                            data-cursor-text="Read" className="cursor-pointer">
                            <img src="/images/journal3.webp" className="lg:h-[200px] lg:w-[300px]" alt="write3" />
                            <div className="mt-[10px]">Scaling with Kubernetes</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Write;