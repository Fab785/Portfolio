import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark background overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose} // close modal on background click
          />

          {/* Modal window */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="w-[90%] max-w-lg p-8 rounded-3xl shadow-xl 
                            bg-gradient-to-br from-black/90 to-black/70 
                            backdrop-blur-lg border border-lime-400 relative">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-lime-400">Contact Me</h2>
                <button
                  className="text-gray-400 hover:text-white text-2xl font-bold"
                  onClick={onClose}
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-300 mb-6 text-sm sm:text-base">
                Want to collaborate or say hi? Send me a message and I’ll get back to you!
              </p>

              {/* Form */}
              <form className="flex flex-col gap-4">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    className="peer p-4 w-full rounded-xl bg-black/70 text-white placeholder-transparent outline-none border border-lime-400 focus:border-lime-500 transition"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-4 text-gray-400 text-sm transition-all 
                               peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm 
                               peer-focus:-top-2 peer-focus:text-lime-400 peer-focus:text-xs"
                  >
                    Your Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    className="peer p-4 w-full rounded-xl bg-black/70 text-white placeholder-transparent outline-none border border-lime-400 focus:border-lime-500 transition"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-4 text-gray-400 text-sm transition-all 
                               peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm 
                               peer-focus:-top-2 peer-focus:text-lime-400 peer-focus:text-xs"
                  >
                    Your Email
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    id="message"
                    placeholder=" "
                    rows="4"
                    className="peer p-4 w-full rounded-xl bg-black/70 text-white placeholder-transparent outline-none border border-lime-400 focus:border-lime-500 transition resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-4 text-gray-400 text-sm transition-all 
                               peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm 
                               peer-focus:-top-2 peer-focus:text-lime-400 peer-focus:text-xs"
                  >
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-lime-400 text-black font-bold rounded-full py-3 mt-2 hover:bg-lime-500 transition transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}



