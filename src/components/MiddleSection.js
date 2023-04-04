import MiddleCard from "./MiddleCard";
import { motion } from "framer-motion";

const container={

    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6
      }
    }
  }
  const connector = {

    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            ease: 'easeInOut', duration: 0.5
        }
    }
}

const MiddleSection = () => {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            whileInView="show" 
            viewport={{once:true}}
            className="flex flex-col my-20 items-center md:flex-row md:w-full md:mt-32 md:mb-52 md:max-w-[1200px]">
            <MiddleCard imgUrl="./images/icon-brand-recognition.svg" title="Brand Recognition" content="Boost your brand recognition with each click. Generic links don’t
                mean a thing. Branded links help instil confidence in your content." order={1}/>

            <motion.div variants={connector} className="w-3 h-28 bg-cyan-1000 md:h-3 md:w-10"></motion.div>

            <MiddleCard imgUrl="./images/icon-detailed-records.svg" title="Detailed Records" content="Gain insights into who is clicking your links. Knowing when and where
              people engage with your content helps inform better decisions." order={2}/>
            <motion.div variants={connector} className="w-3 h-28 bg-cyan-1000 md:h-3 md:w-10"></motion.div>
            <MiddleCard imgUrl="./images/icon-fully-customizable.svg" title="Fully Customizable" content="Improve brand awareness and content discoverability through customizable
              links, supercharging audience engagement." order={3}/>
        </motion.section>
    )
}
export default MiddleSection;