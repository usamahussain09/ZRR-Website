import React from 'react';
import Hero from '../UI/Hero';
import Carousel from '../UI/Carousel';
import ServicesSection from '../UI/ServicesSection';
import DeliveryProcess from '../UI/DeliveryProcess';
import Projects from '../UI/Projects';
import Testimonials from '../UI/Testimonials';


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
      <Projects/>
      <Testimonials   />
    
    </>

  );
};

export default Home;

