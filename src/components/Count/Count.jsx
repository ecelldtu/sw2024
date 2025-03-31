"use client"
import CountCard from "./CountCard";
import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import CountUp from "react-countup";
export const countCardData = [
  {
    title: `Social Reach`,
    count: 1000000,
    image: `/images/reach.png`,
  },
  {
    title: `Students`,
    count: 100000,
    image: `/images/student.png`,
  },
  {
    title: `Startups`,
    count: 50,
    image: `/images/startup.png`,
  },
  {
    title: `Competitions`,
    count: 10,
    image: `/images/funding.png`,
  },
];


const Count = (props) => {
  const renderCountCards = countCardData.map((countCard, index) => {
    return <CountCard countCard={countCard} key={index} />;
  });
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.01 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 60 },
        }} className="w-full flex justify-center items-center relative h-full xl:h-[35rem]">
        <div className="w-full md:w-3/4 lg:w-full grid grid-cols-2 gap-y-16 md:gap-x-4 xl:flex pt-16 md:-mb-12 h-full">
          {renderCountCards}
        </div>
      </motion.div>
    </>

  );
};

export default Count;