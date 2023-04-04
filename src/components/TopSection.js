import BtnRound from "./ButtonRound";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden:{
    opacity:0,
     x:'-20%'
    },
  visible:{opacity:1,
     x:0, 
     transition:{
      delay:0.8, 
      ease:'easeInOut', 
      duration:1.2,
      staggerChildren:0.8,
      stype:'spring'
    }}
}
const sectionTitleVariant = {
  hidden:{
    opacity:0
    },
  visible:{opacity:1,
     transition:{
      ease:'easeInOut', 
      duration:0.6,
      stype:'spring'
    }}
}

const TopSection = () =>{
    return(
        <section className="flex flex-col md:flex-row space-y-10 w-full md:items-center md:my-24 md:max-w-[1200px]">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.8}} className="relative py-16 md:order-1 md:w-1/3">
            <img className="scale-150 md:scale-[200%] ml-[25%] md:ml-[40%]" src="../images/illustration-working.svg" alt="working-illustration"/>
          </motion.div>

          <motion.div variants={sectionVariant} initial="hidden" whileInView="visible" className="flex flex-col items-center md:items-start space-y-10 md:space-y-5 md:w-2/3">
            <motion.h1 variants={sectionTitleVariant} className="font-bold text-violet-1200 text-[40px] md:text-[75px] md:leading-[80px] leading-[45px] z-30">More than just shorter links</motion.h1>
            <motion.p variants={sectionTitleVariant} className="text-[18px] md:pr-36">Build your brand’s recognition and get detailed insights
              on how your links are performing.</motion.p>
              <motion.div variants={sectionTitleVariant}>
                <BtnRound txt="Get Started" />
              </motion.div>
              
          </motion.div>
          

        </section>
    )
}

export default TopSection;