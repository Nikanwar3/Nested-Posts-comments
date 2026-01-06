import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, Camera, Home, FileText, Users, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Study Visa",
      description: "Expert guidance for student visas to top universities worldwide",
      features: ["University selection", "Document preparation", "Interview coaching", "Scholarship assistance"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Briefcase,
      title: "Work Visa",
      description: "Professional employment visa services for global career opportunities",
      features: ["Job matching", "Employer liaison", "Work permit processing", "Family visa support"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Camera,
      title: "Tourist Visa",
      description: "Hassle-free tourist and travel visa processing for all destinations",
      features: ["Quick processing", "Travel insurance", "Itinerary planning", "Multiple entry options"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Home,
      title: "PR Process",
      description: "Comprehensive permanent residency and immigration services",
      features: ["Eligibility assessment", "Points calculation", "Application filing", "Follow-up support"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Complete document preparation and verification services",
      features: ["Document review", "Attestation support", "Translation services", "Portfolio creation"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Users,
      title: "Interview Prep",
      description: "Mock interviews and preparation for visa success",
      features: ["Mock interviews", "Question bank", "Confidence building", "Success strategies"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive visa solutions tailored to your dreams. From study abroad to permanent residency, we guide you every step of the way.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Card Header */}
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              
              <div className="p-8">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;