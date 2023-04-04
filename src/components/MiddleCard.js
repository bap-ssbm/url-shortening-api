import { easeInOut, motion } from "framer-motion";
const container = {

    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            ease: 'easeInOut', duration: 0.5
        }
    }
}



const MiddleCard = ({ imgUrl, title, content, order }) => {
    let translate = order === 1 && "md:translate-y-[-40px]";
    order === 3 && (translate = "md:translate-y-[40px]");


    const image = {

        hidden: { opacity: 0, y:-20 },
        show: {
            opacity: 1, y:0,
            transition: {
                ease: 'easeInOut', duration: 0.5, delay:order+1
            }
        }
    }

    
    return (
        <motion.div
            variants={container}
            className={"flex flex-col justify-center items-center shadow-lg space-y-5 p-10 pt-20 rounded-md relative z-50 bg-white md:w-[33%] md:items-start " +
                translate}>
            <motion.div  variants={image} className="bg-violet-1000 p-6 rounded-full absolute top-[-40px]">
                <motion.img  className="h-16" src={imgUrl} alt="" />
            </motion.div>

            <h3 className="font-bold text-violet-1200 text-[20px]">
                {title}
            </h3>
            <p className="text-[16px] font-medium tracking-tight">
                {content}
            </p>
        </motion.div>
    )
}

export default MiddleCard;