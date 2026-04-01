import { motion } from "framer-motion";
import { Globe, Smartphone, Database, Palette, Brain } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Responsive websites using HTML, CSS, JavaScript, and PHP" },
  { icon: Smartphone, title: "App Development", desc: "Flutter-based cross-platform mobile applications" },
  { icon: Database, title: "Backend Development", desc: "Server-side logic with MySQL integration" },
  { icon: Palette, title: "UI Design", desc: "Clean, intuitive, and user-friendly interfaces" },
  { icon: Brain, title: "Problem Solving & DSA", desc: "Algorithmic thinking and optimized solutions" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">My <span className="text-gradient">Services</span></h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="glass-card p-6 text-center hover:border-primary/50 transition-all group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={26} />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
