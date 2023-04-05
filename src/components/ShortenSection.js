import ShortenedLinkBox from "./ShortenedLinkBox";
import axios from "axios";
import { motion, AnimatePresence, useAnimate, useAnimationControls } from "framer-motion";
import { useState } from "react";


const ShortenSection = () => {
    const uri = "https://api.shrtco.de/v2/shorten?url=";
    const [urlToShorten, setUrlToShorten] = useState("");
    const [error, setError] = useState(null);
    const [shortenedLinks, setShortenedLinks] = useState(() => {
        const saved = localStorage.getItem("links");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });
    const [load, setload] = useState(false);

    const [btnAnimation, animate] = useAnimate();

  

    const nourl = "No url parameter set. Make a GET or POST request with a `url` parameter containing a URL you want to shorten. For more infos see shrtco.de/docs";
    const invalidurl = "This is not a valid URL, for more infos see shrtco.de/docs";

    const catchChange = (e) => {
        setUrlToShorten(e.target.value);
    }

    const handleShorten = (e) => {
        e.preventDefault();
       
        setload(true);
        
        
        const url = uri + urlToShorten;


        axios.get(url).then(res => {
            setError(null);

            setShortenedLinks(previousData => {
                localStorage.setItem('links', JSON.stringify([...previousData, { shortLink: res.data.result.full_short_link, link: res.data.result.original_link }]));
                return [...previousData, { shortLink: res.data.result.full_short_link, link: res.data.result.original_link }];
            });
            setload(false);
       

        }).catch(err => {
            if (err.response.data.error === nourl) {
                setError('Please add a link');
            } else if (err.response.data.error === invalidurl) {
                setError('This is not a valid link');
            } else {
                setError(err.response.data.error);
            }
            setload(false);
        
        });


    }

    return (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.9 } }} className="text-[19px] w-full py-20 pt-[90px] md:pt-[70px] flex flex-col space-y-8 md:max-w-[1100px] relative">
            <motion.div
                initial={{ y: -10 }} whileInView={{ y: 0 }} transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
                id="shorten-input-box" className="bg-violet-1000 flex flex-col p-8 w-full space-y-12 md:space-y-0 rounded-lg absolute top-[-90px] md:top-[-80px] md:flex-row md:px-20 md:py-[50px] md:space-x-7 md:h-fit">
                <div className="flex-1 relative">
                    <input onChange={catchChange} className={"p-4 rounded-xl md:flex-1 h-full md:p-6 text-violet-1200 w-full placeholder:font-medium md:pl-10 " + (error && "border-red-1000 border-solid border-2")} placeholder="Shorten a Link here..." type="text"></input>
                    <AnimatePresence>
                        {error && (<motion.p
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="absolute text-[14px] text-red-1000 italic mt-2">{error}</motion.p>)}
                    </AnimatePresence>

                </div>

                <div className="bg-white rounded-xl">
                    <motion.button id="shorten-btn" 
                        ref={btnAnimation}
                        onClick={handleShorten}
                        className="text-white font-bold bg-cyan-1000 py-4 md:py-6 md:px-14 w-full md:w-fit  rounded-xl h-full md:hover:bg-opacity-50 transition duration-300 ease-in-out">
                        {load?("shortening..."):("Shorten It!")}
                    </motion.button>
                </div>

            </motion.div>



            <div className="flex flex-col-reverse">
                <AnimatePresence>
                    {shortenedLinks.map((link) => {
                        return <ShortenedLinkBox links={link} />
                    })}
                </AnimatePresence>
            </div>


        </motion.section>
    )
}
export default ShortenSection;