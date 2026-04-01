import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Globe } from "lucide-react";

const projects = [
  {
    icon: Smartphone,
    title: "KJSP Application",
    role: "Frontend Developer",
    tools: "Flutter, FlutterFlow, Firebase",
    features: ["Student dashboard", "Timetable & notice board", "Results & to-do list", "Clean UI & responsiveness"],
  },
  {
    icon: Globe,
    title: "Hospital Management Website",
    role: "Developer",
    tools: "PHP, MySQL",
    features: ["Patient registration", "Doctor appointments", "Billing system & medical records", "Secure data handling"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">My <span className="text-gradient">Projects</span></h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="glass-card p-6 hover:border-primary/50 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <p.icon className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.role}</p>
              </div>
            </div>
            <p className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-4">{p.tools}</p>
            <ul className="space-y-2">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ArrowRight size={14} className="text-primary flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
