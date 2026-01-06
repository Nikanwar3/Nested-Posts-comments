import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowRight, Clock } from 'lucide-react';

const EventsUpdates: React.FC = () => {
  const events = [
    {
      id: 1,
      title: "Study Abroad Fair 2024",
      type: "Event",
      date: "2024-03-15",
      time: "10:00 AM - 6:00 PM",
      location: "Convention Center, New York",
      description: "Meet representatives from top universities worldwide. Get on-spot admissions and scholarship information.",
      image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      attendees: "500+",
      featured: true
    },
    {
      id: 2,
      title: "Canada PR Workshop",
      type: "Workshop",
      date: "2024-03-20",
      time: "2:00 PM - 5:00 PM",
      location: "Online Webinar",
      description: "Complete guide to Canadian permanent residency process, requirements, and success strategies.",
      image: "https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      attendees: "200+",
      featured: false
    },
    {
      id: 3,
      title: "UK Student Visa Updates",
      type: "Seminar",
      date: "2024-03-25",
      time: "4:00 PM - 6:00 PM",
      location: "Lexora Office, NYC",
      description: "Latest updates on UK student visa requirements and post-study work opportunities.",
      image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      attendees: "100+",
      featured: false
    }
  ];

  const updates = [
    {
      id: 1,
      title: "New Zealand Announces Fast-Track Visa Processing",
      category: "Visa Update",
      date: "2024-03-10",
      content: "New Zealand immigration introduces expedited processing for skilled workers in healthcare and technology sectors.",
      urgent: true
    },
    {
      id: 2,
      title: "Australia Increases Student Visa Requirements",
      category: "Policy Change",
      date: "2024-03-08",
      content: "Updated financial requirements and English proficiency standards for Australian student visa applications.",
      urgent: false
    },
    {
      id: 3,
      title: "Canada Express Entry Draw Results",
      category: "Immigration News",
      date: "2024-03-05",
      content: "Latest Express Entry draw invites 3,500 candidates with minimum CRS score of 525.",
      urgent: false
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Events & <span className="text-yellow-400">Updates</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Stay updated with the latest visa news, policy changes, and join our exclusive events
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-yellow-400" />
              Upcoming Events
            </h3>

            <div className="space-y-6">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className={`bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:bg-white/10 ${
                    event.featured ? 'ring-2 ring-yellow-400' : ''
                  }`}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          event.type === 'Event' ? 'bg-blue-500 text-white' :
                          event.type === 'Workshop' ? 'bg-green-500 text-white' : 'bg-purple-500 text-white'
                        }`}>
                          {event.type}
                        </span>
                        {event.featured && (
                          <span className="px-3 py-1 bg-yellow-400 text-black rounded-full text-xs font-semibold">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-3">{event.title}</h4>
                      
                      <div className="space-y-2 mb-4 text-blue-200 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} Expected</span>
                        </div>
                      </div>
                      
                      <p className="text-blue-200 text-sm mb-4 line-clamp-2">
                        {event.description}
                      </p>
                      
                      <button className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold text-sm">
                        Register Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/events"
                className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View All Events
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Latest Updates */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="w-6 h-6 mr-3 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
              </div>
              Latest Updates
            </h3>

            <div className="space-y-6">
              {updates.map((update, index) => (
                <div
                  key={update.id}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        update.urgent ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                      }`}>
                        {update.category}
                      </span>
                      {update.urgent && (
                        <span className="px-2 py-1 bg-red-500 text-white rounded text-xs font-bold animate-pulse">
                          URGENT
                        </span>
                      )}
                    </div>
                    <span className="text-blue-200 text-xs">
                      {formatDate(update.date)}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-3">{update.title}</h4>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    {update.content}
                  </p>
                  
                  <button className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold text-sm mt-4">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/events"
                className="inline-flex items-center border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-full font-semibold transition-all duration-300"
              >
                All Updates
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated with Visa News
          </h3>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Get the latest visa updates, policy changes, and event notifications delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsUpdates;