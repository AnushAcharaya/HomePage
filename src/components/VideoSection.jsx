import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";


const VideoSection = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showIcon, setShowIcon] = useState(true);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (isPlaying) {
            video.pause();
            setIsPlaying(false);
            setShowIcon(true);
        } else {
            video.play();
            setIsPlaying(true);
            setShowIcon(true);
        }
    };

    useEffect(() => {
        let timeout;
        if (isPlaying && showIcon) {
            timeout = setTimeout(() => setShowIcon(false), 2000);
        }
        return () => clearTimeout(timeout);
    }, [isPlaying, showIcon]);

    const handleMouseMove = () => {
        if (isPlaying) {
            setShowIcon(true);
            const timeout = setTimeout(() => setShowIcon(false), 2000);
            return () => clearTimeout(timeout);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center py-10 px-6 space-y-8">
            {/* Paragraph Section */}
            <div className="max-w-4xl text-center text-gray-700 leading-relaxed line-clamp-5">
                <p className="font-sans font-semibold text-primary ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet adipisci
                    ut deleniti, eligendi aperiam nihil deserunt fuga, dolorem minima
                    laboriosam enim voluptatum facilis eveniet quod numquam earum mollitia
                    dignissimos eos totam autem reprehenderit. Ipsa ad, tempore facilis
                    ducimus numquam quos molestias?
                </p>
            </div>

            {/* Video Section */}
            <div
                className="relative w-full max-w-5xl h-[500px] rounded-2xl overflow-hidden shadow-lg bg-black"
                onMouseMove={handleMouseMove}
                onClick={togglePlay}
            >
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover cursor-pointer"
                    poster="https://images.unsplash.com/photo-1601049436371-6dfb6a89d3c5?auto=format&fit=crop&w=800&q=80"
                >
                    <source
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                {showIcon && (
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        flex items-center justify-center bg-black/50 w-20 h-20 rounded-full 
                        transition-opacity duration-500 z-10"
                    >
                        {isPlaying ? (
                            <Pause className="text-white w-10 h-10" />
                        ) : (
                            <Play className="text-white w-10 h-10" />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoSection;
