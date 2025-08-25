import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // click outside closes
          />

          {/* Modal Content */}
          <motion.div
            className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-lg bg-black/95 rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: -50, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-lime-400 mb-4">Contact Me</h2>
            <p className="text-gray-300 mb-6">
              Want to work together or say hi? Send me a message!
            </p>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-xl bg-neutral-800 text-white placeholder-gray-400 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-xl bg-neutral-800 text-white placeholder-gray-400 outline-none"
              />
              <textarea
                placeholder="Your Message"
                className="p-3 rounded-xl bg-neutral-800 text-white placeholder-gray-400 outline-none resize-none h-32"
              />
              <button
                type="submit"
                className="bg-lime-400 text-black font-semibold rounded-full py-3 mt-2 hover:bg-lime-500 transition"
              >
                Send
              </button>
            </form>

            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={onClose}
            >
              ✕
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
