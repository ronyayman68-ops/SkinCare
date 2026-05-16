export default function Navbar() {
const navItems = [
  { name: "Home", link: "#home" },
  { name: "Shop", link: "#shop" },
  { name: "Ingredients", link: "#ingredients" },
  { name: "About", link: "#about" },
  { name: "Reviews", link: "#reviews" },
  { name: "Contact", link: "#contact" },
];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 py-6">
      <nav className="w-full max-w-7xl backdrop-blur-xl bg-white/40 border border-white/50 rounded-[32px] shadow-xl shadow-pink-100/40 px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-pink-200 via-rose-200 to-yellow-100 flex items-center justify-center shadow-md">
            ✿
          </div>

          <h1 className="text-2xl italic tracking-wide text-[#3B2F2F] font-['Playfair_Display']">
            Lunelle
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-[#6B5B5B]">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative uppercase tracking-[0.2em] text-[12px] cursor-pointer hover:text-[#3B2F2F] transition-all duration-300 group"
            >
              <a href={item.link}>{item.name}</a>

              <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-gradient-to-r from-pink-300 to-yellow-200 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button className="hidden md:block px-7 py-3 rounded-full bg-[#3B2F2F] text-white uppercase tracking-[0.2em] text-[11px] hover:bg-[#5B4949] transition duration-300 shadow-lg shadow-pink-100">
          Shop Now
        </button>
      </nav>
    </header>
  );
}
