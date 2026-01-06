import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "USA",
      visaType: "Study Visa - Canada",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Lexora made my dream of studying in Canada a reality. Their expert guidance and support throughout the entire process was exceptional. I couldn't have done it without them!",
      university: "University of Toronto"
    },
    {
      name: "Raj Patel",
      country: "India",
      visaType: "Work Visa - Australia",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Professional, efficient, and reliable service. Lexora helped me secure my work visa to Australia in record time. Their team is knowledgeable and always available for support.",
      company: "Tech Solutions Pty Ltd"
    },
    {
      name: "Maria Garcia",
      country: "Spain",
      visaType: "PR Process - New Zealand",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "The permanent residency process seemed overwhelming until I found Lexora. They guided me through every step and made the complex process simple and stress-free.",
      status: "Permanent Resident"
    },
    {
      name: "Ahmed Hassan",
      country: "Egypt",
      visaType: "Study Visa - UK",
      rating: 5,
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Outstanding service from start to finish. Lexora's team helped me get admission to my dream university in the UK and processed my visa without any delays.",
      university: "Imperial College London"
    },
    {
      name: "Emma Thompson",
      country: "UK",
      visaType: "Work Visa - Dubai",
      rating: 5,
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Lexora's expertise in Middle East work visas is unmatched. They secured my employment visa for Dubai and helped coordinate everything with my new employer.",
      company: "Emirates Group"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who achieved their dreams with Lexora
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl">
            <div className="p-8 md:p-12">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-4">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTest.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
                "{currentTest.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <img
                  src={currentTest.image}
                  alt={currentTest.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100"
                />
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900">{currentTest.name}</h4>
                  <p className="text-blue-600 font-semibold">{currentTest.country}</p>
                </div>
              </div>

              {/* Visa Type and Additional Info */}
              <div className="text-center">
                <p className="text-gray-600 mb-2">{currentTest.visaType}</p>
                {currentTest.university && (
                  <p className="text-sm text-gray-500">{currentTest.university}</p>
                )}
                {currentTest.company && (
                  <p className="text-sm text-gray-500">{currentTest.company}</p>
                )}
                {currentTest.status && (
                  <p className="text-sm text-green-600 font-semibold">{currentTest.status}</p>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-blue-600 hover:text-blue-700"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-blue-600 hover:text-blue-700"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-300 cursor-pointer ${
                index === currentTestimonial ? 'ring-2 ring-blue-500 transform scale-105' : 'hover:shadow-xl'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                  <p className="text-sm text-blue-600">{testimonial.visaType}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-sm line-clamp-3">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;