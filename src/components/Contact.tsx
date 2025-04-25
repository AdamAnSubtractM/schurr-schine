import React, { useState } from "react";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    message: "",
    date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          vehicle: formData.vehicle,
          message: formData.message,
          preferred_date: formData.date,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      toast.success("Appointment request submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        vehicle: "",
        message: "",
        date: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit appointment request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold text-navy mb-4">
            Schedule Your Restoration
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to bring your headlights back to life? Contact us to schedule
            an appointment or ask any questions.
          </p>
          <div className="w-24 h-1 bg-amber mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-navy rounded-lg p-8 text-white shadow-lg">
            <h3 className="font-display text-2xl font-bold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-amber mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-amber mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p>ben@schurrshine.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-amber mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p>Location, State</p>
                </div>
              </div>

              <div className="flex items-start">
                <Calendar className="text-amber mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Hours</h4>
                  <p>
                    Monday - Friday: 9am - 6pm
                    <br />
                    Weekends: By appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-display text-xl font-bold mb-4">
                Why Choose SchurrShine?
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-amber mr-3 flex-shrink-0"></div>
                  <span>Professional restoration at competitive prices</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-amber mr-3 flex-shrink-0"></div>
                  <span>Long-lasting results with ceramic coating</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-amber mr-3 flex-shrink-0"></div>
                  <span>Enhanced safety and vehicle appearance</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-amber mr-3 flex-shrink-0"></div>
                  <span>Passionate, detail-oriented service</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="vehicle"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Vehicle Make/Model
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber"
                  required
                  disabled={isSubmitting}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber"
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber hover:bg-amber/90 text-navy font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Schedule Appointment"}
              </button>

              <p className="text-gray-600 text-sm text-center">
                We'll confirm your appointment within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
