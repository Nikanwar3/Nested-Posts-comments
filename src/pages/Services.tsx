import React, { useState } from 'react';
import { GraduationCap, Briefcase, Camera, Home, FileText, Users, ArrowRight, CheckCircle, Star, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: GraduationCap,
      title: "Study Visa",
      shortDesc: "Expert guidance for student visas worldwide",
      description: "Turn your academic dreams into reality with our comprehensive study visa services. We partner with top universities globally and provide end-to-end support for your educational journey.",
      features: [
        "University selection and application assistance",
        "Scholarship guidance and financial aid support", 
        "Document preparation and verification",
        "Visa interview coaching and preparation",
        "Pre-departure orientation and support",
        "Post-arrival assistance and accommodation help"
      ],
      process: [
        "Free initial consultation and profile assessment",
        "University shortlisting based on your goals and budget",
        "Application preparation and submission",
        "Scholarship applications and financial planning",
        "Visa documentation and application filing",
        "Interview preparation and mock sessions",
        "Visa approval and pre-departure briefing",
        "Post-arrival support and settlement assistance"
      ],
      countries: ["USA", "Canada", "UK", "Australia", "New Zealand", "Germany", "Ireland", "Netherlands"],
      image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      successRate: "96%",
      avgProcessingTime: "3-6 months",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Briefcase,
      title: "Work Visa",
      shortDesc: "Professional employment visa services globally",
      description: "Build your international career with our expert work visa assistance. We connect you with global employers and handle the complex visa requirements for seamless job placement.",
      features: [
        "Job search and employer matching services",
        "Resume optimization for international standards",
        "Work permit and visa application processing",
        "Employer liaison and documentation support",
        "Salary negotiation and contract review",
        "Family visa coordination and support"
      ],
      process: [
        "Career consultation and skills assessment",
        "Job market analysis and opportunity identification",
        "Resume preparation and LinkedIn optimization",
        "Job application and interview coordination",
        "Offer letter negotiation and contract review",
        "Work visa documentation and submission",
        "Visa processing and approval tracking",
        "Pre-departure and post-arrival support"
      ],
      countries: ["USA", "Canada", "Australia", "UK", "UAE", "Singapore", "Germany", "Netherlands"],
      image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      successRate: "94%",
      avgProcessingTime: "2-5 months",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Camera,
      title: "Tourist Visa",
      shortDesc: "Hassle-free tourist and travel visa processing",
      description: "Explore the world with confidence through our streamlined tourist visa services. From documentation to approval, we make travel visa processing simple and stress-free.",
      features: [
        "Quick visa processing and approval tracking",
        "Travel itinerary planning and hotel bookings",
        "Travel insurance arrangement and support",
        "Multiple entry visa options and guidance",
        "Group travel visa coordination",
        "Emergency travel visa expedited services"
      ],
      process: [
        "Destination consultation and visa requirements",
        "Document checklist and preparation guidance",
        "Travel itinerary and accommodation planning",
        "Visa application completion and submission",
        "Biometrics appointment scheduling (if required)",
        "Application tracking and status updates",
        "Visa collection and travel document verification",
        "Pre-travel briefing and support"
      ],
      countries: ["USA", "Canada", "UK", "Schengen", "Australia", "Japan", "China", "Russia"],
      image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      successRate: "99%",
      avgProcessingTime: "5-15 days",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Home,
      title: "PR Process",
      shortDesc: "Comprehensive permanent residency services",
      description: "Make any country your permanent home with our expert PR assistance. We guide you through complex immigration systems to achieve permanent residency status.",
      features: [
        "Eligibility assessment and points calculation",
        "Expression of Interest (EOI) preparation",
        "Provincial Nominee Program (PNP) guidance",
        "Language test preparation and coaching",
        "Skills assessment and credential evaluation",
        "Family application coordination and support"
      ],
      process: [
        "Comprehensive eligibility assessment",
        "Points calculation and improvement strategies",
        "Language test preparation and booking",
        "Skills assessment and credential evaluation",
        "Expression of Interest (EOI) submission",
        "Invitation to Apply (ITA) response preparation",
        "Complete PR application submission",
        "Medical exams, police clearances, and follow-up"
      ],
      countries: ["Canada", "Australia", "New Zealand", "Germany", "Portugal", "Malta", "Cyprus"],
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      successRate: "92%",
      avgProcessingTime: "6-18 months",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: FileText,
      title: "Documentation",
      shortDesc: "Complete document preparation and verification",
      description: "Ensure your visa application success with our meticulous documentation services. We handle everything from document collection to verification and attestation.",
      features: [
        "Document review and verification services",
        "Apostille and attestation coordination",
        "Translation services for all languages",
        "Document portfolio creation and organization",
        "Digital document storage and backup",
        "Expedited document processing services"
      ],
      process: [
        "Document requirement analysis and checklist",
        "Document collection and initial review",
        "Professional translation and notarization",
        "Apostille and attestation processing",
        "Document verification and quality check",
        "Portfolio organization and digitization",
        "Final review and submission preparation",
        "Ongoing document management and updates"
      ],
      countries: ["All Supported Destinations"],
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      successRate: "100%",
      avgProcessingTime: "1-3 weeks",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Users,
      title: "Interview Preparation",
      shortDesc: "Mock interviews and visa success coaching",
      description: "Boost your confidence and success rate with our comprehensive interview preparation program. Our experts help you master visa interviews through practical training.",
      features: [
        "Mock interview sessions with expert feedback",
        "Country-specific interview question preparation",
        "Confidence building and communication skills",
        "Video practice sessions and analysis",
        "Success strategies and insider tips",
        "Post-interview feedback and improvement plans"
      ],
      process: [
        "Interview requirements and format briefing",
        "Common questions database and preparation",
        "Mock interview sessions (in-person/video)",
        "Performance analysis and feedback",
        "Communication skills improvement coaching",
        "Final preparation and success strategies",
        "Interview day support and guidance",
        "Post-interview analysis and follow-up"
      ],
      countries: ["USA", "Canada", "UK", "Australia", "Schengen", "UAE"],
      image: "https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      successRate: "97%",
      avgProcessingTime: "1-2 weeks",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      service: "Study Visa - Canada",
      text: "Lexora made my dream of studying at University of Toronto come true. Their guidance was exceptional!",
      rating: 5
    },
    {
      name: "Raj Patel", 
      service: "Work Visa - Australia",
      text: "Professional service that helped me land my dream job in Sydney. Highly recommended!",
      rating: 5
    }
  ];

  const activeServiceData = services[activeService];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Globe className="absolute top-1/4 left-1/4 w-64 h-64 text-white animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-yellow-400">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Comprehensive visa solutions tailored to your dreams. Expert guidance for every step of your global journey.
          </p>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeService === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <service.icon className="w-5 h-5" />
                <span>{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${activeServiceData.color} rounded-2xl mb-6`}>
                <activeServiceData.icon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{activeServiceData.title}</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">{activeServiceData.description}</p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-800">{activeServiceData.successRate}</div>
                  <div className="text-green-600 text-sm">Success Rate</div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-800">{activeServiceData.avgProcessingTime}</div>
                  <div className="text-blue-600 text-sm">Avg Processing</div>
                </div>
              </div>

              <a
                href="/contact"
                className={`inline-flex items-center bg-gradient-to-r ${activeServiceData.color} hover:shadow-lg text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105`}
              >
                Apply for {activeServiceData.title}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>

            <div className="relative">
              <img
                src={activeServiceData.image}
                alt={activeServiceData.title}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Features and Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Key Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <ul className="space-y-4">
                {activeServiceData.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process Steps */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
              <div className="space-y-4">
                {activeServiceData.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r ${activeServiceData.color} text-white rounded-full flex items-center justify-center text-sm font-semibold`}>
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Supported Countries */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Supported Countries</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {activeServiceData.countries.map((country, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Service Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore all our services designed to make your global journey seamless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer ${
                  activeService === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.shortDesc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 font-semibold">{service.successRate} Success Rate</span>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials for Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Client Success Stories</h2>
            <p className="text-xl text-gray-600">Real experiences from our satisfied clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm">{testimonial.service}</p>
                </div>
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
            Choose the service that matches your goals and let our experts guide you to success
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </a>
            <a
              href="/testimonials"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Read Success Stories
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;