import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "E-commerce Dashboard",
    description:
      "Dashboard administrativo para gestão de e-commerce com gráficos interativos, controle de estoque e relatórios em tempo real.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "Task Manager App",
    description:
      "Aplicação de gerenciamento de tarefas com drag and drop, categorias e sincronização em tempo real.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "Weather App",
    description:
      "Aplicativo de previsão do tempo com geolocalização, busca por cidade e visualização de dados meteorológicos.",
    technologies: ["React", "API REST", "CSS Modules"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Portfolio Website",
    description:
      "Site de portfólio pessoal com design moderno, animações suaves e totalmente responsivo.",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative ${project.featured ? "md:col-span-2" : ""}`}
    >
      <div className="h-full p-6 rounded-xl bg-card border border-border card-hover flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <Folder className="w-10 h-10 text-primary" />
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">
            {"// Projetos"}
          </span>
          <h2 className="section-title mt-2">
            O que eu <span className="text-gradient">construí</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Alguns dos projetos que desenvolvi para aprender e praticar novas
            tecnologias. Cada projeto representa um desafio superado e uma nova
            habilidade adquirida.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              Ver mais no GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
