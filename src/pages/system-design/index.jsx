import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Inner from "@/components/Inner";
import { useLenisScroll } from "@/hooks/use-lenis-scroll";
import { useEffect } from "react";

const SystemDesign = () => {
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
                        <h1 className="text-5xl font-bold mb-4">System Design</h1>
                        <p className="text-gray-400">January 6, 2025</p>

                        <img
                            src="/images/system-design.webp"
                            alt="System Design"
                            className="my-6 w-full rounded-xl shadow-lg"
                        />

                        <div className="space-y-6">
                            <p className="text-lg">Hi everyone,</p>
                            <p className="text-gray-300">
                                Today, let’s dive into the fascinating world of system design—a crucial skill for any experienced developer. Whether you're preparing for interviews or tackling complex architectural challenges, understanding system design is essential for creating scalable, reliable, and efficient applications.
                            </p>

                            <section>
                                <h2 className="text-3xl font-semibold mt-10">What is System Design?</h2>
                                <p className="text-gray-300 mt-4">
                                    System design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specific requirements. It involves making high-level choices that impact scalability, reliability, maintainability, and performance.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mt-10">Key Principles of System Design</h2>
                                <div className="text-gray-300 mt-4 space-y-4">
                                    <p>
                                        <strong>Scalability:</strong> A well-designed system can handle increased traffic or data volume by distributing the load across multiple servers, databases, or regions.
                                    </p>
                                    <p>
                                        <strong>Reliability:</strong> Ensuring the system continues to function even when components fail. Techniques like redundancy, failover mechanisms, and backups are vital.
                                    </p>
                                    <p>
                                        <strong>Performance:</strong> Minimizing latency and maximizing throughput by optimizing database queries, caching, and load balancing.
                                    </p>
                                    <p>
                                        <strong>Security:</strong> Protecting data and infrastructure from unauthorized access and ensuring compliance with regulations like GDPR or HIPAA.
                                    </p>
                                    <p>
                                        <strong>Maintainability:</strong> Designing modular and well-documented systems to make it easier for teams to add features or debug issues.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mt-10">Common Components in System Design</h2>
                                <div className="text-gray-300 mt-4 space-y-4">
                                    <p>
                                        <strong>Load Balancers:</strong> Distribute incoming requests across multiple servers to ensure no single server becomes overwhelmed.
                                    </p>
                                    <p>
                                        <strong>Databases:</strong> Choose between SQL or NoSQL databases based on your application’s needs. Techniques like sharding and replication improve scalability and reliability.
                                    </p>
                                    <p>
                                        <strong>Cache:</strong> Use tools like Redis or Memcached to store frequently accessed data and reduce load on the database.
                                    </p>
                                    <p>
                                        <strong>Message Queues:</strong> Implement asynchronous processing using tools like Kafka or RabbitMQ.
                                    </p>
                                    <p>
                                        <strong>CDNs:</strong> Deliver static assets like images or CSS efficiently by caching them closer to the user.
                                    </p>
                                </div>
                            </section>

                            <p className="text-gray-300 mt-10">
                                Thanks for reading! If you have any questions or need help designing your next big system, feel free to reach out. Let’s build something amazing together.
                            </p>

                            <p className="mt-10 font-medium text-xl">Venil Sutariya</p>
                        </div>
                    </div>
                </motion.div>
            </Inner>
        </div>
    );
};

export default SystemDesign;