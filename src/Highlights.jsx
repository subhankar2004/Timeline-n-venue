import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Highlights = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,  
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const data=[
    {
      name:"Natalie Portman",
      img:"https://static.wixstatic.com/media/eb617f_ca3b245d41e2400f948b02a0e4ad2846~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/eb617f_ca3b245d41e2400f948b02a0e4ad2846~mv2.jpg"
    },
    {
      name:"Steve Vaughan",
      img:"https://wallpapers.com/images/hd/tedx-talks-host-r3jasohfs1wprnbl.jpg"
    },
    {
      name:"Aman Gupta",
      img:"https://live.staticflickr.com/65535/51810587040_72081c897a_b.jpg"
    },
    {
      name:"Homelander",
      img:"https://th.bing.com/th/id/OIP.L4RXqQLJ2yAV5OZey6GY1QHaEK?rs=1&pid=ImgDetMain"
    },
    {
      name:"Billy Butcher",
      img:"https://wallpaperaccess.com/full/4450884.jpg"
    },
    {
      name:"Soldier Boy",
      img:"https://th.bing.com/th/id/OIP.1Ko9EmFEeTgepxyq_FdEJQHaHb?rs=1&pid=ImgDetMain"
    }
  ]

  return (
    <>
    {/* event highlights */}
    <div className='h-[50vh] w-full  flex items-center justify-center'>
      <div className="event w-[80vw] md:w-[60vw] lg:w-[50vw] flex flex-col items-center">
        <div className='w-full flex text-3xl md:text-5xl tracking-wider gap-4 uppercase font-light mb-6 justify-center'>
          <span className='text-white'>Event</span>
          <span className='text-red-500'>Highlights</span>
        </div>
        <div className="w-full flex justify-center">
          <p className='text-white text-opacity-50 text-sm md:text-lg max-w-3xl text-center tracking-wider'>
            Relive the moments that inspired, connected, and transformed. Explore the visual journey of <span className='text-red-500'>TEDxVssut 2024</span>, where groundbreaking ideas met a passionate audience.
          </p>
        </div>
        <hr className='w-[80%] mt-4'/>
      </div>
    </div>
    {/* swiper slider */}
    <div className='text-white w-full h-[50vh]'>
      <div className="w-[90%] m-auto">
        <div className="speaker flex text-2xl md:text-4xl gap-5 font-semibold tracking-tight justify-center">
          <span className='text-white'>Last Year's</span>
          <span className='text-red-500'>Speakers</span>
        </div>
        <div className="mt-10 md:mt-20">
          <Slider {...settings}>
            {data.map((item, index) => {
              return (
                <div key={index} className="card bg-zinc-900 h-[200px] md:h-[300px] w-full rounded-md overflow-hidden p-2">
                  <div className="relative h-full">
                    <img src={item.img} alt={item.name} className='w-full h-full object-cover' />
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
                      <h2 className="text-sm md:text-lg">{item.name}</h2>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
    {/* Register */}
    <div className='h-[50vh] w-full  flex items-center justify-center'>
      <div className="event w-[80vw] md:w-[60vw] lg:w-[50vw] flex flex-col items-center">
        <div className="w-full flex justify-center">
          <p className='text-white text-opacity-50 text-sm md:text-lg max-w-3xl text-center tracking-wider font-light'>
            Relive the moments that inspired, connected, and transformed. Explore the visual journey of <span className='text-red-500'>TEDxVssut 2024</span>, where groundbreaking ideas met a passionate audience.
          </p>
        </div>
        <div className="mt-8 w-32 md:w-40 h-16 flex justify-center text-2xl text-black]">
          <button className="w-full max-w-xs bg-white hover:bg-red-500  py-2 px-2 md:py-3 rounded-lg transition-colors duration-300">
            Register!
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Highlights;







