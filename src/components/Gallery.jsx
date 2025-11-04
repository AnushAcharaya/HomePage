import React from "react";

const Gallery = () => {
    const galleryImages = [
        {
            src: "./choose-us-banner.png",
            alt: "Child in classroom activities"
        },
        {
            src: "./center-for-autism-nepal.jpg",
            alt: "Child in therapy session"
        },
        {
            src: "./OIP.jpg",
            alt: "Child playing with blocks"
        },
        {
            src: "./center-for-autism.jpg",
            alt: "Parents attending workshop"
        },
        {
            src: "./choose-us-banner.png",
            alt: "Child painting"
        },
        {
            src: "./autism-sign.png",
            alt: "Children interacting in group"
        }
    ];



    return (
        <section className="py-12 px-6 bg-white">
            <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-[#1A2B45] mb-2">Gallery Section</h2>
                <div className="flex items-center justify-center gap-2">
                    <div className="w-12 h-px bg-blue-300"> </div>
                    <span className="text-sm font-medium text-gray-500">Our Complete Projects</span>
                    <div className="w-12 h-px bg-blue-300"></div>
                </div>
            </div>


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0 place-items-center">
                {galleryImages.map((img, index) => {
                    // Apply staggered vertical offset: even = up, odd = down
                    const translateYClass = index % 2 === 0 ? 'translate-y-[-6px]' : 'translate-y-[6px]';

                    return (
                        <div
                            key={index}
                            className={`flex-shrink-0 w-[180px] h-[270px] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ease-in-out ${translateYClass} hover:translate-y-[-10px]`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover border-1 gap-0"
                            />
                        </div>
                    );
                })}
            </div>

        </section>
    );
};
export default Gallery;