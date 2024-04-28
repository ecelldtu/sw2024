import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
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
            }} className="">
            <Heading
                className="text-center"
                title="Associate Partners"
            />
            <div className="h-auto flex items-center w-screen my-8">
                <a className='mx-auto' href="http://thekwcg.org"><img alt="Polygon" src="/logo/9.png" width={300} height={300} className="h-32 my-2 w-32 object-contain mx-auto" /></a>
                <img alt="Polygon" src="/logo/10.png" width={300} height={300} className="h-32 my-2 w-32 object-contain mx-auto" />
            </div>
        </motion.div>
    );
}