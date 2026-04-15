import { useState } from "react";

const cities = [
  "Kota",
  "Patna",
  "New Delhi",
  "Ayodhya",
  "Jaipur",
  "Kolkata",
  "Noida",
  "Kolhapur",
  "Mumbai",
  "Pune",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Lucknow",
  "Varanasi",
  "Kanpur",
  "Indore",
  "Bhopal",
  "Nagpur",
  "Surat",
  "Ahmedabad",
  "Ranchi",
  "Dhanbad",
  "Gaya",
  "Meerut",
  "Agra",
  "Aligarh",
  "Gorakhpur",
  "Jodhpur",
  "Udaipur",
  "Amritsar",
  "Chandigarh",
  "Dehradun",
  "Shimla",
  "Srinagar",
  "Jammu",
  "Raipur",
  "Bilaspur",
  "Jabalpur",
  "Gwalior",
  "Aurangabad",
  "Nashik",
  "Thane",
  "Faridabad",
  "Gurgaon",
  "Sonipat",
  "Panipat",
  "Rohtak",
  "Haldwani",
  "Haridwar",
].map((city) => ({
  name: city,
  img: `https://picsum.photos/seed/${city}/400/300`, // ✅ stable
}));

const Centres = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCities = showAll ? cities : cities.slice(0, 8);

  return (
    <div className="bg-bg min-h-screen py-12 px-6">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">
          Explore Tech-Enabled Offline Centres
        </h1>

        <p className="text-textSecondary mt-3 text-2xl">
          Creating new benchmarks in learning experiences
        </p>

        <p className="mt-4 text-lg font-medium text-primary">
          Empowering students in 175+ cities nationwide{" "}
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {visibleCities.map((city, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-card hover:shadow-lg transition hover:-translate-y-2 cursor-pointer bg-card"
          >
            {/* IMAGE */}
            {/* <div className="h-32 w-full overflow-hidden">
              <img
                src={city.img}
                alt={city.name}
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
            </div> */}
            <div className="h-32 w-full relative overflow-hidden">
              <img
                src={city.img}
                alt={city.name}
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-end justify-center">
                <p className="text-white text-xl lg:text-2xl font-semibold mb-2">
                  {city.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="border border-primary text-xl text-primary px-6 py-2 rounded-md font-medium hover:bg-primary hover:text-white transition"
        >
          {showAll ? "Show Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default Centres;
