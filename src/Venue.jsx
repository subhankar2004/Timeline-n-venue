import React from "react";
import { Bookmark, Share2, Wifi, Snowflake, ParkingCircle } from "lucide-react";
import VenueCard from "./VenueCard";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import Details from "./Details";



const Venue = () => {

  const longText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt ex, sequi repudiandae nobis dolorum eligendi eveniet consequuntur nihil non optio at corporis rem sunt vitae minus illum. Itaque, exercitationem.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, natus exercitationem expedita ullam dignissimos veniam facere, placeat tempore eos odit esse temporibus totam. Asperiores harum aperiam ducimus cupiditate aliquid minus.";

  

  const facilities = [
    { icon: <Wifi />, label: "Wifi" },
    { icon: <Snowflake />, label: "Air Conditioned" },
    { icon: <ParkingCircle />, label: "Free Parking" }
  ];

  const images = [
    
    {
      src: "https://pragativadi.com/wp-content/uploads/2021/02/102370608.jpg",
      alt: "front gate",
      fallback: "/api/placeholder/400/300"
    },
    {
      src: "https://pragativadi.com/wp-content/uploads/2021/02/102370608.jpg",
      alt: "campus view",
      fallback: "/api/placeholder/400/300"
    },
    {
      src: "https://www.vssut.ac.in/images/infrastructure/Administration-Building.jpg",
      alt: "admin building",
      fallback: "/api/placeholder/400/300"
    },
    {
      src: "https://www.vssut.ac.in/images/infrastructure/Pulaha-Hall.jpg",
      alt: "pulaha hall",
      fallback: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white overflow-x-hidden">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between w-full p-4 gap-4">
        <div className="text-3xl sm:text-5xl flex gap-4 font-semibold">
          <span>Our</span>
          <span className="text-red-500">Venue</span>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-red-500 flex items-center justify-center">
            <Bookmark className="text-white w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-red-500 flex items-center justify-center">
            <Share2 className="text-white w-5 h-5" />
          </div>
        </div>
      </div>

      <hr className="w-full mt-4 sm:mt-10 border-1 border-red-500 opacity-50" />

      {/* Image Gallery Section */}
      <div className="w-full p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2 overflow-hidden">
            <img
              src="https://www.vssut.ac.in/doc/e-Learning-Centre-vssut.jpg"
              alt="e-learning"
              
              className="w-full h-64 sm:h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="grid grid-cols-2 w-full sm:w-1/2 gap-4">
            {images.map((img,index) => (
              <div key={index} className="overflow-hidden">
                <img
                  src={img.src}
                  alt={`venue-${index}`}
                  className="w-full h-32 sm:h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full flex flex-col lg:flex-row p-4 gap-8">
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <div className="text-2xl sm:text-3xl flex flex-wrap gap-4 font-semibold">
            <span>About</span>
            <span>The</span>
            <span className="text-red-500">Destination</span>
          </div>
          <div className="text-md tracking-tighter mt-4">
          <Details text={longText} maxLength={100} />
          </div>
          
          {/* Facilities */}
          <div>
            <h1 className="text-2xl sm:text-3xl mb-6">Our Best Facilities</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[0, 1, 2].map((colIndex) => (
                <div key={colIndex} className="flex flex-col gap-4">
                  {facilities.map((facility, idx) => (
                    <span key={idx} className="flex items-center gap-2">
                      <button className="w-10 h-10 rounded-full border-2 border-red-500 flex items-center justify-center">
                        <span className="text-white w-5 h-5 flex items-center justify-center">{facility.icon}</span>
                      </button>
                      {facility.label}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex mt-20 items-center gap-3">
          <FaLocationDot className="text-red-500 w-6 h-6 "/>
          <h3 className="text-2xl sm:text-3xl  text-red-500 font-semibold">Location:</h3>
          </div>
        </div>

        {/* Card Section */}
        <div className="w-full lg:w-[40%] flex items-center">
          <VenueCard />
        </div>
      </div>

      

      {/* Map Section */}
      <div className="w-full h-[50vh] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.262043270823!2d83.90142197432!3d21.497453571517642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213da52c9e9039%3A0x322badfc3df47df8!2sBiju%20Pattnaik%20e-learning%20Centre!5e0!3m2!1sen!2sin!4v1734104418403!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Venue;
