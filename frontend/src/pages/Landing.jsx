import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Landing() {

  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;

      if (heroRef.current) {
        heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const style = document.createElement("style");
  style.textContent = `
    @keyframes floatWater {
      0%,100% { transform: translate(0,0) scale(1);}
      50% { transform: translate(-10px,-15px) scale(1.05);}
    }

    @keyframes ripple {
      0% { transform:scale(.8); opacity:.5;}
      100% { transform:scale(2); opacity:0;}
    }

    @keyframes fadeInUp {
      from {opacity:0; transform:translateY(20px);}
      to {opacity:1; transform:translateY(0);}
    }

    .animate-float-water { animation: floatWater 8s infinite ease-in-out;}
    .animate-ripple { animation: ripple 3s infinite;}
    .animate-fade-in-up { animation: fadeInUp .6s ease-out forwards;}
  `;
  document.head.appendChild(style);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-cyan-900 via-blue-800 to-teal-900 flex items-center justify-center">

      <div
        ref={heroRef}
        className={`relative z-10 text-center px-6 max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >

        <h1 className="text-6xl font-black text-teal-200 mb-6">
          SpringPulse हिमाचल
        </h1>

        <p className="text-xl text-teal-100 mb-12">
          AI Powered Monitoring of Natural Springs
        </p>

        {/* ROLE SELECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* VILLAGER */}
          <Link to="/villager/login">
            <div className="group relative bg-white/10 backdrop-blur-md border border-teal-300/20 rounded-2xl p-6 hover:scale-105 hover:border-teal-300/40 transition-all duration-300">

              <div className="text-5xl mb-3 animate-float-water">👨‍🌾</div>

              <h3 className="text-xl font-semibold text-white mb-2">
                Register as Villager
              </h3>

              <p className="text-sm text-teal-200">
                Report water sources & spring conditions
              </p>

            </div>
          </Link>

          {/* NGO */}
          <Link to="/ngo/login">
            <div className="group relative bg-white/10 backdrop-blur-md border border-teal-300/20 rounded-2xl p-6 hover:scale-105 hover:border-teal-300/40 transition-all duration-300">

              <div className="text-5xl mb-3 animate-float-water">🌿</div>

              <h3 className="text-xl font-semibold text-white mb-2">
                Login as NGO
              </h3>

              <p className="text-sm text-teal-200">
                Manage and verify natural springs
              </p>

            </div>
          </Link>

          {/* OFFICER */}
          <Link to="/officer/login">
            <div className="group relative bg-white/10 backdrop-blur-md border border-teal-300/20 rounded-2xl p-6 hover:scale-105 hover:border-teal-300/40 transition-all duration-300">

              <div className="text-5xl mb-3 animate-float-water">🏛</div>

              <h3 className="text-xl font-semibold text-white mb-2">
                Login as Officer
              </h3>

              <p className="text-sm text-teal-200">
                Government spring monitoring
              </p>

            </div>
          </Link>

          {/* ADMIN */}
          <Link to="/admin/login">
            <div className="group relative bg-white/10 backdrop-blur-md border border-teal-300/20 rounded-2xl p-6 hover:scale-105 hover:border-teal-300/40 transition-all duration-300">

              <div className="text-5xl mb-3 animate-float-water">🛡</div>

              <h3 className="text-xl font-semibold text-white mb-2">
                Login as Admin
              </h3>

              <p className="text-sm text-teal-200">
                System management and data control
              </p>

            </div>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Landing;