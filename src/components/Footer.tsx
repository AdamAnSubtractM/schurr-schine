import React from "react";
import { Car } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4 gap-2">
              <span className="font-display text-2xl font-bold">
                SchurrShine
              </span>
              <Car className="text-amber mr-2" size={24} />
            </div>
            <p className="text-silver mb-6">
              Professional headlight restoration that brings clarity, safety,
              and pride back to your vehicle.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="bg-navy-light hover:bg-amber hover:text-navy p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-navy-light hover:bg-amber hover:text-navy p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-navy-light hover:bg-amber hover:text-navy p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
            </div> */}
          </div>

          <div>
            <h3 className="font-display text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-amber transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-silver mb-4">
              Have questions about our headlight restoration services? Get in
              touch!
            </p>
            <a
              href="tel:5551234567"
              className="block mb-2 hover:text-amber transition-colors"
            >
              (555) 123-4567
            </a>
            <a
              href="mailto:ben@schurrshine.com"
              className="block hover:text-amber transition-colors"
            >
              ben@schurrshine.com
            </a>
          </div>
        </div>

        <div className="border-t border-navy-light mt-12 pt-6 text-center text-silver">
          <p>
            &copy; {new Date().getFullYear()} SchurrShine Auto Care. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
