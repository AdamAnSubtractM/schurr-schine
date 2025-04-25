import React from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";

const galleryItems = [
  {
    id: 1,
    beforeImage: "/assets/before-1.jpg",
    afterImage: "/assets/after-1.jpg",
    altText: "Vehicle 1 restoration",
    title: "Vehicle 1 Description",
  },
  {
    id: 2,
    beforeImage: "/assets/before-2.jpg",
    afterImage: "/assets/after-2.jpg",
    altText: "Vehicle 2 restoration",
    title: "Vehicle 2 Description",
  },
  ,
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Before & After Gallery
          </h2>
          <p className="text-silver max-w-2xl mx-auto">
            See the difference our professional headlight restoration makes.
            Drag the slider to compare before and after results.
          </p>
          <div className="w-24 h-1 bg-amber mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {galleryItems.map((item) => {
            if (!item) return null; // Skip if item is undefined or null
            return (
              <div key={item.id} className="bg-navy-light p-5 rounded-lg">
                <h3 className="font-display text-xl font-bold text-white mb-4 text-center">
                  {item.title}
                </h3>
                <BeforeAfterSlider
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                  altText={item.altText}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-silver mb-8">
            These are just a few examples of our work. Every vehicle and
            headlight condition is unique, but we deliver consistently excellent
            results.
          </p>
          {/* <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-lg transition-colors">
            See More Examples
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
