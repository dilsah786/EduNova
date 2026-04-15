import { BookOpen, Briefcase, GraduationCap, School } from "lucide-react";
import { FaBookMedical } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
const categories = [
  {
    title: "NEET",
    // icon: BookOpen,
    icon: FaBookMedical,
    color: "primary",
    courses: ["Class 11", "Class 12", "Dropper"],
  },
  {
    title: "IIT JEE",
    // icon: GraduationCap,
    icon: MdEngineering,
    color: "secondary",
    courses: ["Class 11", "Class 12", "Dropper"],
  },
  {
    title: "School Boards",
    icon: School,
    color: "accent",
    courses: ["CBSE", "ICSE", "UP Board", "Maharashtra"],
  },
  {
    title: "Govt Exams",
    icon: Briefcase,
    color: "primary",
    courses: ["SSC", "Banking", "Teaching", "Judiciary"],
  },
  {
    title: "UPSC",
    icon: GraduationCap,
    color: "secondary",
    courses: [],
  },
  {
    title: "Pre Foundation",
    icon: BookOpen,
    color: "accent",
    courses: [],
  },
];

// ✅ Tailwind-safe color mapping
const styleMap = {
  primary: {
    iconBg: "bg-primary/10",
    iconText: "text-primary",
    hoverBg: "hover:bg-primary/5",
    tag: "border-primary/30 bg-primary/10 text-primary",
  },
  secondary: {
    iconBg: "bg-secondary/10",
    iconText: "text-secondary",
    hoverBg: "hover:bg-secondary/5",
    tag: "border-secondary/30 bg-secondary/10 text-secondary",
  },
  accent: {
    iconBg: "bg-accent/10",
    iconText: "text-accent",
    hoverBg: "hover:bg-accent/5",
    tag: "border-accent/30 bg-accent/10 text-accent",
  },
};

const CategorySection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Explore Categories
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          const styles = styleMap[cat.color];

          return (
            <div
              key={index}
              className={`bg-card shadow-card rounded-lg p-6 text-center 
              hover:shadow-lg transition hover:-translate-y-2 ${styles.hoverBg}`}
            >
              {/* ICON */}
              <div className="flex justify-center mb-4">
                <div className={`p-4 rounded-full ${styles.iconBg}`}>
                  <Icon className={styles.iconText} size={28} />
                </div>
              </div>

              {/* TITLE */}
              <h3 className="font-semibold mb-3">{cat.title}</h3>

              {/* COURSES */}
              {cat.courses.length > 0 && (
                <div className="flex justify-center gap-2 flex-wrap text-sm text-textSecondary">
                  {cat.courses.map((course, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 rounded-md border ${styles.tag}`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              )}

              {/* BUTTON */}
              <button className="mt-4 text-primary text-sm font-medium hover:underline">
                <a href="#">Explore Category →</a>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategorySection;
