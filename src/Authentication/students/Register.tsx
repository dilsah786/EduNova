import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

import educatorsImage from "../../assets/educators.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  console.log(name);
  console.log(email);
  console.log(password);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${educatorsImage})` }}
    >
      <div className="bg-card shadow-card rounded-lg p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-xl sm:text-2xl font-bold text-textPrimary mb-6 text-center">
          Register
        </h2>

        <div className="flex flex-col gap-4">
          {/* NAME */}
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 -translate-y-1/2 text-textLight"
              size={18}
            />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-borderLight pl-10 pr-3 py-3 rounded-md outline-none text-sm sm:text-base focus:border-primary"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 text-textLight"
              size={18}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-borderLight pl-10 pr-3 py-3 rounded-md outline-none text-sm sm:text-base focus:border-primary"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <Lock
              className="absolute left-3 top-1/2 -translate-y-1/2 text-textLight"
              size={18}
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-borderLight pl-10 pr-10 py-3 rounded-md outline-none text-sm sm:text-base focus:border-primary"
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* TOGGLE */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-textLight cursor-pointer"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* BUTTON */}
          <button className="bg-primary text-white py-3 rounded-md text-sm sm:text-base font-medium hover:opacity-90 transition cursor-pointer">
            Register
          </button>
        </div>

        <p className="text-xs sm:text-sm text-textSecondary mt-4 text-center">
          Already have an account?{" "}
          <span
            className="text-primary cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
        <p className="text-xs sm:text-sm text-textSecondary mt-4 text-center hover:underline">
          <span
            className="text-primary cursor-pointer"
            onClick={() => navigate("/")}
          >
            Back to HomePage
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
