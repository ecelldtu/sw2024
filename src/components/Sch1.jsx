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
                className="group p-6 w-full [&_summary::-webkit-details-marker]:hidden"
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
                    title="Elevator Pitch"
                    content="The air crackles with electricity as the budding entrepreneurs share their platform with like-minded people with one common goal-to launch a start-up in 54 hours. Startup Weekend resuscitates with the participants full of vigor and their exciting new ideas, ready to lay a foundation to their dreams."
                />

                <DetailsSection
                    title="Networking Dinner"
                    content="Following the Elevator Pitch, connect and collaborate over a sumptuous networking dinner. Engage with mentors, rivals, and teammates, forging invaluable relationships that fuel creativity and collaboration. It's more than a meal—it's a platform where like-minded individuals converge to exchange ideas, insights, and inspiration, setting the stage for 54 hours of relentless innovation."
                />

                <DetailsSection
                    title="Team Formation"
                    content="As teams coalesce and energy levels soar, dive into the 'No Talk, All Action' weekend. Experience the dynamic fusion of competition, innovation, and unconventional ideas as teams race against the clock to transform concepts into groundbreaking startups. With each moment, the atmosphere pulses with the potential to disrupt industries and redefine success."
                />


            </div>
        </div>
    );
}