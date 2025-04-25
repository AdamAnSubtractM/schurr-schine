import React from "react";
import { Car, Wrench, ShieldCheck } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold text-navy mb-4">
            About SchurrShine
          </h2>
          <div className="w-24 h-1 bg-amber mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img
                src="/assets/logo.png"
                alt="SchurrShine Logo"
                className="w-full rounded-lg shadow-lg"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-amber p-4 rounded-lg shadow-lg">
                <p className="font-display font-bold text-navy">EST. 2024</p>
              </div> */}
            </div>
          </div>

          <div>
            <h3 className="font-display text-3xl font-bold text-navy mb-6">
              My Journey to Headlight Restoration
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Hello there! I'm Ben Schurr, the founder of SchurrShine Auto Care.
              My journey into headlight restoration started with my first and
              current car — a 2004 Brown Honda CR-V that my parents handed down
              to me in high school. With over 232,000 miles on it, it's still
              running strong today.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              While it may not have been the flashiest car, I wanted to make it
              feel more personal and cared for. One evening, I noticed how dim
              and foggy the headlights had become, and I couldn't help but
              wonder what they had looked like when they were brand new.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              That thought stuck with me, so I dove into research, learned the
              techniques, and gave it a shot myself. After a careful restoration
              and applying a ceramic coating, the transformation was incredible.
              Those headlights looked as good as new — even better than I had
              imagined. It has been over a year since then and it is still
              holding up without signs of any fading!
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Seeing that result sparked my passion for headlight restoration,
              and now I'm here to help others restore clarity, safety, and pride
              in their vehicles!
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: <Car size={24} />, text: "Automotive Passion" },
                { icon: <Wrench size={24} />, text: "Expert Techniques" },
                {
                  icon: <ShieldCheck size={24} />,
                  text: "Long-lasting Results",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-navy/5 p-4 rounded-full mb-3 text-amber">
                    {item.icon}
                  </div>
                  <span className="font-medium text-navy">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
