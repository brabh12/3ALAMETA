'use client';
import { motion } from "framer-motion";
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from "../components";
const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once: 'flase', amount: 0.25}} className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <TypingText title="Share This ART with All the World" textStyles="text-center" />
      <TitleText title={<>Discover the beauty of creativity.</>} textStyles="text-center" />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>


        <div className="absolute top-72 left-[10%] w-[195px] h-[150px] p-[6px] rounded-[24px] bg-[#5D6680] invisible md:visible">
          <img src="/world.png" alt="world" className="w-full h-full rounded-[24px] object-cover" />
          <div className="absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-end align-middle gap-4 bg-[rgba(255,255,255,0.2)] rounded-[24px] p-4">
            <div className="h-[24px] w-auto flex relative">
              <img src="/people-02.png" alt="people" className="w-[24px] h-[24px] rounded-full" />
              <img src="/people-01.png" alt="people" className="w-[24px] h-[24px] ml-[-12px] rounded-full relative z-[-1]" />
              <img src="/people-03.png" alt="people" className="w-[24px] h-[24px] ml-[-12px] rounded-full relative z-[-2]" />
              <h5 className="h-[24px] text-left text-[10px] p-1 text-white bg-[#5d66804a]">+ 20 in his 3ALMETA </h5>
            </div>
            <h3 className="text-white font-bold">Violet Town</h3>
          </div>
        </div>
      </motion.div>

    
    </motion.div>

  </section>
);

export default World;
