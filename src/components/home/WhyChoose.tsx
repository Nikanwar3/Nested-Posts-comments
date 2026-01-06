import React from 'react';
import { Shield, Clock, Users, Award, Globe, Headphones as HeadphonesIcon } from 'lucide-react';

const WhyChoose: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Reliable",
      description: "Trusted by thousands with proven track record and transparent processes",
      stat: "98% Success Rate"
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick turnaround times with efficient document handling and submission",
      stat: "24-48 Hours"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified immigration consultants with years of experience",
      stat: "10+ Years Experience"
    },
    {
      icon: Award,
      title: "Authorized Agent",
      description: "Licensed and authorized immigration consultancy services",
      stat: "Certified Partners"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Visa services for 50+ countries worldwide with local expertise",
      stat: "50+ Countries"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your queries and concerns",
      stat: "Always Available"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-yellow-400">Lexora?</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            We don't just process visas - we build bridges to your dreams. Here's what makes us the preferred choice for thousands of successful applicants.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Icon with Glow Effect */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-yellow-400 rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-4 w-16 h-16 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-blue-900" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-blue-200 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Stat */}
              <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-lg px-4 py-2 border border-yellow-400/30">
                <span className="text-yellow-400 font-semibold text-sm">{feature.stat}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-20 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">5000+</div>
              <div className="text-blue-200">Successful Applications</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-blue-200">Approval Rate</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-blue-200">Partner Countries</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-blue-200">Customer Support</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-blue-200 mb-8">Trusted by leading institutions and recognized globally</p>
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
            {/* You can replace these with actual partner logos */}
            <div className="bg-white/10 rounded-lg px-6 py-3 mb-4">
              <span className="text-white font-semibold">Partner Universities</span>
            </div>
            <div className="bg-white/10 rounded-lg px-6 py-3 mb-4">
              <span className="text-white font-semibold">Government Authorized</span>
            </div>
            <div className="bg-white/10 rounded-lg px-6 py-3 mb-4">
              <span className="text-white font-semibold">ISO Certified</span>
            </div>
            <div className="bg-white/10 rounded-lg px-6 py-3 mb-4">
              <span className="text-white font-semibold">Industry Awards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;