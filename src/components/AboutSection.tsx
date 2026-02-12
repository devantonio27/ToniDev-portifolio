import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Laptop, Target, Coffee } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    label: "Clean Code",
    description: "Código limpo e organizado",
  },
  { icon: Laptop, label: "Responsivo", description: "Design adaptável" },
  { icon: Target, label: "Foco", description: "Resultados e qualidade" },
  { icon: Coffee, label: "Dedicação", description: "Sempre aprendendo" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm"
            >
              {"// Sobre mim"}
            </motion.span>
            <h2 className="section-title mt-2">
              Quem sou <span className="text-gradient">eu</span>
            </h2>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed">
                Sou um desenvolvedor web apaixonado por criar soluções digitais
                que fazem a diferença. Minha jornada na programação começou com
                a curiosidade de entender como as coisas funcionam, e hoje
                transformo essa curiosidade em código.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Atualmente focado em{" "}
                <span className="text-foreground font-medium">
                  desenvolvimento frontend
                </span>{" "}
                com React e TypeScript, mas também exploro o backend com
                Node.js. Busco constantemente aprender novas tecnologias e boas
                práticas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">Objetivo:</span>{" "}
                Estou em busca de oportunidades de{" "}
                <span className="text-foreground font-medium">
                  estágio ou posição júnior
                </span>{" "}
                onde possa contribuir, aprender e crescer como profissional.
              </p>

              {/* Tech Stack */}
              <div className="pt-4">
                <p className="text-sm font-mono text-primary mb-3">
                  {"// Tecnologias principais"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "Node.js",
                    "Tailwind CSS",
                    "Git",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-secondary text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/50 border border-transparent transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl bg-card border border-border card-hover group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
