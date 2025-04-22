import React from "react";

const SkillExchange: React.FC = () => {
  const users = [
    {
      name: "Alice Smith",
      skills: "Graphic Design, Illustration",
    },
    {
      name: "Bob Johnson",
      skills: "Web Development, SEO",
    },
    {
      name: "Charlie Brown",
      skills: "Photography, Videography",
    },
    {
      name: "Diana Prince",
      skills: "Marketing, Content Writing",
    },
    {
      name: "Ethan Hunt",
      skills: "Project Management, Agile Methodologies",
    },
    {
      name: "Fiona Apple",
      skills: "Music Production, Songwriting",
    },
  ];

  return (
    <div style={{ padding: "40px", backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px" }}>
        Skill Exchange
      </h1>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Search by category, rating, or availability"
          style={{
            padding: "10px",
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "5px 0 0 5px",
            outline: "none",
          }}
        />
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#3b82f6",
            color: "#fff",
            border: "none",
            borderRadius: "0 5px 5px 0",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          justifyItems: "center",
        }}
      >
        {users.map((user, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              width: "100%",
              maxWidth: "320px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "#ddd",
                borderRadius: "50%",
                margin: "0 auto 15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                color: "#555",
              }}
            >
              100 × 100
            </div>
            <h2 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>
              {user.name}
            </h2>
            <p style={{ marginBottom: "20px", color: "#555" }}>
              Skills Offered: {user.skills}
            </p>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#3b82f6",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Request Swap
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillExchange;
