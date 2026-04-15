import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dummy_img from "../../assets/dummy-image.png";

const testimonials = [
  {
    id: 1,
    name: "Rahul Kumar",
    course: "IIT JEE",
    image: dummy_img,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    review:
      "EduNova provided structured lectures, regular practice tests, and excellent doubt support. This consistency helped me strengthen concepts and confidently crack JEE with a strong rank.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    course: "NEET",
    image: dummy_img,
    video: "https://www.w3schools.com/html/movie.mp4",
    review:
      "The live classes and revision sessions were extremely helpful. Teachers explained concepts clearly and guided me throughout preparation, which boosted my confidence and performance in NEET.",
  },
  {
    id: 3,
    name: "Aman Verma",
    course: "SSC",
    image: dummy_img,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    review:
      "Mock tests and detailed analysis helped me identify weak areas. With consistent practice and guidance, I improved speed and accuracy, which played a key role in clearing SSC exams.",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    course: "Class 12",
    image: dummy_img,
    video: "https://www.w3schools.com/html/movie.mp4",
    review:
      "Concept clarity and structured study material made learning easy. I was able to understand difficult topics quickly and score excellent marks in my board examinations confidently.",
  },
  {
    id: 5,
    name: "Arjun Singh",
    course: "UPSC",
    image: dummy_img,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    review:
      "The platform helped me stay consistent with preparation. Daily practice, current affairs updates, and mentorship support improved my answer writing and overall performance in UPSC exams.",
  },
  {
    id: 6,
    name: "Neha Patel",
    course: "GATE",
    image: dummy_img,
    video: "https://www.w3schools.com/html/movie.mp4",
    review:
      "High-quality lectures and problem-solving sessions helped me understand core subjects deeply. Regular practice and revision improved my confidence and performance in the GATE examination.",
  },
  {
    id: 7,
    name: "Rohit Yadav",
    course: "Banking",
    image: dummy_img,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    review:
      "The platform provided excellent practice questions and speed improvement strategies. Mock tests and analysis helped me manage time effectively and successfully clear banking exams.",
  },
  {
    id: 8,
    name: "Kavya Nair",
    course: "CBSE",
    image: dummy_img,
    video: "https://www.w3schools.com/html/movie.mp4",
    review:
      "Interactive classes and clear explanations made learning enjoyable. I was able to build strong fundamentals and perform well in school exams with consistent guidance from teachers.",
  },
];

const CARD_WIDTH = 100; // % width per card container

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<any>(null);

  const maxIndex = testimonials.length - 3;

  const next = () => {
    if (index < maxIndex) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="bg-bg py-16 px-6">
      <h2 className="text-3xl font-bold text-center">What Our Students Say</h2>

      {/* 🔥 SLIDER CONTAINER */}
      <div className="relative max-w-6xl mx-auto mt-12 overflow-hidden">
        {/* TRACK */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / 3)}%)`,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="w-full md:w-1/3 flex-shrink-0 p-3"
              onClick={() => setSelected(t)}
            >
              <div className="cursor-pointer bg-card shadow-card rounded-xl aspect-square flex flex-col items-center justify-center text-center p-6 hover:shadow-lg hover:-translate-y-2 transition">
                <img src={t.image} className="w-20 h-20 rounded-full mb-4" />

                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-primary">{t.course}</p>

                <p className="text-sm text-textSecondary mt-2">{t.review}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔘 BUTTONS */}
        <button
          onClick={prev}
          disabled={index === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full shadow
          ${index === 0 ? "opacity-30 cursor-not-allowed" : "bg-white hover:bg-gray-100"}`}
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          disabled={index === maxIndex}
          className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full shadow
          ${index === maxIndex ? "opacity-30 cursor-not-allowed" : "bg-white hover:bg-gray-100"}`}
        >
          <ChevronRight />
        </button>
      </div>

      {/* 🔥 MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-4 max-w-3xl w-full relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-xl p-3 text-red-600 font-bold"
            >
              ✕
            </button>

            <video
              src={selected.video}
              controls
              autoPlay
              className="w-full rounded-lg"
            />

            <div className="mt-4 text-center">
              <h3 className="font-semibold">{selected.name}</h3>
              <p className="text-sm text-textSecondary">{selected.course}</p>
              <button
                onClick={() => setSelected(null)}
                className="bg-primary text-xl text-white p-2     rounded-md font-medium hover:opacity-90 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default TestimonialSection;
