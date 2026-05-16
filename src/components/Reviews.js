import { motion } from "framer-motion";

export default function Reviews() {
  const reviews = [
    {
      name: "Sophia Williams",
      review:
        "My skin has never felt this hydrated and radiant before. Lunelle products feel incredibly luxurious.",
    },
    {
      name: "Emma Johnson",
      review:
        "The textures, packaging, and results are absolutely beautiful. It feels like a spa ritual every day.",
    },
    {
      name: "Olivia Brown",
      review:
        "I love how gentle yet effective the formulas are. My skin glows naturally after only a few weeks.",
    },
  ];

  return (
    <section
      id="reviews"
      className="py-36 px-6 relative overflow-hidden scroll-mt-32"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-100/40 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-100/40 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[#9F7F7F] mb-4">
            Testimonials
          </p>

          <h2 className="text-5xl md:text-6xl font-playfair text-[#3B2F2F]">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-[40px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] relative overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 to-yellow-100/20 opacity-0 hover:opacity-100 transition duration-500"></div>

              {/* Stars */}
              <div className="relative text-2xl mb-6">✨ ✨ ✨ ✨ ✨</div>

              {/* Review */}
              <p className="relative text-[#6B5B5B] leading-relaxed text-lg">
                "{item.review}"
              </p>

              {/* User */}
              <div className="relative mt-10">
                <h3 className="text-2xl font-playfair text-[#3B2F2F]">
                  {item.name}
                </h3>

                <p className="text-[#9F7F7F] mt-2 text-sm uppercase tracking-[0.2em]">
                  Verified Customer
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
