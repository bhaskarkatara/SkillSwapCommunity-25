import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  avatar: string;
}

interface Message {
  id: number;
  sender: "me" | "them";
  text: string;
}

const ChatApp: React.FC = () => {
  const users: User[] = [
    { id: 1, name: "John Doe", avatar: "40×40" },
    { id: 2, name: "Alice Smith", avatar: "40×40" },
    { id: 3, name: "Bob Johnson", avatar: "40×40" },
    { id: 4, name: "Charlie Brown", avatar: "40×40" },
  ];

  const chatMessages: Message[] = [
    { id: 1, sender: "them", text: "Hello! How can I help you today?" },
    { id: 2, sender: "them", text: "Sure! What skills are you interested in?" },
    { id: 3, sender: "me", text: "I wanted to discuss our skill swap." },
    { id: 4, sender: "me", text: "I'm looking to improve my graphic design skills." },
  ];

  const [selectedUser, setSelectedUser] = useState<User>(users[0]);
  const [messages, setMessages] = useState<Message[]>(chatMessages);
  const [newMessage, setNewMessage] = useState<string>("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now(), sender: "me", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#f5f7fa" }}>
      {/* Sidebar */}
      <div style={{ width: "250px", backgroundColor: "#fff", padding: "20px", boxShadow: "2px 0 5px rgba(0,0,0,0.1)" }}>
        <h3 style={{ marginBottom: "20px" }}>Recent Conversations</h3>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
              cursor: "pointer",
            }}
            onClick={() => {
              setSelectedUser(user);
              setMessages(chatMessages); // Optional: Reset to dummy chat when switching user
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#ddd",
                borderRadius: "50%",
                marginRight: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "12px",
                color: "#555",
              }}
            >
              {user.avatar}
            </div>
            <span style={{ fontSize: "1rem", fontWeight: "bold" }}>{user.name}</span>
          </div>
        ))}
      </div>

      {/* Chat Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid #ddd",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <h2>Chat with {selectedUser.name}</h2>
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
            Start Video Call
          </button>
        </div>

        {/* Chat Messages */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
            backgroundColor: "#f0f2f5",
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: "flex",
                justifyContent: msg.sender === "me" ? "flex-end" : "flex-start",
                marginBottom: "15px",
              }}
            >
              {msg.sender === "them" && (
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#ddd",
                    borderRadius: "50%",
                    marginRight: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "12px",
                    color: "#555",
                  }}
                >
                  40×40
                </div>
              )}
              <div
                style={{
                  backgroundColor: msg.sender === "me" ? "#d1fae5" : "#dbeafe",
                  padding: "10px 15px",
                  borderRadius: "10px",
                  maxWidth: "60%",
                  fontSize: "1rem",
                }}
              >
                {msg.text}
              </div>
              {msg.sender === "me" && (
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#ddd",
                    borderRadius: "50%",
                    marginLeft: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "12px",
                    color: "#555",
                  }}
                >
                  40×40
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div
          style={{
            display: "flex",
            padding: "15px",
            borderTop: "1px solid #ddd",
            backgroundColor: "#fff",
          }}
        >
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          />
          <button
            onClick={handleSend}
            style={{
              padding: "10px 20px",
              backgroundColor: "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
