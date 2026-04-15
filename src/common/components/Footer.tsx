import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (section: string) => {
    setOpen(open === section ? null : section);
  };

  const sections = [
    {
      title: "Company",
      items: ["About Us", "Contact Us", "Careers", "Updates"],
    },
    {
      title: "Our Centres",
      items: ["New Delhi", "Patna", "Kota", "Noida", "View All"],
    },
    {
      title: "Popular Exams",
      items: ["IIT JEE", "NEET", "GATE", "UPSC"],
    },
    {
      title: "Quick Links",
      items: ["PW Prerna", "PW SIP", "Investor Relations"],
    },
    {
      title: "Products",
      items: ["App Learning", "PW Talk", "Study Materials"],
    },
    {
      title: "Resources",
      items: ["Class 10 Notes", "Class 12 Notes", "PYQs"],
    },
    {
      title: "Connect",
      items: ["Email Us", "Talk to Counselor", "Help Center"],
    },
  ];

  return (
    <footer className="bg-bg border-t border-borderLight px-6 py-12 mt-20">
      {/* 🔝 TOP SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* BRAND */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-primary">EduNova</h2>

          <p className="text-sm text-textSecondary mt-3">
            We understand that every student has unique needs and abilities,
            that’s why our platform adapts to help you grow.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-4 text-textSecondary">
            <FaFacebook className="hover:text-primary cursor-pointer" />
            <FaInstagram className="hover:text-primary cursor-pointer" />
            <FaYoutube className="hover:text-primary cursor-pointer" />
            <FaLinkedin className="hover:text-primary cursor-pointer" />
          </div>

          {/* APP BUTTONS */}
          <div className="mt-6 flex flex-col gap-3">
            <button className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:opacity-90">
              📱 Download on Play Store
            </button>

            <button className="bg-secondary text-white px-4 py-2 rounded-md text-sm hover:opacity-90">
              🍎 Download on App Store
            </button>
          </div>
        </div>

        {/* 🔥 LINKS SECTION */}
        <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sections.map((sec) => (
            <div key={sec.title}>
              {/* HEADER */}
              <div
                className="flex justify-between items-center cursor-pointer md:cursor-default"
                onClick={() => toggle(sec.title)}
              >
                <h3 className=" text-xl font-semibold text-textPrimary">{sec.title}</h3>

                <ChevronDown
                  className={`md:hidden transition ${
                    open === sec.title ? "rotate-180" : ""
                  }`}
                  size={18}
                />
              </div>

              {/* ITEMS */}
              <ul
                className={`mt-3 space-y-2 text-sm text-textSecondary transition-all duration-300
                ${
                  open === sec.title
                    ? "max-h-40"
                    : "max-h-0 md:max-h-full overflow-hidden"
                }`}
              >
                {sec.items.map((item, i) => (
                  <li key={i} className="hover:text-primary cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 🧠 ABOUT */}
      <div className="max-w-7xl mx-auto py-6 text-sm text-textLight border-t border-borderLight mt-10">
        <p>
          EduNova is an online learning platform providing accessible and
          comprehensive education for students preparing for competitive exams.
          We aim to make learning simple, effective, and affordable for
          everyone.
        </p>
      </div>

      {/* 🔻 BOTTOM */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-textLight border-t border-borderLight pt-4">
        <p>© 2026 EduNova. All rights reserved.</p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <span className="cursor-pointer hover:text-primary">
            Privacy Policy
          </span>
          <span className="cursor-pointer hover:text-primary">
            Terms of Use
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
