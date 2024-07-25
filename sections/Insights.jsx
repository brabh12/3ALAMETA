'use client';
import { motion } from "framer-motion";
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { InsightCard, NewFeatures, TitleText, TypingText } from "../components";
import { insights, newFeatures } from '../constants';
const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once: 'flase', amount: 0.25}} className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <TypingText title="Blogs" textStyles="text-center" />
      <TitleText title="Our Blogs" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (<InsightCard key={`insight-${index}`} {...insight} index={index + 1} />))}

      </div>

    </motion.div>

  </section>
);

export default Insights;
