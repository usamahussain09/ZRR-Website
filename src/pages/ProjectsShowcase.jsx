import { Link } from "react-router-dom";
import portfolio from "../api/portfolio.json"

const ProjectsShowcase = () => {
  return (
    <div className="text-white mb-14">
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
          {portfolio.map((item, index) => (
            <Link to={`/mywork/${item.id}`} key={index} className="group">
              <div className="rounded-3xl overflow-hidden bg-transparent border-[1px] mb-4 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <img
                  src={item.hover}
                  alt={`${item.title} hover`}
                  className="w-full aspect-[4/3] object-cover absolute top-0 left-0 transform transition-transform duration-300 group-hover:scale-105 opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="px-1">
                <h3 className="text-xl font-grotesk font-medium mb-1">{item.title}</h3>
                <p className="text-white font-grotesk text-lg">{item.type}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
