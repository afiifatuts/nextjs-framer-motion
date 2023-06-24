'use client';

import {motion} from 'framer-motion'
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { TitleText } from '../components';
import About from './About';


const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
   
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="show"
   viewport ={{once:false, amount:0.25}}
   className={`${styles.innerWidth} mx-auto flex flex-col`}
   >
    <div className="flex justify-center items-center flex-col
    relative z-10">
       <TitleText title=" Welcome To My Personal Portfolio "
      textStyles="text-center"/>
    </div>
  <div
  className="relative w-full md:-mt-[20px] -mt-[12px]"
  >
  <About/>
  </div>
   </motion.div>
  </section>
);

export default Hero;
