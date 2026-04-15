import { useEffect, useRef, useState } from "react";
import { Users, FileText, Video, BookOpen } from "lucide-react";
import online_lecture_img from "../../assets/online_lecture.jpg";

const Counter = ({ target, start }: { target: number; start: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, target]);

  return <span>{count}</span>;
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // 👀 Scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Users,
      value: 10,
      suffix: "M+",
      label: "Happy Students",
      color: "primary",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      desc: "Join millions of students learning daily",
    },
    {
      icon: FileText,
      value: 500,
      suffix: "K+",
      label: "Mock Tests",
      color: "secondary",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b",
      desc: "Practice with real exam-level tests",
    },
    {
      icon: Video,
      value: 50,
      suffix: "K+",
      label: "Video Lectures",
      color: "accent",
      image: online_lecture_img,
      desc: "Learn from top educators anytime",
    },
    {
      icon: BookOpen,
      value: 100,
      suffix: "K+",
      label: "Practice Papers",
      color: "primary",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0",
      desc: "Boost your preparation with curated papers",
    },
  ];

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

  return (
    <section ref={ref} className="bg-bg py-16 text-center">
      {/* HEADING */}
      <h2 className="text-2xl md:text-3xl font-bold">
        A Platform Trusted by Students
      </h2>

      <p className="text-xl lg:text-2xl text-textSecondary mt-3 ">
        We don’t just promise results — we deliver them through numbers
      </p>

      {/* STATS */}
      <div className="grid grid-cols-1 px-6 md:px-0 lg:px-0 md:grid-cols-4 gap-8 mt-12 max- max-w-7xl mx-auto">
        {stats.map((item, i) => {
          const Icon = item.icon;
          const styles = styleMap[item.color];

          return (
            <div
              key={i}
              className={`relative overflow-hidden group bg-card shadow-card rounded-lg p-10 flex flex-col items-center text-center
      hover:shadow-lg transition duration-300 hover:-translate-y-2 ${styles.hoverBg}`}
            >
              {/* MAIN CONTENT */}
              <div className="transition duration-300 group-hover:-translate-y-6 z-10">
                {/* ICON */}
                <div
                  className={`${styles.iconBg} p-4 rounded-full mb-4 flex items-center justify-center`}
                >
                  <Icon className={styles.iconText} size={28} />
                </div>

                {/* NUMBER */}
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  <Counter target={item.value} start={visible} />
                  {item.suffix}
                </h3>

                {/* LABEL */}
                <p className="text-textSecondary mt-2 text-sm">{item.label}</p>
              </div>

              {/* 🔥 IMAGE SLIDE FROM BOTTOM */}
              <div className="absolute bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition duration-500">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-4">
                  <p className="text-white text-sm font-medium text-center">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
