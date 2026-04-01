import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-2">Let's Work <span className="text-gradient">Together</span></h2>
          <p className="text-muted-foreground text-center mb-12">Have a project in mind? Let's connect!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "afza.khan@email.com" },
              { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
              { icon: Github, label: "GitHub", value: "github.com/afzakhan" },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <c.icon className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  <p className="text-foreground text-sm font-medium">{c.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text" placeholder="Your Name" required maxLength={100}
              value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="email" placeholder="Your Email" required maxLength={255}
              value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <textarea
              placeholder="Your Message" required rows={4} maxLength={1000}
              value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <button type="submit" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity w-full justify-center">
              <Send size={18} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
