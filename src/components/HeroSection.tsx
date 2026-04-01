import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center section-padding pt-24">
    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-primary font-heading font-medium mb-2">Hello, I'm</p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-4">
          Afza <span className="text-gradient">Khan</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-2 font-heading font-medium">Computer Engineering Student | Web & App Developer</p>
        <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
          Passionate about transforming ideas into elegant digital solutions. I combine strong technical foundations with creative problem-solving to build innovative applications.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
            <Mail size={18} /> Contact Me
          </a>
          <button className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors">
            <Download size={18} /> Download Resume
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-accent blur-lg opacity-40" />
          <img src={profileImg} alt="Afza Khan" width={400} height={400} className="relative rounded-full w-72 h-72 md:w-96 md:h-96 object-cover border-4 border-primary/30" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
