import { useState } from "react";
import teachersImg from "../../assets/teachers.jpg";
const faculty = [
  {
    id: 1,
    name: "Alok Sir",
    subject: "Physics",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    expertise: ["Mechanics", "Thermodynamics", "Modern Physics"],
    education: "B.Tech IIT Delhi",
    experience: "10+ Years Teaching Experience",
    reviews: [
      "Explains concepts from basics very clearly and makes physics interesting.",
      "Best physics teacher for JEE preparation with deep conceptual clarity.",
      "His problem-solving approach improved my accuracy significantly.",
    ],
  },
  {
    id: 2,
    name: "Neha Ma'am",
    subject: "Chemistry",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    video: "https://www.w3schools.com/html/movie.mp4",
    expertise: ["Organic Chemistry", "Inorganic", "Reaction Mechanism"],
    education: "M.Sc Chemistry, DU",
    experience: "8+ Years Teaching Experience",
    reviews: [
      "Amazing clarity in organic chemistry and reaction mechanisms.",
      "Very supportive and engaging teaching style.",
      "Helped me revise difficult topics quickly before exams.",
    ],
  },
  {
    id: 3,
    name: "Rohit Sir",
    subject: "Mathematics",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    expertise: ["Algebra", "Calculus", "Coordinate Geometry"],
    education: "M.Tech IIT Bombay",
    experience: "9+ Years Teaching Experience",
    reviews: [
      "Makes complex math problems very easy to understand.",
      "Best teacher for calculus and algebra concepts.",
      "His shortcuts and tricks saved a lot of time in exams.",
    ],
  },
  {
    id: 4,
    name: "Kavya Ma'am",
    subject: "Biology",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    video: "https://www.w3schools.com/html/movie.mp4",
    expertise: ["Botany", "Zoology", "Human Physiology"],
    education: "M.Sc Biology, BHU",
    experience: "7+ Years Teaching Experience",
    reviews: [
      "Explains biology concepts in a very simple and visual way.",
      "Helped me memorize and understand NCERT thoroughly.",
      "Her notes are extremely helpful for revision.",
    ],
  },
  {
    id: 5,
    name: "Ankit Sir",
    subject: "Reasoning",
    image: "https://avatars.githubusercontent.com/u/86269?v=4",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    expertise: ["Logical Reasoning", "Puzzles", "Seating Arrangement"],
    education: "B.Tech NIT Trichy",
    experience: "6+ Years Teaching Experience",
    reviews: [
      "Best teacher for reasoning and puzzle solving.",
      "Improved my speed and accuracy in exams.",
      "His tricks are very useful for competitive exams.",
    ],
  },
  {
    id: 6,
    name: "Pooja Ma'am",
    subject: "English",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    video: "https://www.w3schools.com/html/movie.mp4",
    expertise: ["Grammar", "Vocabulary", "Comprehension"],
    education: "MA English, JNU",
    experience: "8+ Years Teaching Experience",
    reviews: [
      "Helped me improve my grammar and vocabulary significantly.",
      "Very clear explanations and engaging sessions.",
      "Best for SSC and banking English preparation.",
    ],
  },
  {
    id: 7,
    name: "Vikas Sir",
    subject: "General Studies",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    expertise: ["History", "Polity", "Geography"],
    education: "MA Political Science, DU",
    experience: "11+ Years Teaching Experience",
    reviews: [
      "Covers current affairs and static topics very well.",
      "Best teacher for UPSC and state PSC preparation.",
      "His explanations make concepts easy to remember.",
    ],
  },
  {
    id: 8,
    name: "Sneha Ma'am",
    subject: "Economics",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    video: "https://www.w3schools.com/html/movie.mp4",
    expertise: ["Microeconomics", "Macroeconomics", "Indian Economy"],
    education: "M.A Economics, ISI",
    experience: "7+ Years Teaching Experience",
    reviews: [
      "Explains economic concepts in a very practical way.",
      "Helped me understand graphs and theories easily.",
      "Great teacher for conceptual clarity in economics.",
    ],
  },
];
const FacultyPage = () => {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section className="bg-bg py-16 px-6 text-center">
      <h2 className="text-3xl font-bold">Learn from India’s Top Faculty</h2>

      <p className=" text-xl text-textSecondary mt-3 max-w-2xl mx-auto">
        Our experienced educators bring years of teaching excellence to help you
        achieve your academic goals with confidence.
      </p>

      {/* 🔥 GROUP IMAGE */}
      <div className="flex justify-center mt-10 w-full">
        <img src={teachersImg} className="rounded-xl shadow-xl w-4xl" />
      </div>

      {/* 🔥 CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
        {faculty.map((f) => (
          <div
            key={f.id}
            onClick={() => setSelected(f)}
            className="cursor-pointer bg-card shadow-card rounded-xl p-4 flex flex-col items-center hover:shadow-lg hover:-translate-y-2 transition"
          >
            <img
              src={f.image}
              className="w-20 h-20 rounded-full mb-3 border-2 border-primary"
            />

            <h4 className="font-semibold text-sm">{f.name}</h4>
            <p className="text-xs text-textSecondary">{f.subject}</p>
            <button className="mt-4 text-primary text-sm font-medium hover:underline">
              View Details →
            </button>
          </div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-xl w-full max-w-4xl p-6 relative overflow-y-auto max-h-[90vh]">
            {/* CLOSE */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

            {/* HEADER */}
            <div className="flex flex-col md:flex-row gap-6 items-center  ">
              <img
                src={selected.image}
                className="w-24 h-24 rounded-full border-4 border-primary"
              />

              <div>
                <h3 className="text-xl font-bold">{selected.name}</h3>
                <p className="text-primary">{selected.subject}</p>
                <p className="text-sm text-textSecondary mt-1">
                  {selected.education}
                </p>
                <p className="text-sm text-textSecondary">
                  {selected.experience}
                </p>
              </div>
            </div>

            {/* 🎥 VIDEO */}
            <div className="mt-6">
              <video
                src={selected.video}
                controls
                className="w-full rounded-lg"
              />
            </div>

            {/* 🧠 EXPERTISE */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {selected.expertise.map((e: string, i: number) => (
                  <span
                    key={i}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>

            {/* ⭐ REVIEWS */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">What Students Say</h4>

              <div className="space-y-2">
                {selected.reviews.map((r: string, i: number) => (
                  <p
                    key={i}
                    className="text-sm text-textSecondary bg-gray-100 p-3 rounded-md"
                  >
                    “{r}”
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FacultyPage;
