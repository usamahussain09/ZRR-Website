import { HiPaintBrush } from "react-icons/hi2";
import { HiMiniPuzzlePiece } from "react-icons/hi2";
import { PiCarBatteryFill } from "react-icons/pi";

const ServicesSection = () => {
  const services = [
    {
      icon: HiPaintBrush,
      title: "Design",
      description:
        "Our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless.",
    },
    {
      icon: HiMiniPuzzlePiece,
      title: "Engineering",
      description:
        "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications.",
    },
    {
      icon: PiCarBatteryFill,
      title: "Project Management",
      description:
        "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications.",
    },
  ]

  return (
<div className="min-h-[10vh] text-white px-4 py-16">
  <div className="max-w-7xl mx-auto">
    {/* Header Section */}
    <div className="text-center mb-16">
      <p className="text-purple-500 mb-4 font-grotesk text-xl">Services</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 font-grotesk">
        We help to grow your business
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-2xl font-grotesk">
        At Haydevs, we offer a spectrum of digital services tailored to elevate
        your online presence.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {services.map((service, index) => (
        <div
          key={index}
          className="py-8 px-6 rounded-3xl border border-[#FFFFFF] border-opacity-10 hover:[background:radial-gradient(190.4%_308.48%_at_180.05%_178.81%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.18)_45.27%,rgba(255,255,255,0)_100%)] hover:backdrop-blur-[1px] hover:[animation-timing-function:ease-out] hover:[animation-duration:1300ms]"
        >
          {/* Icon */}
          <div className="mb-6">
            <service.icon className="w-14 h-14" />
          </div>
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-grotesk font-semibold mb-4">
            {service.title}
          </h3>
          {/* Description */}
          <p className="text-gray-400 text-base md:text-lg font-grotesk leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>

    {/* Details Button */}
    <div className="text-center">
      <button className="font-grotesk px-12 py-4 border border-gray-800 rounded-lg hover:bg-gradient-to-l hover:from-purple-600 hover:to-purple-400  transition-colors duration-200">
        Details
      </button>
    </div>
  </div>
</div>

  )
}

export default ServicesSection;