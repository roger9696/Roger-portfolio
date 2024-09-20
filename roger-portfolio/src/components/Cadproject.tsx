// pages/cad-projects.tsx
import Head from "next/head";
import Image from "next/image";

const cadProjects = [
  {
    title: "Fish Dryer Design(Exploded view)",
    date: "June 2023 - July 2024",
    description:
      "Developed a fish dryer design using SolidWorks to enhance food preservation and quality. Designed features included: 1. Controlled temperature and humidity system for optimal drying conditions 2. Automated drying cycles for consistent results 3. Sanitary design for easy cleaning and maintenance",
    software: "SolidWorks",
    imageUrl: "/images/fish dryer.jpg",
    downloadUrl: "/cad-project1.zip",
  },
  {
    title: "Smart Bed Design",
    date: "May 2023 - July 2023",
    description:
      "Designed a smart bed using SolidWorks, integrating innovative features forimproved sleep quality and user experience. Key design elements included:- Adjustable firmness and massage systems",
    software: "SolidWorks",
    imageUrl: "/images/smart bed.jpg",
    downloadUrl: "/cad-project1.zip",
  },
  {
    title: "Solar Dryer Design",
    date: "May 2022 - February 2023",
    description:
      "Designed a solar-powered dryer using SolidWorks to improve foodpreservation and reduce energy consumption. Utilized SolidWorks tools tocreate 3D models, assemblies, and drawings for manufacturing. Key features included - Optimized solar panel placement for maximum energy harnessing- Insulated drying chamber for efficient heat retention- Adjustable drying racks for versatile usage",
    software: "SolidWorks",
    imageUrl: "/images/solar dryer.jpg",
    downloadUrl: "/cad-project1.zip",
  },
  // Add more CAD projects here
];

export default function CADProjects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>CAD Projects - Your Name</title>
        <meta
          name="description"
          content="Computer-Aided Design projects by Your Name"
        />
      </Head>

      <h1 className="text-3xl font-bold mb-8">My CAD Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cadProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={400}
              height={400}
              className="w-full object-cover h-50"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-gray-700 text-base mb-4">
                {project.description}
              </p>
              <p className="text-gray-600 mb-4">Software: {project.software}</p>
              <a
                href={project.downloadUrl}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                download
              >
                Download Files
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
