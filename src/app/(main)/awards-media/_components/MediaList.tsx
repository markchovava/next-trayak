"use client"

import { useState } from "react"
import MediaModal from "./MediaModal"
import { MediaData } from "@/app/_data/sample/MediaData"
import Image1 from "@/app/_components/images/Image1"
import { FaPlay } from "react-icons/fa"

export default function MediaList() {
    const [isModal, setIsModal] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleImageClick = (index: number) => {
        setCurrentIndex(index)
        setIsModal(true)
    }

    // Function to extract YouTube video ID from URL
    const getYouTubeVideoId = (url: string) => {
        const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
        return match ? match[1] : null;
    }

    return (
        <>
            <section className='w-full bg-gray-950'>
                <div className='h-[6rem]' />
                <div className='mx-auto w-[92%] grid grid-cols-4 gap-8'>
                    {MediaData.map((item, index) => (
                        <button key={index} onClick={() => handleImageClick(index)}>
                            <div className='w-full aspect-[4/3] bg-gray-300 drop-shadow rounded-2xl overflow-hidden relative'>
                                {item.img ? (
                                    // Display image
                                    <Image1 img={item.img} />
                                ) : item.video ? (
                                    // Display video thumbnail
                                    <div className="relative w-full h-full">
                                        {(() => {
                                            const videoId = getYouTubeVideoId(item.video);
                                            return videoId ? (
                                                <>
                                                    <img 
                                                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                                        alt="Video thumbnail"
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                                                        <div className="bg-red-600 rounded-full p-4 shadow-lg">
                                                            <FaPlay className="text-white text-2xl ml-1" />
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                                                    <FaPlay className="text-gray-600 text-3xl" />
                                                </div>
                                            )
                                        })()}
                                    </div>
                                ) : (
                                    // Fallback for empty items
                                    <div className="w-full h-full bg-gray-400"></div>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
                <div className='h-[6rem]' />
            </section> 

            <MediaModal 
                isModal={isModal} 
                setIsModal={setIsModal} 
                allImages={MediaData}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
        </>
    )
}