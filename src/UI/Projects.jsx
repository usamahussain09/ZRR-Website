import p1 from "../assets/p1.png";
import p1_hover from "../assets/p1-hover.png";
import p3 from "../assets/p3.png";
import p3_hover from "../assets/p3-hover.png";
import { Link } from "react-router-dom";

const ProjectsShowcase = () => {
  const projects = [
    {
      title: "Verbalizelt",
      type: "Mobile App",
      image: p1,
      hoverImage: p1_hover, // Image on hover
    },
    {
      title: "Jualan",
      type: "Website",
      image: p3,
      hoverImage: p3_hover, // Image on hover
    },
    {
      title: "Verbalizelt",
      type: "Mobile App",
      image: p1,
      hoverImage: p1_hover, // Image on hover
    },
    {
      title: "Verbalizelt",
      type: "Mobile App",
      image: p3,
      hoverImage: p3_hover, // Image on hover
    },
    {
      title: "Jualan",
      type: "Website",
      image: p1,
      hoverImage: p1_hover, // Image on hover
    },
    {
      title: "Verbalizelt",
      type: "Mobile App",
      image: p3,
      hoverImage: p3_hover, // Image on hover
    },
  ];

  return (
    <div className="text-white mb-10">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-grotesk text-purple-500 text-xl mb-6">Projects</h2>
          <p className="max-w-[800px] mx-auto text-white font-grotesk text-lg leading-relaxed">
            As a seasoned creator of contemporary, user-friendly web designs and
            digital solutions, I aim to assist you in constructing the brand of your
            fantasies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map((project, index) => (
            <Link to={`/mywork/${project.id}`} key={index} className="group">
              <div className="rounded-3xl overflow-hidden bg-transparent border-[1px] mb-4 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <img
                  src={project.hoverImage}
                  alt={`${project.title} hover`}
                  className="w-full aspect-[4/3] object-cover absolute top-0 left-0 transform transition-transform duration-300 group-hover:scale-105 opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="px-1">
                <h3 className="text-xl font-grotesk font-medium mb-1">{project.title}</h3>
                <p className="text-white font-grotesk text-lg">{project.type}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
