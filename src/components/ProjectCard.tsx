// ProjectCard.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-4 rounded shadow"
    >
      <Image
        src={project.images[0]}
        alt={project.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover rounded mb-4"
        loading="lazy"
      />
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p>{project.description}</p>
      <Link
        href={`/projects/${project.id}`}
        className="text-primary hover:underline"
      >
        عرض التفاصيل
      </Link>
    </motion.div>
  );
}
