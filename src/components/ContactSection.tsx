import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "antoniodev2709@gmail.com",
    href: "mailto:antoniodev2709@fmail.com",
    color: "hover:text-red-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@devantonio27",
    href: "https://github.com/devantonio27",
    color: "hover:text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/antonio-carlos-melo",
    href: "https://www.linkedin.com/in/antonio-carlos-melo-b542a7281/",
    color: "hover:text-blue-400",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+55 (82) 9 9952-7183",
    href: "https://wa.me/5599527183",
    color: "hover:text-green-400",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Section Header */}
          <span className="text-primary font-mono text-sm">{"// Contato"}</span>
          <h2 className="section-title mt-2">
            Vamos <span className="text-gradient">conversar</span>?
          </h2>
          <p className="text-muted-foreground mt-4 mb-12 text-lg">
            Estou sempre aberto a novas oportunidades e conversas sobre
            tecnologia. Sinta-se à vontade para entrar em contato!
          </p>

          {/* Contact Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`group p-6 rounded-xl bg-card border border-border card-hover flex items-center gap-4 text-left ${link.color}`}
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="font-mono text-foreground group-hover:text-primary transition-colors">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <Button variant="glow" size="xl" asChild>
              <a href="https://wa.me/5599527183">
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
