import { motion } from "framer-motion";

export default function Shop() {
  const products = [
    {
      name: "Rose Elixir",
      category: "Hydrating Serum",
      price: "$48",
      emoji: "🧴",
    },
    {
      name: "Velvet Cream",
      category: "Night Repair",
      price: "$62",
      emoji: "🫧",
    },
    {
      name: "Golden Essence",
      category: "Vitamin C Oil",
      price: "$54",
      emoji: "✨",
    },
  ];

  return (
    <section id="shop" className="py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-100/40 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-100/40 rounded-full blur-[120px]"></div>

      {/* Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[#9F7F7F] mb-4">
            Our Collection
          </p>

          <h2 className="text-5xl md:text-6xl font-playfair text-[#3B2F2F]">
            Best Sellers
          </h2>
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="group relative backdrop-blur-xl bg-white/30 border border-white/40 rounded-[40px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] overflow-hidden"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 to-yellow-100/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Product Visual */}
              <div className="relative flex justify-center items-center h-[260px]">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="text-8xl"
                >
                  {product.emoji}
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="relative text-center mt-6">
                <p className="uppercase tracking-[0.25em] text-[11px] text-[#9F7F7F] mb-3">
                  {product.category}
                </p>

                <h3 className="text-3xl font-playfair text-[#3B2F2F]">
                  {product.name}
                </h3>

                <p className="mt-4 text-[#6B5B5B]">{product.price}</p>

                {/* Button */}
                <button className="mt-8 px-8 py-3 rounded-full bg-[#3B2F2F] text-white text-sm hover:bg-[#5B4949] transition duration-300">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
