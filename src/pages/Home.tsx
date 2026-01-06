import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import WhyChoose from '../components/home/WhyChoose';
import Testimonials from '../components/home/TestimonialsSection';
import SuccessStories from '../components/home/SuccessStories';
import EventsUpdates from '../components/home/EventsUpdates';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <WhyChoose />
      <Testimonials />
      <SuccessStories />
      <EventsUpdates />
    </div>
  );
};

export default Home;