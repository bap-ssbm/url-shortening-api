import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ShortenedLinkBox = ({ links }) => {

    const [copied, setCopied] = useState(false);
    return (

        <motion.div
            layout
            initial={{ opacity: 0, y: -10, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, transition: { ease: 'easeInOut', duration: 0.3 } }}
            viewport={{once:true}}
            className="shadow-md flex flex-col mb-8  w-full  py-8 space-y-8 rounded-lg text-left bg-white md:flex-row md:space-y-0 md:items-center md:justify-between md:py-5 " >
            <div className="w-full border-bott px-8">
                <a className="text-black font-medium" href={links.link}>
                    {links.link}
                </a>
            </div>
            <hr />
            <div className="w-full flex flex-col font-medium text-cyan-1000 px-8 space-y-8 md:flex-row md:space-y-0 md:items-center md:w-fit md:space-x-5">
                <a href={links.shortLink}>
                    {links.shortLink}
                </a>
                <AnimatePresence>
                    {copied ? (
                        <button onClick={() => { navigator.clipboard.writeText(links.shortLink) }}
                            className="text-white font-bold bg-violet-1000 py-3  rounded-lg md:py-3 md:w-[110px] md:text-[16px] hover:bg-opacity-50 transition duration-300 ease-in-out">
                            Copied!
                        </button>
                    ) : (<button onClick={() => {
                        navigator.clipboard.writeText(links.shortLink);
                        setCopied(true);
                    }}
                        className="text-white font-bold bg-cyan-1000 py-3  rounded-lg md:py-3 md:w-[110px] md:text-[16px] hover:bg-opacity-50 transition duration-300 ease-in-out">
                        Copy
                    </button>)}
                </AnimatePresence>

            </div>
        </motion.div>

    )
}
export default ShortenedLinkBox;