import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from "framer-motion";


function DetailsSection({ title, content }) {

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.01 });
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <>
            <details ref={ref}
                className="group p-6 [&_summary::-webkit-details-marker]:hidden"
            >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                    <h2 className="text-lg font-medium text-slate-300 font-Montserrat">{title}</h2>
                    <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>
                <p className="mt-4 leading-relaxed text-slate-500 font-OpenSans">{content}</p>
            </details>
        </>
    );
}

export default function Extra() {
    return (
        <div className="flex flex-col w-full my-8">
            <div className="space-y-4">
                <DetailsSection
                    title="Mentor Connect"
                    content="Engage with seasoned mentors who carefully analyze team ideas, providing invaluable 'Success Mantras' and insights on navigating business competition. With their guidance, teams are equipped to soar to the top of their game."
                />
                <DetailsSection
                    title="Hustle and Execution"
                    content="Embrace the hustle as teams fervently work to turn dreams into reality. Through relentless brainstorming, they explore various ideas, approaches, and techniques to secure the top position. Then, it's time for execution—presenting innovative ideas to captivate audiences, mentors, and judges, transforming plans into impactful action."
                />
                <DetailsSection
                    title="What are the benefits of Fractional Ownership?"
                    content="Bigain offers access to high-value properties and allows you to diversify your investments across multiple assets, minimizing risk. Benefit from liquidity as you can easily buy and sell units through Bigain's platform. Enjoy passive income with regular rental returns, all while avoiding the hassle of property management. Seize potential capital appreciation as your investments stand to gain from increases in property values over time."
                />
            </div>
        </div>
    );
}