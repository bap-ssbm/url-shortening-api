import Navbar from "./Navbar";
import BtnRound from "./ButtonRound";
import TopSection from "./TopSection";
import ShortenSection from "./ShortenSection";
import MiddleSection from "./MiddleSection";
import Footer from "./Footer";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{ease:'easeInOut', duration:0.4}}}>
      <main className="text-[16px] text-center md:text-left flex flex-col items-center  text-violet-1100 overflow-x-hidden">
        <section className="px-[5%] md:px-[10%] pb-60 ">
          <Navbar />
          <TopSection />
        </section>


        <section className="bg-slate-100 px-[5%] md:px-[10%] w-full md:flex md:flex-col md:items-center">
          <ShortenSection />
          <motion.div 
            initial={{opacity:0}} whileInView={{opacity:1, transition:{ease:'easeInOut', duration:0.4}}}
            className="text-center flex flex-col space-y-6 my-14 md:w-[35%]">
            <h2 className="text-violet-1200 font-bold text-[25px] md:text-[40px] tracking-tight">
              Advanced Statistics
            </h2>
            <p className="font-medium md:text-[18px]">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </motion.div>
          <MiddleSection />
        </section>
      </main>


      <section id="call-to-action" className="text-[18px] w-full flex flex-col items-center space-y-6 bg-violet-1000 pt-[100px] pb-32 md:py-20">
        <motion.h1 
          initial={{scale:0, opacity:0}}
          whileInView={{scale:1, opacity:1, transition:{
            scale:{
              duration:0.7,ease:'easeInOut'
            },
            opacity:{
              duration:0.8,ease:'easeInOut'
            }
          }}}
      
          className="font-bold text-white text-[27px] md:text-[38px]">
          Boost your links today
        </motion.h1>
        <motion.div initial={{ opacity:0, scale:0}} whileInView={{ opacity:1 , scale:1, transition:{
              duration:0.7, ease:'easeInOut', delay:0.5
        }}} className="bg-white rounded-full">
          <BtnRound txt="Get Started" />
        </motion.div>

      </section>
      <Footer />





      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </motion.div>

  );
}

export default App;
