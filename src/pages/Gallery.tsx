import { motion } from "framer-motion";
import { useCursorStore } from "../store/useCursorStore"

const item = {
    initial: { y: "1rem", opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.2, 1, 0.3, 1] as const
        }
    },
};

export default function Gallery() {
    const set = useCursorStore((state) => state.setCursorType);

    return (
        <motion.main
            className="relative w-screen flex flex-col items-center pt-[5vh] pb-[10vh] lg:pt-[15vh] lg:pb-[25vh] lg:pl-[10vw]"
            initial={{ opacity: 0, filter: "blur(1px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(1px)", transition: { duration: 0.8, ease: "easeOut" } }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
            <div className="w-[80vw] lg:w-[70vw] h-[15vh] sm:landscape:h-[30vh] md:landscape:h-[30vh] lg:landscape:h-[15vh] flex flex-row items-end justify-between">
                <h1 className="text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">Gallery</h1>
                <a
                    className="flex items-end justify-center text-[clamp(0.8rem,1vw,1.5rem)] font-light mb-1"
                    href="https://www.instagram.com/lokesh.zmx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => set("hover")}
                    onMouseLeave={() => set("default")}
                >
                    @lokesh.zmx
                </a>
            </div>

            <div className="w-[80vw] lg:w-[70vw] h-[1px] bg-[#888888aa]"/>

            <div
                className="w-[80vw] lg:w-[70vw] h-[40vh] flex flex-col items-center justify-center pt-[clamp(1rem,7.5vh,3rem)]"
            >
                <motion.h2
                    className="text-[clamp(1.5rem,3vw,3rem)] font-light tracking-widest text-[#888888aa]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                    COMING SOON...
                </motion.h2>
                <motion.p
                    className="mt-4 text-[clamp(0.8rem,1.2vw,1.5rem)] font-light text-[#888888aa]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                >
                    Stay tuned for new amazing photography and edits!
                </motion.p>
            </div>

            <div className="cursive w-full h-auto overflow-hidden flex items-center justify-center mt-[clamp(3rem,10vh,5rem)] text-[clamp(1rem,1.5vw,2rem)] lg:-translate-x-[5vw] md:text-[clamp(1.5rem,2vw,2.5rem)] md:font-thin">
                <motion.h2 
                    className="flex gap-[clamp(0.05rem,0.2vw,0.2rem)]"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false }}
                    transition={{ 
                        staggerChildren: 0.02,
                        delayChildren: 0.2,
                    }}
                >
                    <motion.span variants={item}>T</motion.span>
                    <motion.span variants={item}>h</motion.span>
                    <motion.span variants={item}>a</motion.span>
                    <motion.span variants={item}>n</motion.span>
                    <motion.span variants={item}>k</motion.span>
                    <motion.span className="w-[clamp(0.5rem,0.8vw,1rem)]" variants={item}> </motion.span>
                    <motion.span variants={item}>y</motion.span>
                    <motion.span variants={item}>o</motion.span>
                    <motion.span variants={item}>u</motion.span>
                    <motion.span className="w-[clamp(0.5rem,0.8vw,1rem)]" variants={item}> </motion.span>
                    <motion.span variants={item}>f</motion.span>
                    <motion.span variants={item}>o</motion.span>
                    <motion.span variants={item}>r</motion.span>
                    <motion.span className="w-[clamp(0.5rem,0.8vw,1rem)]" variants={item}> </motion.span>
                    <motion.span variants={item}>v</motion.span>
                    <motion.span variants={item}>i</motion.span>
                    <motion.span variants={item}>s</motion.span>
                    <motion.span variants={item}>i</motion.span>
                    <motion.span variants={item}>t</motion.span>
                    <motion.span variants={item}>i</motion.span>
                    <motion.span variants={item}>n</motion.span>
                    <motion.span variants={item}>g.</motion.span>
                </motion.h2>
            </div>
            <div className="cursive w-full h-auto overflow-hidden flex items-center justify-center mt-[clamp(1rem,1vh,2rem)] text-[clamp(0.6rem,0.8vw,1.2rem)] lg:-translate-x-[5vw] md:text-[clamp(0.8rem,1vw,1.5rem)] md:font-thin">
                <motion.h2 
                    className="flex gap-[clamp(0.05rem,0.1vw,0.2rem)] ml-[clamp(3rem,10vw,10rem)]"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false }}
                    transition={{ 
                        staggerChildren: 0.02,
                        delayChildren: 0.35,
                    }}
                >
                    <motion.span variants={item}>C</motion.span>
                    <motion.span variants={item}>r</motion.span>
                    <motion.span variants={item}>e</motion.span>
                    <motion.span variants={item}>a</motion.span>
                    <motion.span variants={item}>t</motion.span>
                    <motion.span variants={item}>e</motion.span>
                    <motion.span variants={item}>d</motion.span>
                    <motion.span className="w-[clamp(0.3rem,0.4vw,0.8rem)]" variants={item}> </motion.span>
                    <motion.span variants={item}>b</motion.span>
                    <motion.span variants={item}>y</motion.span>
                    <motion.span className="w-[clamp(0.3rem,0.4vw,0.8rem)]" variants={item}> </motion.span>
                    <motion.span variants={item}>L</motion.span>
                    <motion.span variants={item}>o</motion.span>
                    <motion.span variants={item}>k</motion.span>
                    <motion.span variants={item}>e</motion.span>
                    <motion.span variants={item}>s</motion.span>
                    <motion.span variants={item}>h</motion.span>
                </motion.h2>
            </div>
        </motion.main>
    )
}
