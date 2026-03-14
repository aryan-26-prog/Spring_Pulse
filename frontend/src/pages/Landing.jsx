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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Inline styles for animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes floatWater {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(-10px, -15px) scale(1.05); }
    }
    @keyframes ripple {
      0% { transform: scale(0.8); opacity: 0.5; }
      100% { transform: scale(2); opacity: 0; }
    }
    @keyframes flow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes droplet {
      0% { transform: translateY(-20px) scale(0.8); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateY(20px) scale(0.2); opacity: 0; }
    }
    .animate-float-water { animation: floatWater 8s infinite ease-in-out; }
    .animate-ripple { animation: ripple 3s infinite; }
    .animate-flow { animation: flow 15s infinite ease; }
    .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
    .animate-droplet { animation: droplet 2s infinite; }
    .animation-delay-200 { animation-delay: 200ms; }
    .animation-delay-300 { animation-delay: 300ms; }
    .animation-delay-400 { animation-delay: 400ms; }
    .animation-delay-500 { animation-delay: 500ms; }
    .animation-delay-600 { animation-delay: 600ms; }
    .animation-delay-1000 { animation-delay: 1000ms; }
  `;
  document.head.appendChild(style);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-cyan-900 via-blue-800 to-teal-900 flex items-center justify-center font-sans">
      
      {/* Water wave background effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJ3YXZlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMTUwIEM1MCAxMDAgMTUwIDIwMCAyMDAgMTUwIEwyMDAgMjAwIEwwIDIwMCBaIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3dhdmUpIi8+PC9zdmc+')] bg-repeat animate-flow"></div>
      </div>

      {/* Animated water bubbles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatWater ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Mountain silhouette for HP */}
      <div className="absolute bottom-0 left-0 w-full z-1">
        <svg viewBox="0 0 1440 320" className="w-full h-auto opacity-30">
          <path fill="rgba(255,255,255,0.1)" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,224C960,245,1056,267,1152,250.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Main content */}
      <div 
        ref={heroRef}
        className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Himachal Pradesh Badge */}
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-md px-5 py-2.5 rounded-full border border-teal-300/30 mb-8 animate-fade-in-up shadow-lg shadow-teal-500/10">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
          </span>
          <span className="text-teal-100 text-sm font-medium tracking-wide">
            🌊 हिमाचल प्रदेश • Natural Springs
          </span>
        </div>

        {/* Main heading with water gradient */}
        <h1 className="mb-4 animate-fade-in-up animation-delay-200">
          <span className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-teal-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
            SpringPulse
          </span>
          <span className="text-5xl sm:text-6xl lg:text-7xl font-light text-teal-100/90 ml-2">
            हिमाचल
          </span>
        </h1>

        {/* Animated description with water theme */}
        <p className="text-xl sm:text-2xl text-teal-100/90 mb-6 animate-fade-in-up animation-delay-300 font-light">
          हिमालय की गोद में • AI से सुरक्षित प्राकृतिक जल स्रोत
        </p>
        
        <p className="text-md sm:text-lg text-teal-200/70 mb-8 animate-fade-in-up animation-delay-400 max-w-2xl mx-auto">
          Protecting and monitoring natural springs of Himachal Pradesh with advanced AI technology
          <span className="inline-block w-[3px] h-5 ml-1 bg-teal-300/70 animate-blink">|</span>
        </p>

        {/* HP-specific feature pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 animate-fade-in-up animation-delay-500 max-w-3xl mx-auto">
          {[
            { icon: "🏔️", text: "3,000+ Springs" },
            { icon: "💧", text: "Water Quality AI" },
            { icon: "📈", text: "Flow Prediction" },
            { icon: "🌿", text: "Eco Monitoring" },
            { icon: "🏞️", text: "Kullu Valley" },
            { icon: "⛰️", text: "Kangra Region" },
            { icon: "🌊", text: "Manali Springs" },
            { icon: "🍃", text: "Shimla Hills" }
          ].map((feature, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full text-teal-100 border border-teal-300/20 hover:bg-teal-500/20 hover:-translate-y-1 hover:border-teal-300/40 transition-all duration-300 cursor-default text-sm flex items-center gap-1.5 shadow-lg"
            >
              <span>{feature.icon}</span>
              <span>{feature.text}</span>
            </span>
          ))}
        </div>

        {/* CTA Buttons with water theme */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 animate-fade-in-up animation-delay-600">
          <Link
            to="/login"
            className="group relative px-10 py-4 bg-gradient-to-r from-teal-400 to-blue-400 text-white rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:shadow-teal-500/30 min-w-[180px] backdrop-blur-sm"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>🚰</span>
              Login
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-300 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          <Link
            to="/register"
            className="group relative px-10 py-4 bg-transparent border-2 border-teal-300/50 text-teal-100 rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-teal-500/20 hover:border-teal-300 min-w-[180px] backdrop-blur-sm"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>✨</span>
              Register
              <span className="group-hover:rotate-12 transition-transform duration-300">⛲</span>
            </span>
          </Link>
        </div>

        {/* HP Stats with water droplets */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-in-up animation-delay-700 max-w-4xl mx-auto">
          {[
            { number: "3,247", label: "Active Springs", icon: "💧" },
            { number: "12", label: "Districts", icon: "🗺️" },
            { number: "2.5M", label: "People Dependent", icon: "👥" },
            { number: "98%", label: "Water Purity", icon: "✨" }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-teal-300/20 hover:border-teal-300/40 transition-all">
                <div className="text-3xl mb-2 animate-float-water">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-teal-200/70 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial/quotes from locals */}
        <div className="mt-16 max-w-2xl mx-auto animate-fade-in-up animation-delay-1000">
          <div className="relative">
            <div className="absolute -top-4 left-0 text-6xl text-teal-300/20">"</div>
            <p className="text-teal-100/80 italic text-lg relative z-10 px-8">
              इन जल स्रोतों की सुरक्षा से हमारी आने वाली पीढ़ियाँ हरी-भरी रहेंगी
            </p>
            <div className="absolute -bottom-4 right-0 text-6xl text-teal-300/20">"</div>
          </div>
          <p className="text-teal-200/60 mt-4 text-sm">— हिमाचल के जल संरक्षक</p>
        </div>

        {/* Water ripple effect on hover */}
        <div className="mt-12 flex justify-center gap-3 opacity-60 animate-fade-in-up animation-delay-1000">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-teal-300/50 rounded-full animate-ripple" style={{ animationDelay: `${i * 0.2}s` }}></div>
          ))}
        </div>
      </div>

      {/* Floating water droplets */}
      <div className="absolute top-20 left-10 text-teal-300/20 text-4xl animate-float-water">💧</div>
      <div className="absolute bottom-40 right-20 text-teal-300/20 text-5xl animate-float-water animation-delay-1000">💧</div>
      <div className="absolute top-40 right-40 text-teal-300/20 text-3xl animate-float-water animation-delay-2000">💧</div>

      {/* Scroll indicator with water wave */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer group">
        <div className="flex flex-col items-center gap-2 text-teal-200/70 group-hover:text-teal-200 transition-colors">
          <span className="text-xs tracking-widest uppercase font-light">जल स्रोत खोजें</span>
          <span className="text-2xl">↓</span>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-teal-900/40 to-transparent pointer-events-none"></div>
    </div>
  );
}

export default Landing;