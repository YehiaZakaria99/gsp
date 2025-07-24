import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect } from "react";
import bgImg from "/ContactPage/bgImg.webp";
import { cn } from "../../lib/utils";

export default function ContactPage() {

  return (
    <section className="bg-primary/10 text-primary">
      {/* Header */}
      <div
        className="relative px-6 md:px-16 py-10 flex flex-col-reverse md:flex-row items-center gap-10 bg-cover h-[300px] md:h-[450px] lg:h-[500px] md:bg-fixed bg-bottom shadow-xl overflow-hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-hover/70 to-primary/95 z-10" />
        <div className="md:w-1/2 space-y-4 z-20 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bg leading-tight drop-shadow-xl">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        {/* Left - Contact Info & Map */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>

          <div className="space-y-6">
            {/* Map */}
            <div className="w-full h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow-md border border-primary/10">
              <iframe
                title="gspLocation"
                className="w-full h-full"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d915417.7871715222!2d49.758230847358675!3d26.331332553463806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d30.0192266!2d31.2727774!4m5!1s0x3e49e9b296d1f973%3A0xa03ccdc4c9c1c993!2sAL%20BANDARIYAH%20TOWER%2C%208627%2BWMG%2C%20Al%20Bandariyah%2C%20Al%20Khobar%2034424%2C%20Saudi%20Arabia!3m2!1d26.302312999999998!2d50.214204699999996!5e0!3m2!1sen!2seg!4v1752067534992!5m2!1sen!2seg"
              ></iframe>
            </div>

            {/* Info Items */}
            <div className="space-y-7 px-4">
              <div className="flex md:flex-row flex-col gap-y-7 md:justify-between">
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white p-2 rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm">
                      <a
                        href="mailto:info@gsp-sa.com"
                        className="hover:underline block"
                      >
                        info@gsp-sa.com
                      </a>
                      <a
                        href="mailto:mohammed@gsp-sa.com"
                        className="hover:underline block"
                      >
                        mohammed@gsp-sa.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white p-2 rounded-full">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href="tel:+966138813042"
                      className="hover:underline text-sm"
                    >
                      +966 13 881 3042
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="flex items-start  gap-3">
                  <div className="bg-primary text-white p-2 rounded-full">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-sm">
                      Al Bandariyah Business Centre, Office 105,
                      <br />
                      Al Amir Faisal Bin Fahd Road, Khobar, K.S.A
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></textarea>
            <button
              type="submit"
              className={cn(
                "flex items-center gap-2 bg-primary  text-white px-6 py-3 ",
                "rounded-lg border-2 border-white",
                "transition-all duration-300 hover:bg-white hover:text-primary hover:border-primary"
              )}
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
