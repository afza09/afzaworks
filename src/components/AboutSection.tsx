import { motion } from "framer-motion";
import { User, Code, Lightbulb } from "lucide-react";

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">About <span className="text-gradient">Me</span></h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {[
          { icon: User, title: "Who I Am", text: "A motivated and detail-oriented Computer Engineering student with a strong foundation in programming, algorithms, and problem-solving." },
          { icon: Code, title: "What I Do", text: "I build responsive websites and mobile applications using modern frameworks like Flutter, React, and PHP, turning concepts into functional products." },
          { icon: Lightbulb, title: "My Vision", text: "I'm passionate about applying technical knowledge to real-world challenges, continuously learning, and contributing to innovative solutions." },
        ].map((item, i) => (
          <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.5, delay: i * 0.15 }} className="glass-card p-6 text-center hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <item.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
