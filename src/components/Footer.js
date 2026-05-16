import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 via-transparent to-yellow-100/20"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#3B2F2F]/20 to-transparent mb-10"></div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-200 via-rose-200 to-yellow-100 flex items-center justify-center shadow-md">
              ✿
            </div>

            <h2 className="text-2xl font-playfair italic text-[#3B2F2F]">
              Lunelle
            </h2>
          </div>

          {/* Copyright */}
          <p className="text-[#6B5B5B] text-sm tracking-wide">
            © 2026 Lunelle. Crafted with elegance. 
            Made by Rawan Ayman
          </p>

          {/* GitHub Link */}
          <motion.a
            whileHover={{
              y: -3,
            }}
            href="https://github.com/ronyayman68-ops"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full backdrop-blur-xl bg-white/30 border border-white/40 text-[#3B2F2F] hover:bg-white/50 transition duration-300 shadow-lg shadow-pink-100"
          >
            GitHub
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
}
