import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, MapPin } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      id: 1,
      title: "From Engineer to Tech Lead in Silicon Valley",
      name: "Priya Sharma",
      country: "India → USA",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      beforeImage: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      afterImage: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      date: "March 2023",
      visaType: "H1-B Work Visa",
      description: "Priya transformed her career from a software engineer in Bangalore to a Tech Lead at Google in California. Lexora guided her through the complex H1-B process and job placement assistance.",
      timeline: [
        "Initial consultation and profile assessment",
        "Job search assistance and interview preparation", 
        "H1-B visa application and documentation",
        "Successful placement at Google"
      ],
      achievement: "300% salary increase and dream job at Google"
    },
    {
      id: 2,
      title: "Medical Student Dreams Realized in Canada",
      name: "Ahmed Al-Rashid",
      country: "UAE → Canada",
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      beforeImage: "https://images.pexels.com/photos/5452207/pexels-photo-5452207.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      afterImage: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      date: "September 2023",
      visaType: "Study Permit",
      description: "Ahmed successfully gained admission to the University of Toronto's medical program after Lexora helped navigate the competitive application process and visa requirements.",
      timeline: [
        "University selection and application strategy",
        "MCAT preparation and English proficiency tests",
        "Study permit application and biometrics",
        "Successful enrollment at University of Toronto"
      ],
      achievement: "Accepted into top 5 medical school in Canada"
    },
    {
      id: 3,
      title: "Family Reunited Through PR Process",
      name: "Lisa Chen",
      country: "China → Australia",
      image: "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      beforeImage: "https://images.pexels.com/photos/1128674/pexels-photo-1128674.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      afterImage: "https://images.pexels.com/photos/1128316/pexels-photo-1128316.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      date: "January 2024",
      visaType: "Permanent Residency",
      description: "Lisa and her family achieved permanent residency in Australia through the skilled migration program, allowing them to build a new life in Melbourne.",
      timeline: [
        "Skills assessment and points calculation",
        "Expression of Interest (EOI) submission",
        "Invitation to apply and documentation",
        "PR grant and successful migration"
      ],
      achievement: "Permanent residency for family of four"
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStoryData = stories[currentStory];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real journeys of transformation. See how we've helped people achieve their global dreams.
          </p>
        </div>

        {/* Main Story Display */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Story Header */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={currentStoryData.image}
              alt={currentStoryData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{currentStoryData.date}</span>
                <MapPin className="w-4 h-4 ml-4" />
                <span className="text-sm">{currentStoryData.country}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{currentStoryData.title}</h3>
              <p className="text-blue-200">{currentStoryData.visaType}</p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Client Info */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {currentStoryData.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">{currentStoryData.name}</h4>
                <p className="text-blue-600">{currentStoryData.country}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {currentStoryData.description}
            </p>

            {/* Before/After or Journey Timeline */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Timeline */}
              <div>
                <h5 className="text-xl font-bold text-gray-900 mb-4">Journey Timeline</h5>
                <div className="space-y-4">
                  {currentStoryData.timeline.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievement Highlight */}
              <div>
                <h5 className="text-xl font-bold text-gray-900 mb-4">Key Achievement</h5>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-l-4 border-green-500">
                  <p className="text-green-800 font-semibold text-lg">{currentStoryData.achievement}</p>
                </div>
                
                <div className="mt-6">
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                    Read Full Story
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            onClick={prevStory}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-blue-600"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex space-x-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStory ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextStory}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-blue-600"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Quick Stories Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${
                index === currentStory ? 'ring-2 ring-blue-500 transform scale-105' : 'hover:shadow-xl hover:-translate-y-1'
              }`}
              onClick={() => setCurrentStory(index)}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h5 className="font-bold text-gray-900 mb-2 line-clamp-2">{story.title}</h5>
                <p className="text-sm text-blue-600 mb-1">{story.name}</p>
                <p className="text-xs text-gray-500">{story.visaType}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;