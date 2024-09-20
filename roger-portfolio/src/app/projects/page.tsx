// pages/projects.tsx
import ProjectCard from "@/components/projectCard";
import Head from "next/head";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    technologies: ["React", "Next.js", "TypeScript"],
    imageUrl: "/project1.jpg",
    githubUrl: "https://github.com/yourusername/project1",
    demoUrl: "https://project1-demo.com",
  },
  {
    title: "Food Recipe Website",
    description: "A website for sharing and discovering new food recipes",
    technologies: ["React", "Next.js", "TypeScript", "CSS"],
    imageUrl: "/food-recipe.jpg",
    githubUrl: "(link unavailable)",
    demoUrl: "(link unavailable)",
  },
  {
    title: "Todo Website",
    description: "A simple todo list website for managing tasks",
    technologies: ["React", "Next.js", "TypeScript", "JavaScript"],
    imageUrl: "/todo-website.jpg",
    githubUrl: "(link unavailable)",
    demoUrl: "(link unavailable)",
  },
  {
    title: "Dashboard Website",
    description: "A dashboard website for monitoring and analyzing data",
    technologies: ["React", "Next.js", "TypeScript", "CSS", "HTML"],
    imageUrl: "/dashboard-website.jpg",
    githubUrl: "(link unavailable)",
    demoUrl: "(link unavailable)",
  },
  {
    title: "Contact Management System (Backend)",
    description: "A backend system for managing contacts",
    technologies: ["Django", "Python", "MySQL"],
    imageUrl: "/contact-management-backend.jpg",
    githubUrl: "(link unavailable)",
    demoUrl: "",
  },
  {
    title: "Video Sharing Website (Full Stack)",
    description: "A full-stack video sharing website",
    technologies: ["Next.js", "React", "TypeScript", "Django", "Python"],
    imageUrl: "/video-sharing-website.jpg",
    githubUrl: "(link unavailable)",
    demoUrl: "(link unavailable)",
  },
  {
    title: "Contact Management System (Full Stack with Next.js)",
    description: "A full-stack contact management system using Next.js",
    technologies: ["Next.js", "React", "TypeScript", "Django", "Python"],
    imageUrl: "/contact-management-nextjs.jpg",
    githubUrl: "(link unavailable)",
    demoUrl: "(link unavailable)",
  },

  // Add more projects here
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Projects - Your Name</title>
        <meta
          name="description"
          content="Web development projects by Your Name"
        />
      </Head>

      <h1 className="text-3xl font-bold mb-8">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
