import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

import projectBewear from "@/assets/project-bewear.png";
import projectClinica from "@/assets/project-clinica.png";
import projectLibrary from "@/assets/project-personal.png";
import projectPortfolio from "@/assets/project-portfolio.png";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  image: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Beewear",
    description:
      "Plataforma de e-commerce desenvolvida do zero para uma marca streetwear, com foco em performance, escalabilidade e experiência de compra. Inclui catálogo de produtos, carrinho e arquitetura preparada para crescimento.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NextJs",
      "Postgresql",
    ],
    githubUrl: "https://github.com/devantonio27/e-commerce-beewear",
    liveUrl: "https://e-commerce-beewear.vercel.app/",
    featured: true,
    image: projectBewear,
  },
  {
    title: "LandingPage para Cliníca",
    description: "Landing page moderna criada com apoio de IA, focada em conversão e apresentação institucional. Estruturada para transmitir confiança, clareza e facilitar o contato com novos pacientes.",
    technologies: ["Lovable", "Cursor"],
    liveUrl:
      "https://acolher-espaco-magic.lovable.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnfbFkYv6TBpuRJyN3WGKSY-A4FzhODbJi8Tygtm7DV81kDLQT0ue5uhsdHN8_aem_McyAyBc8rEOg2s4zFFu-LQ",
    image: projectClinica,
  },
  {
    title: "Landing Page Personal",
    description: "Página profissional para personal trainer, com foco em autoridade e captação de clientes. Design estratégico com destaque para serviços, transformação e produtos digitais.",
    technologies: ["JavaScript"],
    liveUrl: "https://carlos-lessa-personal-ochre.vercel.app/",
    image: projectLibrary,
  },
  {
    title: "Portfolio Website",
    description:
      "Portfólio pessoal com design moderno e interativo, destacando projetos, habilidades e identidade profissional. Desenvolvido com foco em performance, responsividade e experiência do usuário.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/devantonio27/ToniDev-portifolio",
    liveUrl: "https://toni-dev-portifolio.vercel.app/",
    featured: true,
    image: projectPortfolio,
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
      className="h-full"
    >
      <div className="h-full flex flex-col rounded-xl bg-card border border-border overflow-hidden group card-hover min-h-[420px] md:min-h-[450px]">
        {/* 🖼️ Imagem e Overlay */}
        <div className="relative overflow-hidden aspect-video group/image">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/image:scale-105"
          />
          {/* 🎬 Overlay no hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover/image:opacity-100 transition-all duration-300 flex items-center justify-center">
            <div className="flex gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/80 backdrop-blur-sm text-foreground hover:text-primary p-3 rounded-full transition-all duration-300 hover:scale-110 opacity-0 scale-90 group-hover/image:opacity-100 group-hover/image:scale-100"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/80 backdrop-blur-sm text-foreground hover:text-primary p-3 rounded-full transition-all duration-300 hover:scale-110 opacity-0 scale-90 group-hover/image:opacity-100 group-hover/image:scale-100"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 📝 Conteúdo */}
        <div className="p-5 md:p-6 flex flex-col flex-grow">
          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
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
