import React, { useState } from 'react';
import { Star, Quote, Play, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "USA → Canada",
      visaType: "Study Visa",
      category: "Study Visa",
      rating: 5,
      date: "March 2024",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
      text: "Lexora made my dream of studying at University of Toronto a reality. From university selection to visa approval, their guidance was exceptional. The team was always available to answer my questions and made the complex process feel simple.",
      fullStory: "I was overwhelmed by the Canadian study visa process until I found Lexora. They helped me choose the right university program, guided me through IELTS preparation, and ensured all my documents were perfect. My visa was approved in just 6 weeks!",
      institution: "University of Toronto",
      program: "Computer Science",
      hasVideo: true
    },
    {
      id: 2,
      name: "Raj Patel",
      country: "India → Australia",
      visaType: "Work Visa",
      category: "Work Visa",
      rating: 5,
      date: "February 2024",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
      text: "Professional, efficient, and reliable service. Lexora helped me secure my work visa to Australia and connected me with my current employer. Their job placement assistance was outstanding.",
      fullStory: "After struggling to find work visa opportunities in Australia, Lexora's team connected me with employers in the tech sector. They handled my skills assessment, employer nomination, and visa application flawlessly. Now I'm working as a Software Engineer in Sydney!",
      company: "Tech Solutions Pty Ltd",
      position: "Software Engineer",
      hasVideo: false
    },
    {
      id: 3,
      name: "Maria Garcia",
      country: "Spain → New Zealand",
      visaType: "PR Process",
      category: "Permanent Residency",
      rating: 5,
      date: "January 2024",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
      text: "The permanent residency process seemed overwhelming until I found Lexora. They guided me through every step and made the complex process simple and stress-free. My entire family now calls New Zealand home.",
      fullStory: "Moving my family of four to New Zealand felt impossible until Lexora stepped in. They calculated our points, helped improve our English scores, and managed our entire PR application. We received our residency approval in 14 months and couldn't be happier!",
      familyMembers: 4,
      currentStatus: "Permanent Resident",
      hasVideo: true
    },
    {
      id: 4,
      name: "Ahmed Hassan",
      country: "Egypt → UK",
      visaType: "Study Visa",
      category: "Study Visa",
      rating: 5,
      date: "December 2023",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
      text: "Outstanding service from start to finish. Lexora's team helped me get admission to my dream university in the UK and processed my visa without any delays. Their scholarship guidance saved me thousands of dollars.",
      fullStory: "I wanted to pursue my Master's in Engineering at a top UK university but was worried about costs and visa complexities. Lexora not only got me admitted to Imperial College London but also helped me secure a partial scholarship that covered 40% of my tuition fees!",
      institution: "Imperial College London",
      program: "Engineering",
      scholarship: "40% tuition coverage",
      hasVideo: false
    },
    {
      id: 5,
      name: "Emma Thompson",
      country: "UK → UAE",
      visaType: "Work Visa",
      category: "Work Visa",
      rating: 5,
      date: "November 2023",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
      text: "Lexora's expertise in Middle East work visas is unmatched. They secured my employment visa for Dubai and helped coordinate everything with my new employer. The process was smooth and professional.",
      fullStory: "When Emirates Group offered me a position in Dubai, I was excited but worried about visa procedures. Lexora handled everything from document attestation to final visa stamping. They even helped my husband get a dependent visa so we could move together!",
      company: "Emirates Group",
      position: "Marketing Director",
      hasVideo: true
    },
    {
      id: 6,
      name: "Chen Wei",
      country: "China → Germany",
      visaType: "Study Visa",
      category: "Study Visa",
      rating: 5,
      date: "October 2023",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
      text: "Lexora helped me navigate the German student visa process and language requirements. Their preparation program was comprehensive and I felt confident throughout the entire journey.",
      fullStory: "Studying in Germany required German language proficiency and complex documentation. Lexora provided German language coaching, helped with university applications to multiple cities, and ensured my blocked account and insurance were properly arranged.",
      institution: "Technical University of Munich",
      program: "Mechanical Engineering",
      hasVideo: false
    }
  ];

  const categories = ['All', 'Study Visa', 'Work Visa', 'Permanent Residency', 'Tourist Visa'];

  const successMetrics = [
    { label: "Client Satisfaction", value: "99.2%" },
    { label: "Visa Approval Rate", value: "98.1%" },
    { label: "Happy Clients", value: "5000+" },
    { label: "Countries Covered", value: "50+" }
  ];

  const filteredTestimonials = selectedCategory === 'All' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const currentTest = filteredTestimonials[currentTestimonial] || testimonials[0];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Client <span className="text-yellow-400">Testimonials</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Real stories from real people who achieved their global dreams with Lexora. Your success story could be next.
          </p>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentTestimonial(0);
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl overflow-hidden">
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

              {/* Main Testimonial */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
                "{currentTest.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
                <div className="flex items-center space-x-4">
                  <img
                    src={currentTest.image}
                    alt={currentTest.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{currentTest.name}</h4>
                    <p className="text-blue-600 font-semibold">{currentTest.country}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{currentTest.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{currentTest.visaType}</span>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="bg-white rounded-2xl p-6 mb-8">
                <h5 className="text-lg font-bold text-gray-900 mb-4">Success Details</h5>
                <p className="text-gray-700 leading-relaxed">{currentTest.fullStory}</p>
                
                <div className="mt-4 flex flex-wrap gap-4">
                  {currentTest.institution && (
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {currentTest.institution}
                    </span>
                  )}
                  {currentTest.company && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {currentTest.company}
                    </span>
                  )}
                  {currentTest.scholarship && (
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {currentTest.scholarship}
                    </span>
                  )}
                </div>
              </div>

              {/* Video Testimonial Button */}
              {currentTest.hasVideo && (
                <div className="text-center">
                  <button className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Video Testimonial
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-blue-600"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {filteredTestimonials.map((_, index) => (
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
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-blue-600"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">All Success Stories</h2>
            <p className="text-xl text-gray-600">Browse through our complete collection of client testimonials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  index === currentTestimonial ? 'ring-2 ring-blue-500 transform scale-105' : 'hover:-translate-y-1'
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
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600">{testimonial.visaType}</p>
                  </div>
                  {testimonial.hasVideo && (
                    <Play className="w-5 h-5 text-red-500" />
                  )}
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{testimonial.text}</p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{testimonial.date}</span>
                  <span>{testimonial.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Video Testimonials</h2>
            <p className="text-xl text-gray-600">Hear directly from our successful clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.filter(t => t.hasVideo).map((testimonial) => (
              <div key={testimonial.id} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300">
                    <Play className="w-8 h-8 text-white" />
                  </button>
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    VIDEO
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-blue-600">{testimonial.visaType}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{testimonial.text.slice(0, 100)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Join thousands of successful clients who trusted Lexora with their dreams. Your testimonial could be featured here next.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </a>
            <a
              href="/services"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;