import React from 'react';

const services = [
  "Web Development",
  "Web Designing",
  "SEO Agency",
  "Game Development",
  "3D Modeling",
  "AR/VR",
  "UI/UX",
  "Mobile App Development",
];

const Carousel = () => {
  return (
    <>
    <p className=" font-grotesk flex items-center justify-center text-white text-sm tracking-tight sm:text-sm md:text-xl lg:text-sm xsm:text-sm">Trusted By 250+ Companies</p>
    <div className="overflow-hidden whitespace-nowrap">
        
        <div className="my-8 inline-block animate-marquee">
          {services.map((service, index) => (
            <span key={index} className="font-grotesk text-3xl font-semibold mx-8 text-white inline-block">
              {service}
            </span>
          ))}
        </div>
        <style>
          {`
            .animate-marquee {
              display: flex;
              animation: marquee 20s linear infinite;
              

            }
            @keyframes marquee {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </div>
    </>
    
  );
};

export default Carousel;