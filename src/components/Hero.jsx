import { motion } from "framer-motion";
import profileImg from "../assets/Fab.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen text-white flex items-center justify-center px-8">
      <div className="flex items-center gap-12">
        {/* LEFT SIDE: Name + FRONTEND */}
        <div className="flex flex-col items-end text-right">
          <h1 className="text-md font-light uppercase tracking-widest mb-2">
            Fabrizio Terribile
          </h1>
          <h2 className="text-[64px] font-extrabold leading-none">FRONTEND</h2>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profileImg}
            alt="Profile"
            className="rounded-[20px] object-cover w-[260px] h-[380px]"
          />
        </motion.div>

        {/* RIGHT SIDE: DEVELOPER + Dot */}
        <div className="flex flex-col items-start text-left">
          <div className="flex items-center mb-2">
            <span className="w-2.5 h-2.5 bg-lime-400 rounded-full mr-2"></span>
            <h2 className="text-[64px] font-extrabold leading-none">DEVELOPER</h2>
          </div>
        </div>
      </div>

      {/* Green “Hi” Circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-lime-400 text-black w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold z-20"
      >
        Hi
      </motion.div>
    </section>
  );
}






