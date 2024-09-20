// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  demoUrl,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={200}
        className="w-full object-cover h-48"
      />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <Link href={githubUrl} className="text-blue-500 hover:text-blue-700">
            GitHub
          </Link>
          <Link href={demoUrl} className="text-blue-500 hover:text-blue-700">
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
