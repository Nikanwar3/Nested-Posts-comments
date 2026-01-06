import React from 'react';
import { Award, Users, Globe, TrendingUp, Target, Heart, Shield } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, number: "5000+", label: "Happy Clients", color: "from-blue-500 to-blue-600" },
    { icon: Award, number: "98%", label: "Success Rate", color: "from-green-500 to-green-600" },
    { icon: Globe, number: "50+", label: "Countries", color: "from-purple-500 to-purple-600" },
    { icon: TrendingUp, number: "10+", label: "Years Experience", color: "from-orange-500 to-orange-600" }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To empower individuals and families to achieve their global dreams through expert visa consultancy and unwavering support throughout their immigration journey."
    },
    {
      icon: Heart,
      title: "Vision", 
      description: "To be the world's most trusted immigration consultancy, bridging cultures and creating opportunities for people to build better lives across borders."
    },
    {
      icon: Shield,
      title: "Values",
      description: "Integrity, transparency, and client success are at the heart of everything we do. We believe in honest advice and ethical practices."
    }
  ];

  const milestones = [
    { year: "2014", event: "Lexora Founded", description: "Started with a vision to simplify global immigration" },
    { year: "2016", event: "1000+ Successful Cases", description: "Reached our first major milestone in client success" },
    { year: "2018", event: "International Expansion", description: "Extended services to cover 25+ countries" },
    { year: "2020", event: "Digital Transformation", description: "Launched online consultations and digital services" },
    { year: "2022", event: "5000+ Happy Clients", description: "Celebrated 5000 successful visa approvals" },
    { year: "2024", event: "Industry Leadership", description: "Recognized as leading visa consultancy" }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      position: "Founder & CEO",
      experience: "15+ years",
      specialty: "Immigration Law",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      position: "Director of Operations", 
      experience: "12+ years",
      specialty: "Student Visas",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Priya Patel",
      position: "Senior Consultant",
      experience: "10+ years", 
      specialty: "Work Visas",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "David Rodriguez",
      position: "PR Specialist",
      experience: "8+ years",
      specialty: "Permanent Residency",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face"
    }
  ];

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
            About <span className="text-yellow-400">Lexora</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Your trusted partner in making global dreams come true. We've been transforming lives through expert immigration services for over a decade.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2014, Lexora Global Visa Consultancy began with a simple yet powerful vision: to make global opportunities accessible to everyone. What started as a small consultancy has grown into one of the most trusted names in immigration services.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our journey has been marked by countless success stories - students who achieved their academic dreams, professionals who built international careers, and families who found new homes across the globe.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we continue to innovate and expand our services, always keeping our clients' dreams at the center of everything we do. With a team of experienced consultants and a track record of excellence, we're proud to be your gateway to global opportunities.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl mb-6`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that mark our growth and commitment to excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 mx-auto rounded-2xl object-cover shadow-lg group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-semibold mb-1">{member.position}</p>
                <p className="text-gray-500 text-sm mb-1">{member.experience}</p>
                <p className="text-gray-600 text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Join thousands of successful clients who trusted Lexora with their dreams. Let's make your global aspirations a reality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
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

export default About;