"use client";

import { projectList } from "@/lib/projectList";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Work = () => {
    const [filter, setFilter] = useState("All");
    const techStack = ["All", "React.js", "Node.js", "Next.js", "MongoDB", "Tailwind", "Supabase", "Next Auth"];
    const router = useRouter();

    return (
        <div className="mt-[100px]">
            <div className="px-10 py-5 lg:px-20 lg:py-10">
                <div className="lg:ps-40 flex flex-wrap gap-4">
                    {techStack.map((tech) => (
                        <button
                            key={tech}
                            className={`border rounded-full py-1 px-3 transition-all ${filter === tech ? "bg-white text-black hover:bg-white" : "hover:bg-zinc-900"}`}
                            onClick={() => setFilter(tech)}
                        >
                            {tech}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-[50px] gap-4">
                {projectList.map((project, index) => {
                    const filterArray = project.filter.split(",");
                    if (filter === "All" || filterArray.includes(filter)) {
                        return (
                            <div key={index} className="px-4 lg:px-0 rounded-xl overflow-hidden">
                                <div
                                    className="custom-aspect-ratio cursor-pointer overflow-hidden z-50 relative group"
                                    onClick={() => router.push(project.href)}>
                                    <img
                                        src={project.imageUrl}
                                        alt={project.name}
                                        className="object-cover hover:opacity-80 transition-all imageani cursor-pointer shadow-[#1e1d1d]"
                                    />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-0 group-hover:h-full w-full hidden lg:flex justify-center items-center opacity-0 group-hover:opacity-100 bg-[#000]/50 backdrop-blur-xl transition-all">
                                        {project.name}
                                    </div>
                                </div>
                                <div className="py-3 flex flex-wrap gap-x-4">
                                    {project.view.includes("Github") && (
                                        <a data-cursor="-hidden" href={project?.githubUrl} target="_blank" className="py-1 px-3 rounded-full border border-white hover:bg-white hover:text-black">Github</a>
                                    )}
                                    {project.view.includes("View") && (
                                        <a data-cursor="-hidden" href={project?.viewUrl} target="_blank" className="py-1 px-3 rounded-full border border-white hover:bg-white hover:text-black">View</a>
                                    )}
                                </div>
                            </div>
                        )
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
}

export default Work;