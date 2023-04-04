import { motion } from "framer-motion";

const BtnRound = ({txt}) =>{
    return(
        <button className="bg-cyan-1000 text-white w-fit font-bold py-5 px-14 rounded-full tracking-wide hover:bg-opacity-50 transition duration-300 ease-in-out">
            {txt}
        </button>
    )
}

export default BtnRound;