import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Animated Glow */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-200/50 rounded-full blur-[120px]"
      ></motion.div>

      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-100/50 rounded-full blur-[120px]"
      ></motion.div>

      {/* Main Content */}
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center z-10">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-6xl md:text-8xl leading-tight text-[#3B2F2F] font-['Playfair_Display']"
          >
            Glow Naturally.
            <br />
            Feel Beautiful.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-[#6B5B5B] text-lg leading-relaxed max-w-xl"
          >
            Discover premium skincare crafted with clean ingredients, modern
            science, and timeless beauty rituals.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-5 mt-12"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full bg-[#3B2F2F] text-white hover:bg-[#5B4949] transition duration-300 shadow-xl shadow-pink-100"
            >
              Shop Collection
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full border border-[#3B2F2F]/20 text-[#3B2F2F] hover:bg-white/40 transition duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - Product Circle */}
        <div className="flex justify-center relative">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            whileHover={{
              scale: 1.03,
            }}
            className="relative cursor-pointer flex flex-col items-center"
          >
            {/* Glow halo */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-yellow-100 rounded-full blur-[80px] opacity-70"></div>

            {/* Main Outer Container */}
            <div className="relative w-[340px] h-[340px] rounded-full bg-gradient-to-br from-pink-100 via-rose-100 to-yellow-50 p-1 shadow-2xl shadow-pink-100 mb-6">
              {/* Internal frosted glass container */}
              <div className="w-full h-full rounded-full backdrop-blur-xl bg-white/40 border border-white/50 flex items-center justify-center overflow-hidden">
                
                {/* Perfect Circular Product Image */}
                <motion.div
                  className="w-[240px] h-[240px] rounded-full overflow-hidden border border-white/60 shadow-lg"
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src="/final.png" 
                    alt="Rose Elixir Product"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

              </div>
            </div>

            {/* Text Labels moved directly underneath the glass circle */}
            <div className="text-center z-10">
              <h2 className="text-3xl text-[#3B2F2F] font-['Playfair_Display']">
                PRODUCTS
              </h2>
              <p className="text-[#7A6666] mt-2 text-sm uppercase tracking-wider">
                Hydrating serums
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}