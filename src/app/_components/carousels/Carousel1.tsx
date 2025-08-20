"use client";


import type { Swiper as SwiperType } from 'swiper';
import  { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { GoDotFill, GoDot } from "react-icons/go";
// Import Swiper styles
import 'swiper/swiper-bundle.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { H1, H2 } from '../Headings';
import { ServicesData } from '@/app/_data/sample/ServicesData';
import { ProjectData } from '@/app/_data/sample/ProjectData';
import Image1 from '../images/Image1';




export default function Carousel1({ title }: { title: string }) {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    
    // Calculate slides per view based on window width
    const getSlidesPerView = (width: number): number => {
      if (width >= 1024) return 1;
      if (width >= 640) return 1;
      return 1;
    };
    const currentSlidesPerView = getSlidesPerView(windowWidth);
    const totalSlides = 3;
    const handleSlideChange = (swiper: SwiperType) => {
      setActiveIndex(swiper.activeIndex);
    };
    // Handle direct pagination click
    const handlePaginationClick = (index: number) => {
      if (swiperRef.current) {
        swiperRef.current.slideTo(index);
      }
    };
    // Handle navigation
    const handlePrevSlide = () => {
      if (swiperRef.current) {
        swiperRef.current.slidePrev();
      }
    };
    const handleNextSlide = () => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    };
    useEffect(() => {
      // Set initial window width
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
        
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }
    }, []);

    return (
      <div className="carousel-container w-full mx-auto">
        <div className=' flex justify-between items-center'>
          <H1 title={title} />
          {/* Top Navigation buttons */}
          <div className="px-2 navigation-buttons flex items-center justify-end gap-4 mb-4">
            <button 
              onClick={handlePrevSlide}
              className="group cursor-pointer carousel-button-prev drop-shadow-md p-2 rounded-full border border-gray-500 focus:outline-none hover:bg-gray-50 transition-colors"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="w-6 h-6 text-lg text-gray-500 transition-all ease-linear duration-100 group-hover:scale-105" />
            </button>
            <button 
              onClick={handleNextSlide}
              className="group cursor-pointer carousel-button-next p-2 drop-shadow-md rounded-full border border-gray-500 focus:outline-none hover:bg-gray-50 transition-colors"
              aria-label="Next slide"
            >
              <FaChevronRight className="w-6 h-6 text-gray-500 transition-all ease-linear duration-100 group-hover:scale-105" />
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination]}
          spaceBetween={12}
          slidesPerView={currentSlidesPerView}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          onSlideChange={handleSlideChange}
          navigation={false}
          pagination={false}
          className="mb-6" >

            {ProjectData.map((i, key) => (
              <SwiperSlide key={key} className='py-4 px-3'>
                <section className='w-full cursor-pointer group relative h-[25rem] overflow-hidden rounded-2xl drop-shadow hover:drop-shadow-lg'>
                  <div className="mx-auto w-[100%] h-[100%] rounded-2xl overflow-hidden grid lg:grid-cols-2 grid-cols-1 bg-gray-900 drop-shadow-lg">
                      <div className="h-full w-full flex flex-col items-start justify-center gap-3 px-6 py-8">
                          <H2 title={i.name} color="text-gray-200" />
                          {i.desc &&
                          <p className="text-lg font-light">
                          {i.desc}
                          </p>
                          }
                      </div>
                      <div className="h-full w-full">
                        <Image1 img={i.img} />
                      </div>
                      </div>
                </section>
              </SwiperSlide>
            ))}

        </Swiper>

        {/* Custom pagination dots */}
        <div className="hidden custom-pagination items-center justify-center gap-3 mb-4">
          {Array.from({ 
            length: Math.ceil(totalSlides / currentSlidesPerView) 
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index * currentSlidesPerView)}
              className="pagination-dot focus:outline-none transition-transform hover:scale-110"
              aria-label={`Go to slide group ${index + 1}`}
            >
              {index === Math.floor(activeIndex / currentSlidesPerView) ? (
                <GoDotFill className="w-5 h-5 text-blue-500" />
              ) : (
                <GoDot className="w-5 h-5 text-gray-300 hover:text-gray-500" />
              )}
            </button>
          ))}
        </div>

      
      </div>
    );


}
