"use client";
import styles from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({
  image,
  title,
  description,
  tags,
  source,
  visit,
  index,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={image}
      alt="planet-01"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p
          className="mt-[16px] font-normal lg:text-[20px]
        text-[14px] text-secondary-white"
        >
          {description}
        </p>
        <div >
          <p className="font-bold text-[20px] text-white">Stack : </p>
          <div className="flex ">
            {tags.map((t, i) => {
              return (
                <div className={`${styles.flexCenter} flex-col bg-transparen py-2 px-4 border border-blue-500 rounded m-1`}>
              <p key={i} className="font-bold text-[20px] text-white">{t}</p>
              </div>);
            })}
          </div>
        </div>
      </div>

      <div
        className="flex items-center justify-center bg-[#323f5d] text-white
      "
      >
        <a
          href={visit}
          className="font-bold py-2 px-4 rounded-l"
        >
          Demo
        </a>
        <a
          href={source}
          className="font-bold py-2 px-4 rounded-l"
        >
          Github
        </a>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
