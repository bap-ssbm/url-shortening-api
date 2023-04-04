
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setViewportWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [showHamburgMenu, setShowHamburgerMenu] = useState(false);

    return (
        <motion.nav initial={{y:-50}} animate={{y:0, transition:{delay:0.2, ease:'easeInOut', type:'spring'}}} className="flex font-bold my-10 text-violet-1100 items-center justify-between w-full relative z-50 md:mt-20 md:mb-40">


            <div className="mr-10">
                <motion.img initial={{x:-50, opacity:0}} animate={{x:0 ,opacity:1 ,transition:{delay:0.4, ease:'easeInOut', duration:0.7}}} src="./images/logo.svg" />
            </div>
            {viewportWidth < 768 && (
                <button className="h-7 w-8 flex flex-col justify-between" onClick={() => { setShowHamburgerMenu(!showHamburgMenu) }}>
                    <div className="w-full h-1 bg-violet-1100"></div>
                    <div className="w-full h-1 bg-violet-1100"></div>
                    <div className="w-full h-1 bg-violet-1100"></div>
                </button>
            )}
            <AnimatePresence>
                {(viewportWidth >= 768 || showHamburgMenu) &&
                    (
                        <motion.div 
                        initial={viewportWidth<768&&{opacity:0, y:"-50vh"}} animate={{opacity:1, y:"0vh",transition:{ease:"easeInOut", type:"spring"}}} exit={{opacity:0, y:"-50vh" ,transition:{ease:"easeInOut"}}}
                         className="flex flex-col z-50 text-white md:text-violet-1100 md:flex-row bg-violet-1000 md:bg-transparent flex-1 justify-between absolute md:relative w-[100%] md:w-auto top-32 md:top-0 px-8 md:px-0 py-10 md:py-0 rounded-xl space-y-6 md:space-y-0">
                            <ul className="flex flex-col md:flex-row md:space-x-10 items-center font-bold space-y-6 md:space-y-0">
                                <motion.li whileHover={viewportWidth>768&&{color:"hsl(260, 8%, 14%)" ,transition:{ease:"easeInOut", duration:0.3 }}} className="cursor-pointer">Features</motion.li>
                                <motion.li whileHover={viewportWidth>768&&{color:"hsl(260, 8%, 14%)" ,transition:{ease:"easeInOut", duration:0.3 }}} className="cursor-pointer">Pricing</motion.li>
                                <motion.li whileHover={viewportWidth>768&&{color:"hsl(260, 8%, 14%)" ,transition:{ease:"easeInOut", duration:0.3 }}} className="cursor-pointer">Resources</motion.li>
                            </ul>
                            {viewportWidth < 768 && <hr className="h-[1px] border-none bg-violet-1100" />}

                            <div className="flex items-center flex-col md:flex-row space-y-6 md:space-y-0">
                                <motion.a whileHover={{color:"hsl(260, 8%, 14%)" ,transition:{ease:"easeInOut", duration:0.3 }}}  className="cursor-pointer font-bold md:mr-10">Login</motion.a>
                                <motion.button className="bg-cyan-1000 text-white font-bold py-4 md:py-3 w-full md:px-7 md:w-fit rounded-full tracking-wide hover:bg-opacity-50 transition duration-300 ease-in-out">
                                    Sign Up
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
            </AnimatePresence>

        </motion.nav>
    )
}

export default Navbar;