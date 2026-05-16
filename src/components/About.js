import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-36 px-6 relative overflow-hidden scroll-mt-32"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-100/40 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-100/40 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
        {/* LEFT SIDE — IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Floating Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 to-yellow-100/30 blur-[80px] rounded-full"></div>

          {/* Main Glass Card */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="relative w-full max-w-[420px] h-[520px] rounded-[50px] backdrop-blur-xl bg-white/30 border border-white/40 shadow-[0_10px_50px_rgba(0,0,0,0.06)] overflow-hidden"
          >
            {/* Decorative Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 to-yellow-100/20"></div>

            {/* Placeholder Content */}
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-10">
              <div className="text-8xl mb-8">🌸</div>

              <h3 className="text-4xl font-playfair text-[#3B2F2F]">
                Pure Beauty
              </h3>

              <p className="mt-6 text-[#6B5B5B] leading-relaxed">
                Thoughtfully crafted skincare inspired by nature, science, and
                timeless self-care rituals.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[#9F7F7F] mb-6">
            About Lunelle
          </p>

          <h2 className="text-5xl md:text-6xl leading-tight font-playfair text-[#3B2F2F]">
            Skincare Designed
            <br />
            For Natural Radiance.
          </h2>

          <p className="mt-8 text-[#6B5B5B] text-lg leading-relaxed">
            At Lunelle, we believe skincare should feel luxurious, calming, and
            deeply nourishing. Our formulas combine botanical ingredients with
            modern skincare innovation to create products that elevate your
            daily ritual.
          </p>

          <p className="mt-6 text-[#6B5B5B] text-lg leading-relaxed">
            Every product is carefully designed to restore glow, hydration, and
            confidence while embracing simplicity, purity, and elegance.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6 mt-14">
            <motion.div
              whileHover={{ y: -6 }}
              className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-[30px] p-6 text-center"
            >
              <h3 className="text-3xl font-playfair text-[#3B2F2F]">98%</h3>

              <p className="mt-2 text-sm text-[#6B5B5B]">Organic</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-[30px] p-6 text-center"
            >
              <h3 className="text-3xl font-playfair text-[#3B2F2F]">50K+</h3>

              <p className="mt-2 text-sm text-[#6B5B5B]">Customers</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-[30px] p-6 text-center"
            >
              <h3 className="text-3xl font-playfair text-[#3B2F2F]">12</h3>

              <p className="mt-2 text-sm text-[#6B5B5B]">Awards</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
