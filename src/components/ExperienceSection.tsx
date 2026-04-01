import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Work <span className="text-gradient">Experience</span></h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="glass-card p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Briefcase className="text-primary" size={22} />
          </div>
          <div>
            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">June – July 2024</span>
            <h3 className="font-heading font-semibold text-foreground mt-2 text-lg">Trainee Web Developer Intern</h3>
            <p className="text-muted-foreground text-sm mb-3">iDiligence Solutions Pvt. Ltd., Aurangabad</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">▹</span>Developed an Office Attendance Management System</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">▹</span>Implemented employee login, attendance tracking, and automated reports</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">▹</span>Full-stack development using HTML, CSS, JavaScript, PHP, MySQL</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
