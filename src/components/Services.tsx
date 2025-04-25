import React from "react";
import { Zap, Shield, Clock, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Sparkles className="h-12 w-12 text-amber" />,
    title: "Full Headlight Restoration",
    description:
      "Complete restoration of foggy, yellowed, or oxidized headlights to like-new condition using professional multi-step process.",
    features: [
      "Multi-stage wet sanding",
      "Professional polishing",
      "UV-protective coating",
    ],
  },
  {
    icon: <Shield className="h-12 w-12 text-amber" />,
    title: "Ceramic Coating Protection",
    description:
      "Long-lasting ceramic coating that provides superior UV protection and keeps headlights clear for years.",
    features: [
      "Offers years of protection",
      "Advanced UV blocking",
      "Enhanced clarity",
    ],
  },
  {
    icon: <Clock className="h-12 w-12 text-amber" />,
    title: "Quick Service",
    description:
      "Efficient service that restores your headlights while you wait, typically completed within 1-2 hours.",
    features: ["Convenient scheduling", "Same-day service"],
  },
  {
    icon: <Zap className="h-12 w-12 text-amber" />,
    title: "Safety Enhancement",
    description:
      "Improved visibility and safety through restored light output, helping you see and be seen better at night.",
    features: [
      "Increased light output",
      "Improved nighttime visibility",
      "Better road safety",
    ],
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-navy/5">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold text-navy mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional headlight restoration that brings clarity, safety, and
            pride back to your vehicle.
          </p>
          <div className="w-24 h-1 bg-amber mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="font-display text-2xl font-bold text-navy mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-amber mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md inline-block">
            <h3 className="font-display text-2xl font-bold text-navy mb-4">
              Fixed Price: $100
            </h3>
            <p className="text-gray-600 mb-6">
              Simple, transparent pricing for complete headlight restoration. No
              hidden fees or surprises.
            </p>
            <a
              className="bg-amber hover:bg-amber/90 text-navy font-bold py-3 px-8 rounded-lg transition-colors"
              href="#contact"
            >
              Book Your Restoration
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
