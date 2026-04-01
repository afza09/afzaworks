import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Home", "About", "Education", "Experience", "Skills", "Projects", "Services", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg shadow-background/20" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between h-16">
        <a href="#home" className="font-heading text-xl font-bold text-gradient">AK</a>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l}>
              <button onClick={() => scrollTo(l)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l}
              </button>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-md border-t border-border"
          >
            <ul className="flex flex-col p-4 gap-2">
              {links.map((l) => (
                <li key={l}>
                  <button onClick={() => scrollTo(l)} className="w-full text-left py-2 px-4 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/50">
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
