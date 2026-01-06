import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight, ExternalLink, Bell, Filter } from 'lucide-react';

const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTab, setSelectedTab] = useState('Upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: "Study Abroad Fair 2024",
      type: "Fair",
      category: "Education",
      date: "2024-03-15",
      endDate: "2024-03-17",
      time: "10:00 AM - 6:00 PM",
      location: "Convention Center, New York",
      image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Meet representatives from top universities worldwide. Get on-spot admissions and scholarship information from over 100 universities.",
      highlights: [
        "100+ Universities participating",
        "On-spot admission offers",
        "Scholarship guidance sessions",
        "Visa counseling booths",
        "Free IELTS mock tests"
      ],
      attendees: "2000+",
      price: "Free",
      featured: true,
      registrationRequired: true
    },
    {
      id: 2,
      title: "Canada PR Workshop",
      type: "Workshop",
      category: "Immigration",
      date: "2024-03-20",
      time: "2:00 PM - 5:00 PM",
      location: "Online Webinar",
      image: "https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Complete guide to Canadian permanent residency process, requirements, and success strategies. Live Q&A with immigration experts.",
      highlights: [
        "Express Entry system explained",
        "Provincial Nominee Programs",
        "Points calculation workshop",
        "Document preparation guide",
        "Live expert Q&A session"
      ],
      attendees: "500+",
      price: "$29",
      featured: false,
      registrationRequired: true
    },
    {
      id: 3,
      title: "UK Student Visa Updates",
      type: "Seminar",
      category: "Education",
      date: "2024-03-25",
      time: "4:00 PM - 6:00 PM",
      location: "Lexora Office, NYC",
      image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Latest updates on UK student visa requirements and post-study work opportunities for 2024.",
      highlights: [
        "2024 visa requirement updates",
        "Post-study work visa changes",
        "University application deadlines",
        "Scholarship opportunities",
        "One-on-one consultations"
      ],
      attendees: "100+",
      price: "Free",
      featured: false,
      registrationRequired: true
    },
    {
      id: 4,
      title: "Australia Work Visa Masterclass",
      type: "Masterclass",
      category: "Employment",
      date: "2024-04-10",
      time: "11:00 AM - 3:00 PM",
      location: "Sydney - Partner Office",
      image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Comprehensive workshop on Australian work visa options, employer sponsorship, and job market insights.",
      highlights: [
        "Employer sponsorship process",
        "Skills assessment guidance",
        "Job market analysis",
        "Resume writing workshop",
        "Mock interview sessions"
      ],
      attendees: "150+",
      price: "$49",
      featured: true,
      registrationRequired: true
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Global Education Expo 2024",
      type: "Expo",
      date: "2024-02-15",
      location: "Los Angeles Convention Center",
      attendees: "3000+",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Largest education expo on the West Coast with universities from 25+ countries.",
      outcomes: "500+ students received admission offers"
    },
    {
      id: 6,
      title: "Germany Study Visa Seminar",
      type: "Seminar",
      date: "2024-02-08",
      location: "Online",
      attendees: "800+",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Focused seminar on studying in Germany including language requirements and free education opportunities.",
      outcomes: "200+ applications started"
    }
  ];

  const newsUpdates = [
    {
      id: 1,
      title: "New Zealand Announces Fast-Track Visa Processing",
      category: "Visa Update",
      date: "2024-03-10",
      priority: "High",
      content: "New Zealand immigration introduces expedited processing for skilled workers in healthcare, technology, and engineering sectors. Processing time reduced from 6 months to 2-3 months.",
      impact: "Positive for skilled professionals",
      countries: ["New Zealand"]
    },
    {
      id: 2,
      title: "Australia Increases Student Visa Financial Requirements",
      category: "Policy Change",
      date: "2024-03-08",
      priority: "Medium",
      content: "Updated financial requirements for Australian student visas. Students must now demonstrate AUD $24,505 annually (increased from $21,041) plus course fees.",
      impact: "Affects new applications",
      countries: ["Australia"]
    },
    {
      id: 3,
      title: "Canada Express Entry Draw - Record Low CRS Score",
      category: "Immigration News",
      date: "2024-03-05",
      priority: "High",
      content: "Latest Express Entry draw invites 4,500 candidates with minimum CRS score of 491 - the lowest score in 2024. Category-based draws continue for Healthcare and STEM occupations.",
      impact: "Excellent opportunity",
      countries: ["Canada"]
    },
    {
      id: 4,
      title: "UK Graduate Route Visa Extended",
      category: "Policy Update",
      date: "2024-03-03",
      priority: "High",
      content: "UK government confirms Graduate Route visa will remain available for international students, allowing 2-3 years post-study work period.",
      impact: "Positive for graduates",
      countries: ["United Kingdom"]
    }
  ];

  const categories = ['All', 'Education', 'Immigration', 'Employment', 'General'];
  const eventTabs = ['Upcoming', 'Past Events', 'News & Updates'];

  const filteredEvents = selectedCategory === 'All' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory);

  const formatDate = (dateString: string, endDate?: string) => {
    const date = new Date(dateString);
    const formatted = date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    
    if (endDate) {
      const endFormatted = new Date(endDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric'
      });
      return `${formatted} - ${endFormatted}`;
    }
    
    return formatted;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Low': return 'bg-green-500';
      default: return 'bg-blue-500';
    }
  };

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
            Events & <span className="text-yellow-400">Updates</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with the latest visa news, join our exclusive events, and connect with immigration experts worldwide.
          </p>

          {/* Newsletter Signup in Hero */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder="Enter your email for updates"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center">
                <Bell className="w-5 h-5 mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {eventTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedTab === tab
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Category Filter (for Upcoming Events) */}
          {selectedTab === 'Upcoming' && (
            <div className="flex flex-wrap justify-center gap-3">
              <Filter className="w-5 h-5 text-gray-500 mt-3" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-blue-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Content based on selected tab */}
      {selectedTab === 'Upcoming' && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
              <p className="text-xl text-gray-600">Join us for exclusive visa workshops, fairs, and educational seminars</p>
            </div>

            {/* Featured Events */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Events</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredEvents.filter(event => event.featured).map((event) => (
                  <div key={event.id} className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                    <div className="relative h-64">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          FEATURED
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                        <p className="text-blue-200">{event.type}</p>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{formatDate(event.date, event.endDate)}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">{event.attendees} Expected</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6">{event.description}</p>

                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-900 mb-3">Event Highlights:</h5>
                        <ul className="space-y-1">
                          {event.highlights.slice(0, 3).map((highlight, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-green-600">{event.price}</span>
                          <span className="text-sm text-gray-500 ml-2">per person</span>
                        </div>
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center">
                          Register Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Events */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">All Upcoming Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          event.type === 'Fair' ? 'bg-blue-100 text-blue-800' :
                          event.type === 'Workshop' ? 'bg-green-100 text-green-800' :
                          event.type === 'Seminar' ? 'bg-purple-100 text-purple-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {event.type}
                        </span>
                        <span className="text-sm font-semibold text-gray-900">{event.price}</span>
                      </div>

                      <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{event.title}</h4>
                      
                      <div className="space-y-2 mb-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(event.date, event.endDate)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors duration-300">
                        Learn More & Register
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {selectedTab === 'Past Events' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Past Events</h2>
              <p className="text-xl text-gray-600">Look back at our successful events and their impact</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 shadow-lg">
                  <div className="flex items-start space-x-4 mb-6">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} Attendees</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{event.description}</p>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h5 className="font-semibold text-green-800 mb-1">Event Outcome:</h5>
                    <p className="text-green-700 text-sm">{event.outcomes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedTab === 'News & Updates' && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest News & Updates</h2>
              <p className="text-xl text-gray-600">Stay informed with the most recent visa policy changes and immigration news</p>
            </div>

            <div className="space-y-6">
              {newsUpdates.map((update) => (
                <div key={update.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${getPriorityColor(update.priority)} animate-pulse`}></div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          update.category === 'Visa Update' ? 'bg-blue-100 text-blue-800' :
                          update.category === 'Policy Change' ? 'bg-red-100 text-red-800' :
                          update.category === 'Immigration News' ? 'bg-green-100 text-green-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {update.category}
                        </span>
                        <span className="text-sm text-gray-500">{formatDate(update.date)}</span>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        update.priority === 'High' ? 'bg-red-100 text-red-800' :
                        update.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {update.priority} Priority
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{update.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{update.content}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex flex-wrap gap-2">
                          {update.countries.map((country, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                              {country}
                            </span>
                          ))}
                        </div>
                        <span className={`text-sm font-semibold ${
                          update.impact.includes('Positive') || update.impact.includes('Excellent') ? 'text-green-600' :
                          update.impact.includes('Affects') ? 'text-yellow-600' :
                          'text-blue-600'
                        }`}>
                          Impact: {update.impact}
                        </span>
                      </div>

                      <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                        Read Full Article
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Load More Updates
              </button>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Never Miss an Opportunity</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter and join our events to stay ahead in your immigration journey
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Consultation
            </a>
            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;