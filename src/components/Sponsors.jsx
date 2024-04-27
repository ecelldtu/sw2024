import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import Marquee from 'react-fast-marquee';
import Heading from "./Heading";

export default function Quotes() {

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.01 });
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 1 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 60 },
            }} className="my-12 md:my-24">
            <Heading
                className="text-center"
                title="Sponsors"
            />
            <div className="h-auto flex items-center w-screen my-8">
                <Marquee className="py-2 flex gap-4 my-2" speed={180}>
                    <img alt="Devfolio" src="/logo/1.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" />
                    <img alt="Replit" src="/logo/2.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" />
                    <img alt="Polygon" src="/logo/3.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" />
                    <img alt="Replit" src="/logo/4.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" />
                    <img alt="Polygon" src="/logo/5.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" />
                    <img alt="Devfolio" src="/logo/6.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" />
                    <img alt="Replit" src="/logo/7.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" />
                    {/* <img alt="Polygon" src="/logo/8.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" /> */}
                    {/* <img alt="Polygon" src="/logo/9.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" /> */}
                </Marquee>
            </div>
            <div className="h-16 flex items-center w-screen my-8">
                <Marquee className="py-2 flex gap-4 my-2" right direction='' speed={180}>
                    {/* <img alt="Polygon" src="/logo/10.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" /> */}
                    <img alt="Polygon" src="/logo/11.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" />
                    {/* <img alt="Polygon" src="/logo/12.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" /> */}
                    <img alt="Polygon" src="/logo/13.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" />
                    <img alt="Polygon" src="/logo/14.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" />
                    <img alt="Polygon" src="/logo/15.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" />
                    <img alt="Polygon" src="/logo/16.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" />
                    <img alt="Polygon" src="/logo/17.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" />
                    <img alt="Polygon" src="/logo/18.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" />
                </Marquee>
            </div>
        </motion.div>
    );
}