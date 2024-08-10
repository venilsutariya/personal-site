import WordRotate from "@/components/word-rotate";

const Hero = () => {
    return (
        <div
            className={`px-10 py-5 lg:px-20 lg:py-10`}>
            <div className="lg:ps-40 text-4xl lg:text-6xl flex flex-col gap-y-[10px]">
                <WordRotate
                    words={["hi", "hello", "namaste", "bonjour", "Hallo"]}
                />
                <div>i &apos; m</div>
                <div>venil.</div>
            </div>
            <p className="lg:ps-40 text-lg lg:text-xl mt-10 lg:max-w-[600px]">
                I &apos; m a full-stack developer, loves building products and designing experiences.
            </p>
        </div>
    );
}

export default Hero;