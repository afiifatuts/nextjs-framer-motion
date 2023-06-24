'use client';

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import {fadeIn, staggerContainer } from '../utils/motion'

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"/>

    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount:0.25 }}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center"/>

      <motion.p
      variants={fadeIn('up', 'tween', 0.2,1)}
      className="mt-[8px] font-normal sm:text-[32px] text-[20px]
       text-secondary-white"
      >
      My name is <span className="font-extrabold text-white">Afiifatuts Tsaaniyah Abdullah.</span>
       Frontend and Backend Developer. 
      I like to code and learning from scratch. 
      My first time as a developer was 
      in 2018. 
      I made an application to complete my on the job training and school finals assignment. 
      Then I was interested again in learning about the start-up industry.
      I am quite confident and continue to improve my skills to become a good programmer
      </motion.p>

    </motion.div>
  </section>
);

export default About;
