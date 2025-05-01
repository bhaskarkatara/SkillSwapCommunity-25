import React, { useEffect } from "react";
import { useState} from "react";
import { getUserProfile } from "@/api/auth";
const Dashboard = () => {
  // const email = location.state;
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        setUser(data);
      } catch (err) {
        console.error("Error fetching user profile:", err);
        setError("Failed to load user data. Please log in again.");
      }
    };

    fetchProfile();
  }, []);
  console.log(user);
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-md">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        <nav className="space-y-6">
          <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer">
            <i className="fas fa-user"></i>
            <span>My Skills</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer">
            <i className="fas fa-search"></i>
            <span>Find Skills</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer">
            <i className="fas fa-comments"></i>
            <span>Messages</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer">
            <i className="fas fa-cog"></i>
            <span>Settings</span>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-8">
        {/* User Profile */}
        <section className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">User Profile</h2>
          <div className="flex items-center space-x-6">
            <div className="h-24 w-24 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
              100x100
            </div>
            <div>
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <p className="text-gray-600">Skills: Web Development, Graphic Design</p>
            </div>
          </div>
        </section>

        {/* Skills Offered */}
        <section className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">Skills Offered</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Web Development</li>
            <li>Graphic Design</li>
            <li>Digital Marketing</li>
          </ul>
        </section>

        {/* Skill Matching */}
        <section className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">Skill Matching</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">Suggested Partner 1</h3>
              <p className="text-gray-600 mb-3">Skills: Photography, Videography</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Connect</button>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">Suggested Partner 2</h3>
              <p className="text-gray-600 mb-3">Skills: SEO, Content Writing</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Connect</button>
            </div>
          </div>
        </section>

        {/* Progress Tracker */}
        <section className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">Progress Tracker</h2>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div className="bg-blue-500 h-3 rounded-full" style={{ width: "70%" }}></div>
          </div>
          <p className="text-gray-600">70% of skill exchanges completed!</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
