import { Video, FileText, BookOpen } from "lucide-react";
import { FaHandHoldingMedical } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
<RiLiveFill />;
<FaHandHoldingMedical />


const features = [
  {
    title: "Live Classes",
    icon: RiLiveFill,
    // icon: Video,
    color: "primary",
    desc: "Attend interactive live sessions with top educators.",
  },
  {
    title: "Recorded Lecturs",
    icon: Video,
    color: "secondary",
    desc: "Attend interactive live sessions with top educators.",
  },
  {
    title: "PYQs",
    icon: FileText,
    color: "accent",
    desc: "Practice with real exam-level questions and analysis.",
  },
  {
    title: "Test Series",
    icon: FileText,
    color: "primary",
    desc: "Practice with real exam-level questions and analysis.",
  },
  {
    title: "Study Material",
    icon: BookOpen,
    color: "secondary",
    desc: "Access notes, PYQs, and curated resources.",
  },
];

// ✅ Tailwind-safe styles
const styleMap = {
  primary: {
    iconBg: "bg-primary/10",
    iconText: "text-primary",
    hoverBg: "hover:bg-primary/5",
  },
  secondary: {
    iconBg: "bg-secondary/10",
    iconText: "text-secondary",
    hoverBg: "hover:bg-secondary/5",
  },
  accent: {
    iconBg: "bg-accent/10",
    iconText: "text-accent",
    hoverBg: "hover:bg-accent/5",
  },
};

const FeatureSection = () => {
  return (
    <section className="bg-card py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Explore Features
      </h2>{" "}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
        {features.map((item, index) => {
          const Icon = item.icon;
          const styles = styleMap[item.color];

          return (
            <div
              key={index}
              className={`p-6 shadow-card rounded-lg flex flex-col items-center transition duration-300 hover:shadow-lg hover:-translate-y-2 ${styles.hoverBg}`}
            >
              {/* ICON */}
              <div className={`${styles.iconBg} p-4 rounded-full mb-4`}>
                <Icon className={styles.iconText} size={28} />
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-lg">{item.title}</h3>

              {/* DESC */}
              <p className="text-textSecondary text-sm mt-2">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureSection;
