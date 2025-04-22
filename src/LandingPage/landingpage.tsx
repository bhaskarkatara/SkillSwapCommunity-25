import React from "react";
import Logo from "../assets/icons/logo.svg";
import SkillMatching from "../assets/icons/Vector.svg";
import LiveChat from "../assets/icons/Frame.svg";
import Certification from "../assets/icons/Frame (1).svg";
import Community from "../assets/icons/Frame (2).svg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 flex flex-col items-center font-sans">
      {/* Header */}
      <div>
      <header className="w-full flex justify-between items-center p-6 max-w-7xl">
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Skills Swap Logo" className="h-12 w-12" />
          <span className="text-white text-2xl font-bold">Skills Swap</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center mt-12 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Learn, Share, and Grow Together
        </h1>
        <div className="mt-8 flex justify-center space-x-6">
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
            Sign Up
          </button>
          <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition">
            Find Skills
          </button>
        </div>
      </section>
      </div>
    

      {/* Key Features Section */}
      <section className="mt-24 w-full max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="feature-card">
            <img src={SkillMatching} alt="Skill Matching" className="feature-icon" />
            <h3 className="text-xl font-semibold mt-6 mb-2">Skill Matching</h3>
            <p className="text-gray-600 text-sm px-2">
              Connect with others who want to learn or share skills.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <img src={LiveChat} alt="Live Chat" className="feature-icon" />
            <h3 className="text-xl font-semibold mt-6 mb-2">Live Chat & Video Calls</h3>
            <p className="text-gray-600 text-sm px-2">
              Communicate in real-time with your skill partners.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <img src={Certification} alt="Certification" className="feature-icon" />
            <h3 className="text-xl font-semibold mt-6 mb-2">Verified Certifications</h3>
            <p className="text-gray-600 text-sm px-2">
              Ensure quality learning with verified certifications.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="feature-card">
            <img src={Community} alt="Community Challenges" className="feature-icon" />
            <h3 className="text-xl font-semibold mt-6 mb-2">Community Challenges</h3>
            <p className="text-gray-600 text-sm px-2">
              Participate in challenges to enhance your skills.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 mb-8 text-white text-sm">
        © 2025 Skills Swap Community. All rights reserved.
      </footer>

      {/* Extra CSS for feature cards */}
      <style>{`
        .feature-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        .feature-icon {
          height: 80px;
          width: 80px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
