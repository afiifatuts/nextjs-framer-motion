"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { InsightCard, ProjectCard, TitleText, TypingText } from "../components";
import { projects } from "../constants";

const Projects = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex
     flex-col`}
    >
      <TypingText title="| Project" textStyles="text-center" />
      <TitleText title="My Recent Project" textStyles="text-center" />

      <div className="mt-[50px] flex flex-col gap-[30px]">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            {...project}
            index={(index += 1)}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Projects;
