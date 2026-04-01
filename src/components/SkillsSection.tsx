import { motion } from "framer-motion";

const technical = [
  { name: "C", level: 80 }, { name: "Java", level: 75 }, { name: "PHP", level: 85 }, { name: "Python", level: 70 },
  { name: "Flutter / FlutterFlow", level: 80 }, { name: "HTML / CSS / JS", level: 90 },
  { name: "DSA & OOP", level: 75 }, { name: "MySQL", level: 80 },
];

const soft = ["Teamwork & Collaboration", "Communication Skills", "Problem Solving", "Adaptability"];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">My <span className="text-gradient">Skills</span></h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-heading font-semibold text-foreground mb-6">Technical Skills</h3>
          <div className="space-y-4">
            {technical.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground">{s.name}</span>
                  <span className="text-primary">{s.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.08 }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-foreground mb-6">Soft Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {soft.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-4 text-center hover:border-primary/50 transition-colors">
                <p className="text-sm text-foreground font-medium">{s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
