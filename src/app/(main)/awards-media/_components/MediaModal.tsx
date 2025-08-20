"use client";

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Image1 from '@/app/_components/images/Image1';

const variants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            type: 'spring' as const,
            duration: 1,
        }
    },
}

interface DbDataInterface {
    id: number,
    img: string,
    video: string,
}

interface MediaModalInterface {
    isModal: boolean,
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>,
    allImages: DbDataInterface[],
    currentIndex: number,
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
}

export default function MediaModal({
    isModal, 
    setIsModal, 
    allImages,
    currentIndex,
    setCurrentIndex
}: MediaModalInterface) {
   
    const handlePrevious = () => {
        if (allImages.length > 0) {
            const newIndex = currentIndex > 0 ? currentIndex - 1 : allImages.length - 1;
            setCurrentIndex(newIndex);
        }
    };

    const handleNext = () => {
        if (allImages.length > 0) {
            const newIndex = currentIndex < allImages.length - 1 ? currentIndex + 1 : 0;
            setCurrentIndex(newIndex);
        }
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Close modal when clicking on backdrop
        if (e.target === e.currentTarget) {
            setIsModal(false);
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setIsModal(false);
        } else if (e.key === 'ArrowLeft') {
            handlePrevious();
        } else if (e.key === 'ArrowRight') {
            handleNext();
        }
    };

    // Function to extract YouTube video ID from URL
    const getYouTubeVideoId = (url: string) => {
        const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
        return match ? match[1] : null;
    };

    // Add keyboard event listener
    useEffect(() => {
        if (isModal) {
            document.addEventListener('keydown', handleKeyDown);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
            
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = 'unset';
            };
        }
    }, [isModal, currentIndex, allImages]);

    // Get current media data
    const currentMedia = allImages[currentIndex];

    return (
        <AnimatePresence>
            {isModal && currentMedia && (
                <motion.section
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    className='w-[100vw] h-[100vh] fixed top-0 left-0 z-[200] overflow-y-auto'
                    onClick={handleBackdropClick}
                >
                    <div className='absolute z-0 top-0 left-0 w-[100%] h-[100%] bg-black opacity-40'></div>
                    <div className='w-[100%] h-[100%] text-gray-200 absolute z-10 overflow-auto py-[6rem]'>
                        <div className='w-full h-full flex items-center justify-between px-4'>
                            <section className='w-[10%] flex items-center justify-center'>
                                {allImages.length > 1 && (
                                    <button 
                                        onClick={handlePrevious}
                                        className='group cursor-pointer p-4 rounded-full hover:bg-black hover:bg-opacity-30 transition-all duration-300'
                                        aria-label="Previous media"
                                    >
                                        <FaChevronLeft className='text-[2rem] text-amber-400 group-hover:-translate-x-1 group-hover:scale-110 ease-in-out duration-300 transition-all' />
                                    </button>
                                )}
                            </section>
                            
                            <section className='flex-1 max-w-[80%] relative flex items-center justify-center'>
                                <div className='relative rounded-2xl overflow-hidden bg-gray-100 max-h-[80vh] w-auto'>
                                    {currentMedia.img ? (
                                        // Display image
                                        <div className='relative h-[80vh] w-auto'>
                                            <Image1 img={currentMedia.img} />
                                        </div>
                                    ) : currentMedia.video ? (
                                        // Display video
                                        <div className='relative h-[80vh] w-auto flex items-center justify-center bg-black'>
                                            {(() => {
                                                const videoId = getYouTubeVideoId(currentMedia.video);
                                                return videoId ? (
                                                    <iframe
                                                        width="100%"
                                                        height="100%"
                                                        src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
                                                        title="YouTube video player"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                        className="min-w-[640px] min-h-[360px]"
                                                    ></iframe>
                                                ) : (
                                                    <div className="text-white text-center">
                                                        <p>Video cannot be displayed</p>
                                                        <a 
                                                            href={currentMedia.video} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="text-blue-400 underline"
                                                        >
                                                            Open in new tab
                                                        </a>
                                                    </div>
                                                )
                                            })()}
                                        </div>
                                    ) : (
                                        // Fallback for empty items
                                        <div className='relative h-[80vh] w-auto flex items-center justify-center bg-gray-400'>
                                            <p className="text-gray-600">No media available</p>
                                        </div>
                                    )}
                                    
                                    <button 
                                        onClick={() => setIsModal(false)} 
                                        className='absolute cursor-pointer top-4 right-4 z-10 text-red-600 hover:scale-110 transition-all ease-in-out duration-200 bg-white bg-opacity-80 rounded-full p-2'
                                        aria-label="Close modal"
                                    >
                                        <IoClose className='text-2xl' />
                                    </button>
                                    
                                    {/* Media counter */}
                                    {allImages.length > 1 && (
                                        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm'>
                                            {currentIndex + 1} / {allImages.length}
                                        </div>
                                    )}
                                </div>
                            </section>
                            
                            <section className='w-[10%] flex items-center justify-center'>
                                {allImages.length > 1 && (
                                    <button 
                                        onClick={handleNext}
                                        className='group cursor-pointer p-4 rounded-full hover:bg-black hover:bg-opacity-30 transition-all duration-300'
                                        aria-label="Next media"
                                    >
                                        <FaChevronRight className='text-[2rem] text-amber-400 group-hover:translate-x-1 group-hover:scale-110 ease-in-out duration-300 transition-all' />
                                    </button>
                                )}
                            </section>
                        </div>
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}