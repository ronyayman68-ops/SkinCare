import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-36 px-6 relative overflow-hidden scroll-mt-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 via-transparent to-yellow-100/20"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-[50px] p-12 md:p-20 shadow-[0_10px_50px_rgba(0,0,0,0.05)] text-center"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[#9F7F7F] mb-6">
            Contact Us
          </p>

          <h2 className="text-5xl md:text-6xl font-playfair text-[#3B2F2F] leading-tight">
            Begin Your
            <br />
            Skincare Journey
          </h2>

          <p className="max-w-2xl mx-auto mt-8 text-[#6B5B5B] text-lg leading-relaxed">
            Join the Lunelle community and discover luxurious skincare crafted
            for healthy, radiant beauty.
          </p>

          {/* Form */}
          <div className="mt-14 flex flex-col md:flex-row gap-5 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-full bg-white/40 border border-white/50 outline-none backdrop-blur-xl w-full md:w-[400px] text-[#3B2F2F] placeholder:text-[#9F7F7F]"
            />

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="px-10 py-4 rounded-full bg-[#3B2F2F] text-white uppercase tracking-[0.2em] text-sm hover:bg-[#5B4949] transition duration-300 shadow-xl shadow-pink-100"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
