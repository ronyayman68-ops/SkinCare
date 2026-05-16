import { motion } from "framer-motion";

export default function Ingredients() {
  const ingredients = [
    {
      name: "Rose Extract",
      description: "Deeply hydrates and restores your skin's natural glow.",
      emoji: "🌹",
    },
    {
      name: "Vitamin C",
      description: "Brightens skin tone and improves texture naturally.",
      emoji: "🍊",
    },
    {
      name: "Aloe Vera",
      description: "Soothes irritation and provides refreshing hydration.",
      emoji: "🌿",
    },
    {
      name: "Hyaluronic Acid",
      description: "Locks in moisture for soft and youthful skin.",
      emoji: "💧",
    },
  ];

  return (
    <section id="ingredients" className="py-36 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-pink-100/40 rounded-full blur-[120px]"></div>

      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-violet-100/40 rounded-full blur-[120px]"></div>

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
            Pure Formulas
          </p>

          <h2 className="text-5xl md:text-6xl font-playfair text-[#3B2F2F]">
            Natural Ingredients
          </h2>

          <p className="max-w-2xl mx-auto mt-8 text-[#6B5B5B] text-lg leading-relaxed">
            Carefully selected botanical ingredients combined with modern
            skincare science for healthy, radiant skin.
          </p>
        </motion.div>

        {/* Ingredients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative backdrop-blur-xl bg-white/30 border border-white/40 rounded-[36px] p-8 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 to-violet-100/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Emoji */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="text-6xl relative"
              >
                {item.emoji}
              </motion.div>

              {/* Content */}
              <div className="relative mt-8">
                <h3 className="text-2xl font-playfair text-[#3B2F2F]">
                  {item.name}
                </h3>

                <p className="mt-4 text-[#6B5B5B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
