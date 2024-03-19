"use client"
import CountCard from "./CountCard";
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
export const countCardData = [
  {
    title: `Domains covered`,
    count: 20,
    image: `/domains.png`,
  },
  {
    title: `Judges and Mentors`,
    count: 50,
    image: `/speakers.png`,
  },
  {
    title: `Sponsors`,
    count: 100,
    image: `/sponsors.png`,
  },
  {
    title: `Total Attendance`,
    count: 1000,
    image: `/attendees.png`,
  },
];


const Count = () => {
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
        }} className="w-full flex justify-center items-center relative h-full mb-24 md:mb-48 md:-mt-32">
        <div className="w-full md:w-3/4 lg:w-full grid grid-cols-2 gap-y-16 md:gap-x-4 xl:flex pt-16 md:-mb-12 h-full">
          {renderCountCards}
        </div>
      </motion.div>
    </>

  );
};

export default Count;