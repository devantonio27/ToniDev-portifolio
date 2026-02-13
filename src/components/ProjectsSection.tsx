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
    title: "E-commerce Beewear",
    description:
      "Plataforma de e-commerce desenvolvida do zero para o segmento de moda streetwear, focado em performance, organização de código e escalabilidade, aplicando boas práticas de desenvolvimento fullstack ",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NextJs",
      "Postgresql",
    ],
    githubUrl: "https://github.com/devantonio27/e-commerce-beewear",
    featured: true,
  },
  {
    title: "LandingPage para Cliníca",
    description: "Landing page criada com auxilio de IA (lovable) para clínica",
    technologies: ["Lovable", "Cursor"],
    githubUrl: "https://github.com",
    liveUrl:
      "https://acolher-espaco-magic.lovable.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnfbFkYv6TBpuRJyN3WGKSY-A4FzhODbJi8Tygtm7DV81kDLQT0ue5uhsdHN8_aem_McyAyBc8rEOg2s4zFFu-LQ",
  },
  {
    title: "Community Librabry",
    description:
      "API de biblicoteca comunitária, criada inteiramente em JS para fins didáticos.",
    technologies: ["JavaScript"],
    githubUrl: "https://github.com/devantonio27/community-library",
  },
  {
    title: "Portfolio Website",
    description:
      "Site de portfólio pessoal com design moderno, animações suaves e totalmente responsivo.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/devantonio27/ToniDev-portifolio",
    liveUrl: "https://toni-dev-portifolio.vercel.app/",
    featured: true,
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
              href="https://github.com/devantonio27"
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
