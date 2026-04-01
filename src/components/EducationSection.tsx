import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const edu = [
  { degree: "B.Tech in Computer Engineering", school: "Vidyalankar Institute of Technology (VIT), Mumbai", year: "2025 – 2028", detail: "" },
  { degree: "Diploma in Computer Engineering", school: "K. J. Somaiya Polytechnic, Mumbai", year: "2022 – 2025", detail: "Percentage: 92.80%" },
];

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">My <span className="text-gradient">Education</span></h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
      </motion.div>

      <div className="relative border-l-2 border-primary/30 ml-4 space-y-10">
        {edu.map((e, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.2 }} className="relative pl-8">
            <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
              <GraduationCap size={12} className="text-primary-foreground" />
            </span>
            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{e.year}</span>
            <h3 className="font-heading font-semibold text-foreground mt-2">{e.degree}</h3>
            <p className="text-muted-foreground text-sm">{e.school}</p>
            {e.detail && <p className="text-accent text-sm font-medium mt-1">{e.detail}</p>}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
