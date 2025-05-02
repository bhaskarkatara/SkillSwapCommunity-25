import { useEffect } from 'react';
import { useState } from 'react';
import { getUserProfile } from '@/api/auth';
import { User } from '@/types/user';
import { useNavigate } from 'react-router-dom';
import Spinner from '@/components/ui/Spinner';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);

        const data = await getUserProfile();

        // setTimeout(() => {
        setLoading(false);
        // }, 4000);
        setUser(data);
      } catch (err) {
        setLoading(false);
        console.error('Error fetching user profile:', err);
        setError('Failed to load user data. Please log in again.');
      }
    };

    fetchProfile();
  }, []);

  if (loading || !user) return <Spinner />;

  const skillString = user.skills.join(', ');

  return (
    <div className='min-h-screen bg-gray-100 flex'>
      {/* Sidebar */}
      <aside className='w-64 bg-white p-6 shadow-md'>
        <h1 className='text-2xl font-bold mb-8'>Dashboard</h1>
        <nav className='space-y-6'>
          <div className='flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer'>
            <i className='fas fa-home'></i>
            <span>Home</span>
          </div>
          <div className='flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer'>
            <i className='fas fa-user'></i>
            <span>My Skills</span>
          </div>
          <div className='flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer'>
            <i className='fas fa-search'></i>
            <span onClick={() => navigate('/findSkills')}>Find Skills</span>
          </div>
          <div className='flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer'>
            <i className='fas fa-comments'></i>
            <span onClick={() => navigate('/chats')}>Messages</span>
          </div>
          <div className='flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer'>
            <i className='fas fa-cog'></i>
            <span>Settings</span>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className='flex-1 p-8 space-y-8'>
        {/* User Profile */}
        <section className='bg-white rounded-xl p-6 shadow'>
          <h2 className='text-2xl font-bold mb-4'>User Profile</h2>
          <div className='flex items-center space-x-6'>
            <div className='relative inline-flex items-center justify-center w-24 h-24 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
              <span className=' text-5xl text-gray-600 dark:text-gray-300'>
                {user.name.substring(0, 1)}
              </span>
            </div>{' '}
            <div>
              <h3 className='text-xl font-semibold'>{user.name}</h3>
              <p className='text-gray-600'>Skills: {skillString}</p>
            </div>
          </div>
        </section>

        {/* Skills Offered */}
        <section className='bg-white rounded-xl p-6 shadow'>
          <h2 className='text-2xl font-bold mb-4'>Skills Offered</h2>
          <ul className='list-disc list-inside text-gray-700 space-y-1'>
            {user.skills.map(skill => (
              <li>{skill}</li>
            ))}
          </ul>
        </section>

        {/* Skill Matching */}
        <section className='bg-white rounded-xl p-6 shadow'>
          <h2 className='text-2xl font-bold mb-4'>Skill Matching</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='bg-gray-100 p-4 rounded-lg'>
              <h3 className='font-semibold'>Suggested Partner 1</h3>
              <p className='text-gray-600 mb-3'>
                Skills: Photography, Videography
              </p>
              <button className='bg-blue-500 text-white px-4 py-2 rounded'>
                Connect
              </button>
            </div>
            <div className='bg-gray-100 p-4 rounded-lg'>
              <h3 className='font-semibold'>Suggested Partner 2</h3>
              <p className='text-gray-600 mb-3'>Skills: SEO, Content Writing</p>
              <button className='bg-blue-500 text-white px-4 py-2 rounded'>
                Connect
              </button>
            </div>
          </div>
        </section>

        {/* Progress Tracker */}
        <section className='bg-white rounded-xl p-6 shadow'>
          <h2 className='text-2xl font-bold mb-4'>Progress Tracker</h2>
          <div className='w-full bg-gray-200 rounded-full h-3 mb-4'>
            <div
              className='bg-blue-500 h-3 rounded-full'
              style={{ width: '70%' }}
            ></div>
          </div>
          <p className='text-gray-600'>70% of skill exchanges completed!</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
