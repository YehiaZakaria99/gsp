import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { cn } from "./../lib/utils";

export default function ContactSection() {
  return (
    <section className="relative bg-navBg py-24 px-4 md:px-12 lg:px-24 xl:px-32 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-mainColor/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-mainColor/20 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* header */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-extrabold text-primary tracking-wide mb-2">
            Get In Touch
          </h3>
          <div className="w-24 h-[3px] bg-primary mx-auto" />
          <p className="text-lg md:text-xl text-primary/80 mb-12 max-w-2xl mx-auto">
            Have a question or need assistance? We're just one message away.
          </p>
        </div>

        {/* map */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-mainColor/10 mb-16">
          <iframe
            title="GSP Location"
            className="w-full h-[400px]"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d915417.7871715222!2d49.758230847358675!3d26.331332553463806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d30.0192266!2d31.2727774!4m5!1s0x3e49e9b296d1f973%3A0xa03ccdc4c9c1c993!2sAL%20BANDARIYAH%20TOWER%2C%208627%2BWMG%2C%20Al%20Bandariyah%2C%20Al%20Khobar%2034424%2C%20Saudi%20Arabia!3m2!1d26.302312999999998!2d50.214204699999996!5e0!3m2!1sen!2seg!4v1752067534992!5m2!1sen!2seg"
          ></iframe>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {/* Email */}
          <div className={cn("contact-sec-card", "group")}>
            <div
              className={cn(
                "icon-box",
                "group-hover:bg-white group-hover:text-primary"
              )}
            >
              <Mail size={24} />
            </div>
            <p className="font-semibold text-base">Emails</p>
            <div className="text-sm mt-1 space-y-1 text-center">
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
            </div>
          </div>

          {/* Phone */}
          <div className={cn("contact-sec-card", "group")}>
            <div
              className={cn(
                "icon-box",
                "group-hover:bg-white group-hover:text-primary"
              )}
            >
              <Phone size={24} />
            </div>
            <p className="font-semibold text-base">Phone</p>
            <a
              href="tel:+966138813042"
              className="text-sm hover:underline mt-1"
            >
              +966 13 881 3042
            </a>
          </div>

          {/* Address */}
          <div className={cn("contact-sec-card", "group")}>
            <div
              className={cn(
                "icon-box",
                "group-hover:bg-white group-hover:text-primary"
              )}
            >
              <MapPin size={24} />
            </div>
            <p className="font-semibold text-base">Location</p>
            <p className="text-sm mt-1 text-center">
              Al Bandariyah Business Centre, Office No 105,
              <br />
              Al Amir Faisal Bin Fahd Rd, Khobar, K.S.A
            </p>
          </div>
        </div>

        {/* CTA */}
        <div>
          <Link
            to="/contact"
            className={cn(
              "group inline-flex gap-3 items-center text-md px-6 py-2 rounded-md border border-primary text-primary",
              "hover:bg-primary hover:text-white transition-all duration-300 font-semibold"
            )}
          >
            Send a Message
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
