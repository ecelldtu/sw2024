import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import Heading from "./Heading";

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
            <motion.details ref={ref}
                animate={controls}
                initial="hidden"
                transition={{ duration: 0.1 }}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 100 },
                }}
                className="group-6 p-6 border-s-4 border-y-2 border-r-2 rounded-xl border-slate-700/40  [&_summary::-webkit-details-marker]:hidden"
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
                <p className="mt-4 leading-relaxed text-slate-400 font-OpenSans">{content}</p>
            </motion.details>
        </>
    );
}

export default function Extra() {
    return (
        <div className="flex flex-col w-full my-8">
            <div className="space-y-4 mx-4 md:mx-12">
                <Heading title="Get your doubts cleared" />
                <DetailsSection
                    title="Is this event for me?"
                    content="If you're interested in entrepreneurship, the answer is most likely yes. Techstars Startup Weekend attracts attendees with roughly 50% technical backgrounds (developers, coders, designers) and 50% business backgrounds (marketing, finance, law). Whether you're a serial entrepreneur or new to the startup scene, if you're motivated to build a product or startup and open to new ideas, you'll fit right in."
                />

                <DetailsSection
                    title="How do I prepare?"
                    content="Do some research to understand the problem you're trying to solve better. Practice your pitch—it's your chance to persuade others to join your team in just 60 seconds. Make it clear, concise, and convincing! Familiarize yourself with our weekend tools at startupweekend.org/resources. Get some rest, and consider bringing a friend along—events are better with good company."
                />

                <DetailsSection
                    title="Do I have to participate all three days?"
                    content="Yes, apart from Organizers, selected Coaches, Speakers, and press, everyone attending the event is expected to participate all three days. This helps maintain the 'vibe' of the weekend—'no talk, all action'—and minimizes distractions for working teams."
                />

                <DetailsSection
                    title="Do I have to pitch an idea to attend?"
                    content="No, but we encourage you to! Whether it's an idea you've been pondering for years or something you come up with on the spot, pitching is a valuable experience and excellent practice for public speaking."
                />
                <DetailsSection
                    title="Do I need a team?"
                    content="No, having a team is not compulsory, but everyone attending the event is recommended to participate in a team. This helps preserve the mission of Techstars Startup Weekend (teamwork!) and minimizes distractions for all working teams."
                />

                <DetailsSection
                    title="Can I pitch more than one idea?"
                    content="Depending on the number of ideas pitched and the schedule, you may or may not be able to pitch multiple ideas. Prioritize your ideas: pitch your best idea (and the one you have most prepared for) first."
                />

                <DetailsSection
                    title="Can I pitch my existing business?"
                    content="No. Startup Weekend is designed to be the most effective platform for growing new ideas from the ground up over the course of a weekend. Complete collaboration, buy-in, and ownership are central values. Having existing businesses in the mix undermines this spirit and creates an imbalance."
                />

                <DetailsSection
                    title="What if my idea doesn’t get selected?"
                    content="The purpose of Friday voting and crowd sourcing isn’t to exclude certain ideas, but to highlight the most popular and high-potential pitches and ensure manageable team numbers. If your idea isn’t selected but you’ve formed a team around it, you're welcome to work on it over the weekend. Please inform the event Organizer if you decide to do so."
                />

            </div>
        </div>
    );
}