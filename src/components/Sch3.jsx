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
                    title="Pitch Clinic"
                    content="Kickstart the day with teams refining their pitches under the perpetual guidance of mentors such as XXXXXX, XXXXXX, and XXXXXX. Through mock pitching and constant deck refinement, teams gain the confidence to present their ideas to industry experts."
                />

                <DetailsSection
                    title="Presentation"
                    content="Experience the culmination of hard work as teams deliver their final pitches before an esteemed panel of judges, including XXXXXX, XXXXXX, and XXXXXX. With anticipation running high, every participant eagerly awaits the results, longing for a taste of victory."
                />

                <DetailsSection
                    title="Celebration"
                    content="While only one team emerges victorious, every individual carries a sense of pride for experiencing something rare—the power of teamwork, creative thinking, and pressure handling. Within 54 hours, participants have created their own company from scratch, marking an unforgettable journey of achievement."
                />
            </div>
        </div>
    );
}