import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const Resources = () => {
    const router = useRouter();

    return (
        <div className="mt-[100px] px-10 py-5 lg:px-20 lg:py-10">
            <div className="lg:ps-40">
                <div className="text-4xl">Resources</div>
                <p className="mt-[24px] lg:max-w-[700px] text-opacity-50">
                    Sharing tools, projects, and open-source solutions is my way of giving back to the community. From authentication boilerplates to interactive UI effects and innovative shaders, these resources reflect my passion for building and exploring. Whether you&apos;re diving into code or seeking inspiration, I hope these projects ignite creativity and solve real-world challenges in your tech journey.
                </p>
                <button
                    data-cursor="-hidden"
                    className="mt-[24px] rounded-full py-2 hover:text-black hover:bg-white px-3 border flex items-center gap-x-4"
                    onClick={() => router.push("/resources")}
                >
                    View Resources<ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
};