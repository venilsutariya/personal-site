import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Inner from "@/components/Inner";
import { useLenisScroll } from "@/hooks/use-lenis-scroll";
import { useEffect } from "react";

const FullStackWorkflows = () => {
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
                        <h1 className="text-5xl font-bold mb-4">Optimizing Full-Stack Workflows</h1>
                        <p className="text-gray-400">January 6, 2025</p>

                        <div className="space-y-6 mt-5">
                            <p className="text-lg">Hi everyone,</p>
                            <p className="text-gray-300">
                                After five years in the trenches of full-stack development, I've learned that optimizing workflows is not just about faster coding—it's about smarter collaboration, efficient tools, and structured processes. Today, I’ll share key insights and strategies to help you streamline your workflows and deliver impactful solutions consistently.
                            </p>

                            <section>
                                <h2 className="text-3xl font-semibold mt-10">1. Choose the Right Tech Stack</h2>
                                <p className="text-gray-300 mt-4">
                                    A well-balanced tech stack can significantly impact your productivity. Over the years, I’ve settled on using modern frameworks like <strong>Next.js</strong> for frontend development, paired with a robust backend like <strong>Node.js</strong> or <strong>Express</strong>. Selecting tools that complement your team’s expertise ensures seamless collaboration and minimizes onboarding time for new developers.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mt-10">2. Automate Repetitive Tasks</h2>
                                <p className="text-gray-300 mt-4">
                                    Automation is a game-changer. From CI/CD pipelines using GitHub Actions or Jenkins to infrastructure provisioning with Terraform, automating repetitive tasks saves countless hours. My workflow heavily relies on tools like <strong>Prettier</strong> and <strong>ESLint</strong> to enforce coding standards and ensure consistency across projects.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mt-10">3. Streamline Collaboration</h2>
                                <p className="text-gray-300 mt-4">
                                    Effective communication is the backbone of any successful project. Over the years, tools like <strong>Slack</strong>, <strong>Notion</strong>, and <strong>Figma</strong> have become indispensable in my workflow. Clear documentation, shared design systems, and transparent task tracking ensure every team member stays aligned and productive.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mt-10">4. Prioritize Code Quality</h2>
                                <p className="text-gray-300 mt-4">
                                    High-quality code reduces technical debt and accelerates future development. I recommend practices like <strong>test-driven development (TDD)</strong>, regular code reviews, and using tools like <strong>SonarQube</strong> to identify vulnerabilities. Adopting a modular architecture also makes your codebase easier to scale and maintain.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mt-10">5. Monitor and Optimize</h2>
                                <p className="text-gray-300 mt-4">
                                    Once your application is live, monitoring becomes crucial. Tools like <strong>New Relic</strong>, <strong>Sentry</strong>, and <strong>Prometheus</strong> provide real-time insights into performance and errors. Regularly optimizing database queries, caching strategies, and API responses ensures your app stays responsive under heavy traffic.
                                </p>
                            </section>

                            <p className="text-gray-300 mt-10">
                                Thanks for reading! I hope these strategies inspire you to refine your full-stack workflows. If you have any questions or want to share your experiences, feel free to connect with me.
                            </p>

                            <p className="mt-10 font-medium text-xl">Venil Sutariya</p>
                        </div>
                    </div>
                </motion.div>
            </Inner>
        </div>
    );
};

export default FullStackWorkflows;