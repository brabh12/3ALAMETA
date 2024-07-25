'use client';
import { motion } from "framer-motion";
import styles from '../styles';
import { fadeIn, staggerContainer} from '../utils/motion';
import { TypingText } from "../components";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"/>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:false, amount:0.25}} className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      <TypingText title="ABOUT 3ALAMI" textStyles="text-center" />
      <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
      <span className="font-extrabold text-white">Our universe </span> 
      is a vast and magnificent expanse, and one of the most captivating features within it is the galaxy. Galaxies are massive systems composed of stars, stellar remnants, interstellar gas, dust, and dark matter, all bound together by gravity. They vary immensely in size, structure, and composition, showcasing the diversity and complexity of the cosmos.
      </motion.p>

      <motion.img variants={fadeIn('up', 'tween', 0.3, 1)} src="/arrow-down.svg" alt="arrow down" className="w-[18px] h-[28px] object-contain mt-[28px]"/>

    </motion.div>

    
  </section>
);

export default About;
