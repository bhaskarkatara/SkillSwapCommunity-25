import React, { useState } from 'react';
import { searchUser } from '@/api/auth';

const SkillExchange: React.FC = () => {
  const [skillQuery, setSkillQuery] = useState('');
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!skillQuery.trim()) return;

    setLoading(true);
    try {
      const response = await searchUser(skillQuery);
      setUsers(response);
      // setUsers(Array.isArray(response.data) ? response.data : []); // Ensure users is an array
    } catch (error) {
      console.error('Error fetching users:', error);
      setUsers([]); // Set an empty array if there's an error
    } finally {
      setLoading(false);
    }
  };
  console.log(users);
  return (
    <div
      style={{
        padding: '40px',
        backgroundColor: '#f5f7fa',
        minHeight: '100vh',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        Skill Exchange
      </h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px',
        }}
      >
        <input
          type='text'
          value={skillQuery}
          onChange={e => setSkillQuery(e.target.value)}
          placeholder='Search by skill (e.g., SEO, Design)'
          style={{
            padding: '10px',
            width: '300px',
            border: '1px solid #ccc',
            borderRadius: '5px 0 0 5px',
            outline: 'none',
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '10px 20px',
            backgroundColor: '#3b82f6',
            color: '#fff',
            border: 'none',
            borderRadius: '0 5px 5px 0',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </div>

      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : users.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>
          No users found with that skill.
        </p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
            justifyItems: 'center',
          }}
        >
          {users.map((user, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                width: '100%',
                maxWidth: '320px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#ddd',
                  borderRadius: '50%',
                  margin: '0 auto 15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  color: '#555',
                }}
              >
                {user.name.split(' ')[0]?.[0]?.toUpperCase()}
              </div>
              <h2
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  marginBottom: '5px',
                }}
              >
                {user.name}
              </h2>
              <p
                style={{
                  marginBottom: '5px',
                  color: '#666',
                  fontSize: '0.9rem',
                }}
              >
                📧 {user.email}
              </p>
              <p
                style={{
                  marginBottom: '10px',
                  color: '#666',
                  fontSize: '0.9rem',
                }}
              >
                📞 {user.contact}
              </p>
              <div style={{ marginBottom: '15px' }}>
                {user.skills.map((skill: string, i: number) => (
                  <span
                    key={i}
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#e0e7ff',
                      color: '#1e40af',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      margin: '3px',
                      fontSize: '0.8rem',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#3b82f6',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Request Swap
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillExchange;
