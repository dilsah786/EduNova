const Footer = () => {
  return (
    <footer className=" max-w-4/5 m-auto text-black px-6 py-10 mt-10 w-4/5">
      {/* TOP SECTION */}
      <div className="text-secondary">Appg</div>
      <div className="text-textPrimary">Main Text</div>
      <div className="text-textSecondary">Secondary</div>
      <div className="text-textLight">Light</div>
      <div className="text-textSuccess">Success</div>
      <div className="text-text-error">Error</div>

      <button
        onClick={() => document.documentElement.classList.toggle("dark")}
        className="border px-3 py-1 cursor-pointer "
      >
        Toggle Theme
      </button>
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 border-b border-borderLight pb-8">
        {/* BRAND */}

        <div>
          <h2 className="text-2xl font-bold text-primary mb-3">EduNova</h2>
          <p className="text-sm">
            We understand that every student has unique needs and abilities,
            that’s why our platform adapts to help you grow.
          </p>

          <div className="mt-4 space-y-2">
            <button className="bg-primary text-white px-4 py-2 rounded-md text-sm">
              Download App (Playstore)
            </button>
            <button className="bg-secondary text-white px-4 py-2 rounded-md text-sm">
              Download App (Appstore)
            </button>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold text-textPrimary mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Updates</li>
          </ul>
        </div>

        {/* CENTRES */}
        <div>
          <h3 className="font-semibold text-textPrimary mb-3">Our Centres</h3>
          <ul className="space-y-2 text-sm">
            <li>New Delhi</li>
            <li>Patna</li>
            <li>Kota</li>
            <li>Noida</li>
            <li>View All</li>
          </ul>
        </div>

        {/* EXAMS */}
        <div>
          <h3 className="font-semibold text-textPrimary mb-3">Popular Exams</h3>
          <ul className="space-y-2 text-sm">
            <li>IIT JEE</li>
            <li>NEET</li>
            <li>GATE</li>
            <li>UPSC</li>
          </ul>
        </div>
      </div>

      {/* MIDDLE LINKS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 py-8 border-b border-borderLight">
        <div>
          <h3 className="font-semibold text-textPrimary mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>PW Prerna</li>
            <li>PW SIP</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-textPrimary mb-3">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>PW App Learning</li>
            <li>PW Talk</li>
            <li>Study Materials</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-textPrimary mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>Class 10 Notes</li>
            <li>Class 12 Notes</li>
            <li>PYQs</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-textPrimary mb-3">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li>Email Us</li>
            <li>Talk to Counselor</li>
          </ul>
        </div>
      </div>

      {/* ABOUT */}
      <div className="max-w-7xl mx-auto py-6 text-sm text-textLight">
        <p>
          EduNova is an online learning platform providing accessible and
          comprehensive education for students preparing for competitive exams.
          We aim to make learning simple, effective, and affordable.
        </p>
      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-textLight border-t border-borderLight pt-4">
        <p>© 2026 EduNova. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
