import { ArrowRight, Dot } from "lucide-react";

const Speak = () => {
    return (
        <div className="mt-[100px] px-10 py-5 lg:px-20 lg:py-10">
            <div className="lg:ps-40">
                <div className="text-4xl">Speak</div>
                <p className="mt-[24px] lg:max-w-[700px] text-opacity-50">
                    I love sharing knowledge and sparking conversations. From web development and UI/UX design to SaaS trends and tech futures, I speak on a wide range of topics. At conferences, workshops, and webinars, I aim to inspire, educate, and engage with insights from my tech journey.
                </p>
                <button
                    data-cursor="-hidden"
                    className="mt-[24px] rounded-full py-2 hover:text-black hover:bg-white px-3 border flex items-center gap-x-4"
                    onClick={() => window.location.href = 'mailto:venilsutariya7@gmail.com'}
                >
                    Say hi <ArrowRight size={20} />
                </button>
                <div className="mt-[100px] flex gap-x-8 flex-wrap">
                    <div>
                        <a href="https://x.com/SutariyaVenil" target="_blank" className="flex items-center gap-x-4 hover:text-blue-500">
                            <span><Dot /></span>
                            <span>Twitter</span>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/venil-sutariya-a6b27b228/" target="_blank" className="flex items-center gap-x-4 hover:text-blue-500">
                            <span><Dot /></span>
                            <span>Linkedin</span>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/venilsutariya" target="_blank" className="flex items-center gap-x-4 hover:text-blue-500">
                            <span><Dot /></span>
                            <span>Github</span>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/venilsutariya_" target="_blank" className="flex items-center gap-x-4 hover:text-blue-500">
                            <span><Dot /></span>
                            <span>Instagram</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Speak;