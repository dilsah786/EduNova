import { useNavigate } from "react-router-dom";
import educatorsImage from "../../assets/educators.png";
import CategorySection from "./CategorySection";
import Centres from "./centreSection";
import FacultyPage from "./FacultyPage";
import FeatureSection from "./FeatureSection";
import MapPage from "./MapPage";
import StatsSection from "./statsSection";
import TestimonialSection from "./Testimonial";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-bg text-textPrimary">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center -mt-10">
        {/* LEFT */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Learn from the <span className="text-primary">best educators </span>
            and achieve your dreams 🚀
          </h1>

          <p className="text-textSecondary mt-4 text-sm md:text-base">
            Join thousands of students preparing for IIT JEE, NEET, GATE & more
            with structured courses and expert guidance.
          </p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => navigate("/register")}
              className="bg-primary  text-sm md:text-xl text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
            >
              Get Started
            </button>

            <button className="border border-primary text-sm md:text-xl text-primary px-6 py-3 rounded-md font-medium hover:bg-primary hover:text-white transition">
              Explore Courses
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img
            src={educatorsImage}
            alt="Educators and Students Image"
            // width={400}
            // height={400}
            className="w-full max-w-md"
          />
        </div>
      </section>
      {/* Features */}
      <FeatureSection />

      {/* COURSES */}
      <CategorySection />
      <Centres />
      <MapPage />
      <StatsSection />
      <TestimonialSection />
      <FacultyPage />
      {/* CTA */}
      <section className="bg-primary text-white py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Start your learning journey today
        </h2>

        <button
          onClick={() => navigate("/register")}
          className="mt-6 bg-white text-2xl text-primary px-6 py-3 rounded-md font-medium hover:opacity-90 transition cursor-pointer"
        >
          Join Now
        </button>
      </section>
    </div>
  );
};

export default Home;
