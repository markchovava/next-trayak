"use client"
import { useState } from 'react';
import Video from 'next-video';

interface BgVideoInterface {
    src: string;
    poster?: string;
    className?: string;
    onLoadStart?: () => void;
    onCanPlay?: () => void;
    onError?: (error: Event) => void;
}

export default function BannerBgVideo({ 
    src, 
    poster = "", 
    className = "",
    onLoadStart,
    onCanPlay,
    onError 
}: BgVideoInterface) 
{
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoadStart = () => {
        setIsLoading(true);
        onLoadStart?.();
    };

    const handleCanPlay = () => {
        setIsLoading(false);
        onCanPlay?.();
    };

    const handleError = (error: any) => {
        setIsLoading(false);
        setHasError(true);
        onError?.(error);
        console.error('Video loading error:', error);
    };

    if (hasError) {
        return (
            <div className={`absolute top-0 left-0 w-full h-full bg-gray-900 flex items-center justify-center ${className}`}
                 style={{ zIndex: -1 }}>
                <p className="text-white text-lg">Unable to load video</p>
            </div>
        );
    }

    return (
        <div className={`absolute z-[5] top-0 left-0 w-full h-[100%] overflow-hidden ${className}`}>
            {isLoading && poster && (
                <img 
                    src={poster}
                    alt="Video poster"
                    className="w-full h-full object-cover object-center"
                />
            )}
            <Video
                src={src}
                poster={poster}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
                    isLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoadStart={handleLoadStart}
                onCanPlay={handleCanPlay}
                onError={handleError}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            />
        </div>
    );
    
}