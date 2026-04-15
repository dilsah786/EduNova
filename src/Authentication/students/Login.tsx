// import { useState } from "react";
// import { Mail, Lock, Eye, EyeOff } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-bg px-4">
//       <div className="bg-card shadow-card rounded-lg p-6 sm:p-8 w-full max-w-md">
//         <h2 className="text-xl sm:text-2xl font-bold text-textPrimary mb-6 text-center">
//           Login
//         </h2>

//         <div className="flex flex-col gap-4">
//           {/* EMAIL INPUT */}
//           <div className="relative">
//             <Mail
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-textLight"
//               size={18}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full border border-borderLight pl-10 pr-3 py-3 rounded-md outline-none text-sm sm:text-base focus:border-primary"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           {/* PASSWORD INPUT */}
//           <div className="relative">
//             <Lock
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-textLight"
//               size={18}
//             />

//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               className="w-full border border-borderLight pl-10 pr-10 py-3 rounded-md outline-none text-sm sm:text-base focus:border-primary"
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             {/* SHOW/HIDE BUTTON */}
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-textLight cursor-pointer"
//             >
//               {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//             </button>
//           </div>

//           {/* BUTTON */}
//           <button className="bg-primary text-white py-3 rounded-md text-sm sm:text-base font-medium hover:opacity-90 transition cursor-pointer">
//             Login
//           </button>
//         </div>

//         <p className="text-xs sm:text-sm text-textSecondary mt-4 text-center">
//           Don’t have an account?{" "}
//           <span
//             className="text-primary cursor-pointer"
//             onClick={() => navigate("/register")}
//           >
//             Register
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import loginBg from "../../assets/login-image.avif"; // your image
import educatorsImage from "../../assets/educators.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${educatorsImage})` }}
    >
      {/* OVERLAY (FADE EFFECT) */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* FORM */}
      <div className="relative z-10 w-full max-w-md px-4">
        <div className="bg-card/90 backdrop-blur-md shadow-card rounded-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-textPrimary mb-6 text-center">
            Login
          </h2>

          <div className="flex flex-col gap-4">
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

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-textLight"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* BUTTON */}
            <button className="bg-primary text-white py-3 rounded-md text-sm sm:text-base font-medium hover:opacity-90 transition">
              Login
            </button>
          </div>

          <p className="text-xs sm:text-sm text-textSecondary mt-4 text-center">
            Don’t have an account?{" "}
            <span
              className="text-primary cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register
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
    </div>
  );
};

export default Login;
