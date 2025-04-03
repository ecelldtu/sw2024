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
                title="Global partners"
            />
            <div className="h-auto flex items-center w-screen my-8">
                <Marquee className="py-2 flex gap-4 my-2" speed={180}>
                    <img alt="Devfolio" src="/brex.png" width={128} height={128} className="h-32 scale-150 my-2 w-32 object-contain mx-32" />
                    <img alt="Replit" src="/deel.png" width={128} height={128} className="h-32 scale-150 my-2 w-32 object-contain mx-32" />
                    <img alt="Polygon" src="/hsbc.png" width={128} height={128} className="h-32 scale-150 my-2 w-32 object-contain mx-32" />
                    <img alt="Replit" src="/mer.png" width={128} height={128} className="h-32 scale-150 my-2 w-32 object-contain mx-32" />
                    {/* <img alt="Polygon" src="/.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" />
                    <img alt="Devfolio" src="/.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" />
                    <img alt="Replit" src="/.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" /> */}
                    {/* <img alt="Polygon" src="/logo/8.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" /> */}
                    {/* <img alt="Polygon" src="/logo/9.png" width={128} height={128} className="h-32 scale-90 my-2 w-32 object-contain mx-24" /> */}
                </Marquee>
            </div>
        </motion.div>
    );
}

// import { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { motion, useAnimation } from "framer-motion";
// import Marquee from 'react-fast-marquee';
// import Heading from "./Heading";

// export default function Quotes() {

//     const controls = useAnimation();
//     const [ref, inView] = useInView({ threshold: 0.01 });
//     useEffect(() => {
//         if (inView) {
//             controls.start("visible");
//         }
//     }, [controls, inView]);

//     return (
//         <motion.div
//             ref={ref}
//             animate={controls}
//             initial="hidden"
//             transition={{ duration: 1 }}
//             variants={{
//                 visible: { opacity: 1, y: 0 },
//                 hidden: { opacity: 0, y: 60 },
//             }} className="my-12 md:my-24">
//             <Heading
//                 className="text-center"
//                 title="Sponsors"
//             />
//             <div className="h-auto flex items-center w-screen my-8">
//                 <Marquee className="py-2 flex gap-4 my-2" speed={180}>
//                     {[...Array(7)].map((_, index) => (
//                         <div key={index} className="h-32 w-auto flex items-center justify-center mx-24 text-xl font-bold">
//                             Coming Soon
//                         </div>
//                     ))}
//                 </Marquee>
//             </div>
//             {/* <div className="h-16 flex items-center w-screen my-8">
//                 <Marquee className="py-2 flex gap-4 my-2" right direction='' speed={180}>
//                     {[...Array(8)].map((_, index) => (
//                         <div key={index} className="h-32 w-32 flex items-center justify-center mx-24 text-xl font-bold">
//                             Coming Soon
//                         </div>
//                     ))}
//                 </Marquee>
//             </div> */}
//         </motion.div>
//     );
// }