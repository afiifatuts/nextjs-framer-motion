'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { TechCard, TitleText, TypingText } from "../components";
import { technologies } from "../constants";


const Technologies = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex
     flex-col`}
    >

      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Technologies" textStyles="text-center"/>
        <TitleText title={<>I've worked with a range a technologies in the web development world.</>} textStyles="text-center"/>

        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]  ">
          {technologies.map((tech, index)=>(
            <TechCard
            key={`tech-${index}`}
            {...tech}
            />
          ))}
        </div>
      </motion.div>

    </motion.div>
  </section>
);

export default Technologies;
