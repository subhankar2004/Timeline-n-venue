import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const VenueCard = () => {
  const eventDetails = {
    dates: {
      start: "February 13, 2024",
      end: "February 14, 2024"
    },
    timings: "9:00 AM - 6:00 PM",
    address: {
      venue: "Biju Pattnaik e-Learning Centre",
      line1: "VSSUT Campus",
      line2: "Burla, Sambalpur",
      state: "Odisha",
      pincode: "768018"
    }
  };

  return (
    <div className="w-full h-full p-4 flex items-center justify-center  hover:scale-105 duration-300">
      <div className="bg-[#2a2a2a] rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Event Details</h2>
        
        {/* Event Dates */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center">
              <Calendar className="text-red-500 w-4 h-4" />
            </div>
            <span className="font-semibold">Event Dates</span>
          </div>
          <div className="ml-11">
            <p>{eventDetails.dates.start} - {eventDetails.dates.end}</p>
          </div>
        </div>

        {/* Timings */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center">
              <Clock className="text-red-500 w-4 h-4" />
            </div>
            <span className="font-semibold">Timings</span>
          </div>
          <div className="ml-11">
            <p>{eventDetails.timings}</p>
          </div>
        </div>

        {/* Venue Address */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center">
              <MapPin className="text-red-500 w-4 h-4" />
            </div>
            <span className="font-semibold">Venue Address</span>
          </div>
          <div className="ml-11">
            <p className="font-medium">{eventDetails.address.venue}</p>
            <p>{eventDetails.address.line1}</p>
            <p>{eventDetails.address.line2}</p>
            <p>{eventDetails.address.state} - {eventDetails.address.pincode}</p>
          </div>
        </div>

        {/* Book Now Button */}
        <div className="mt-8">
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;

