import React, { useEffect, useState } from "react";
import { getUserProfile, updateDetails } from "@/api/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const predefinedSkills = [
  "Web Development",
  "Graphic Design",
  "Data Science",
  "Machine Learning",
  "Cloud Computing",
  "UI/UX Design",
];

const UpdateProfilePage = () => {
    const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        setUser(data);
        setName(data.name || "");
        setEmail(data.email || "");
        setContact(data.contact || "");
        setSkills(data.skills || []);
      } catch (err) {
        console.error("Error fetching user profile:", err);
        setError("Failed to load user data. Please log in again.");
      }
    };

    fetchProfile();
  }, []);

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleUpdate = async () => {
    try {
     const reponse = await updateDetails({name , contact , skills});
          
      alert("Profile updated successfully!");
      navigate("/dashboard");
    } catch (err) {
      console.error("Error updating profile:", err);
      alert("Update failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Profile</h2>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        {user ? (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                disabled
                className="w-full border p-2 rounded bg-gray-100"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Contact</label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Skills</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className=" bg-gray-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
                  >
                    {skill}
                    <button
                      onClick={() => handleRemoveSkill(skill)}
                      className="ml-2 text-red-500 font-bold"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <select
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className="w-full border p-2 rounded"
                >
                  <option value="">Select a skill</option>
                  {predefinedSkills
                    .filter((skill) => !skills.includes(skill))
                    .map((skill, index) => (
                      <option key={index} value={skill}>
                        {skill}
                      </option>
                    ))}
                </select>
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="bg-green-500 text-white px-3 rounded hover:bg-green-600"
                >
                  Add
                </button>
              </div>
            </div>

            <button
              onClick={handleUpdate}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Update Profile
            </button>
          </>
        ) : (
          !error && <p className="text-gray-500 text-center">Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default UpdateProfilePage;
