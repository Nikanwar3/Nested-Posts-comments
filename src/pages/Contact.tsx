import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    requestType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        requestType: '',
        message: ''
      });
    }, 3000);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '1234567890'; // Replace with actual WhatsApp business number
    const message = encodeURIComponent(`Hi, I'm interested in your visa services. My details:
Name: ${formData.fullName}
Email: ${formData.email}
Service: ${formData.requestType}
Message: ${formData.message}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["123 Business Plaza, Downtown Area", "New York, NY 10001", "United States"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (234) 567-8900", "+1 (234) 567-8901", "Toll-Free: 1-800-LEXORA"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@lexora.com", "support@lexora.com", "applications@lexora.com"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 7:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const requestTypes = [
    "Study Visa",
    "Employment Visa", 
    "Work Visa",
    "Tourist Visa",
    "PR Process",
    "Documentation Help",
    "Interview Preparation",
    "General Inquiry",
    "Other"
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
            Contact <span className="text-yellow-400">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Ready to start your global journey? Get in touch with our visa experts today for personalized guidance and support.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${info.color} rounded-xl mb-6`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get Free Consultation</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-600">Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="+1 (234) 567-8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-2">
                      Request Type *
                    </label>
                    <select
                      id="requestType"
                      name="requestType"
                      required
                      value={formData.requestType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select your request type</option>
                      {requestTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message / Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your visa requirements, timeline, and any specific questions you have..."
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Us
                    </button>
                  </div>

                  <p className="text-sm text-gray-500 text-center">
                    * Required fields. We'll respond within 24 hours.
                  </p>
                </form>
              )}
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Google Maps */}
              <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <div className="h-64 lg:h-80 relative">
                  {/* Replace with actual Google Maps embed */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
                      <p className="text-gray-600">123 Business Plaza, Downtown Area</p>
                      <p className="text-gray-600">New York, NY 10001</p>
                      <button className="mt-4 text-blue-600 hover:text-blue-700 font-semibold">
                        Get Directions →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-4">Emergency Contact</h3>
                <p className="text-red-700 mb-4">
                  For urgent visa matters or time-sensitive applications:
                </p>
                <div className="space-y-2">
                  <p className="text-red-800 font-semibold">📞 Emergency Hotline: +1 (234) 567-8999</p>
                  <p className="text-red-700">Available 24/7 for critical visa issues</p>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-yellow-800 mb-4">Before You Contact Us</h3>
                <ul className="space-y-2 text-yellow-700">
                  <li>• Have your passport and documents ready</li>
                  <li>• Know your preferred destination country</li>
                  <li>• Prepare questions about timeline and requirements</li>
                  <li>• Consider your budget and financial planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common visa questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">How long does the visa process take?</h4>
                <p className="text-gray-600">Processing times vary by visa type and country. Tourist visas typically take 5-15 days, while study and work visas can take 2-6 months.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">What documents do I need?</h4>
                <p className="text-gray-600">Document requirements depend on your visa type and destination. We provide a comprehensive checklist during consultation.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Do you guarantee visa approval?</h4>
                <p className="text-gray-600">While we cannot guarantee approval (final decision rests with visa officers), our 98% success rate speaks to our expertise.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">What are your service fees?</h4>
                <p className="text-gray-600">Our fees vary based on visa type and services required. We provide transparent pricing during your free consultation.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Can you help with visa rejections?</h4>
                <p className="text-gray-600">Yes, we offer appeal services and can help you understand rejection reasons and improve your next application.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Do you offer online consultations?</h4>
                <p className="text-gray-600">Absolutely! We offer both in-person and online consultations via video call for your convenience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;