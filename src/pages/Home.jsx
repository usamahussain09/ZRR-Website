import React from 'react';
import portfolio from "../api/portfolio.json"
import Hero from '../UI/Hero';
import Carousel from '../UI/Carousel';
import ServicesSection from '../UI/ServicesSection';
import DeliveryProcess from '../UI/DeliveryProcess';
import Testimonials from '../UI/Testimonials';
import Faq from '../UI/Faq';
import ProjectsShowcase from './ProjectsShowcase';


const Home = () => {
  return (
    <><div className="container mx-auto px-4 py-2">
      <Hero />
    </div>
    <div>
        <Carousel />
      </div>
      <ServicesSection />
      <DeliveryProcess/>
      <ProjectsShowcase/>
      <Testimonials   />
      <Faq/>
    </>

  );
};

export default Home;

