import Logo from '../assets/icons/logo.svg';
import SkillMatching from '../assets/icons/Vector.svg';
import LiveChat from '../assets/icons/Frame.svg';
import Certification from '../assets/icons/Frame (1).svg';
import Community from '../assets/icons/Frame (2).svg';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  function handleSignup() {
    navigate('/signup');
  }

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 flex flex-col items-center font-sans'>
      <header className='w-full flex justify-between items-center px-4'>
        <img src={Logo} alt='Skills Swap Logo' className='w-28' />
      </header>

      <div>
        <section className='text-center px-4'>
          <h1 className='text-5xl md:text-6xl font-extrabold text-white leading-tight'>
            Learn, Share, and Grow Together
          </h1>
          <div className='mt-8 flex justify-center space-x-6'>
            <button
              className='border-2 border-white cursor-pointer text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition'
              onClick={handleSignup}
            >
              Sign Up
            </button>
            <button className='border-2 border-white cursor-pointer text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition'>
              Find Skills
            </button>
          </div>
        </section>
      </div>

      <section className='mt-8 w-full max-w-7xl px-6'>
        <h2 className='text-3xl md:text-4xl font-bold text-white text-center mb-8'>
          Key Features
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='feature-card'>
            <img
              src={SkillMatching}
              alt='Skill Matching'
              className='feature-icon'
            />
            <h3 className='text-xl font-semibold mt-6 mb-2'>Skill Matching</h3>
            <p className='text-gray-600 text-sm px-2'>
              Connect with others who want to learn or share skills.
            </p>
          </div>

          <div className='feature-card'>
            <img src={LiveChat} alt='Live Chat' className='feature-icon' />
            <h3 className='text-xl font-semibold mt-6 mb-2'>
              Live Chat & Video Calls
            </h3>
            <p className='text-gray-600 text-sm px-2'>
              Communicate in real-time with your skill partners.
            </p>
          </div>

          <div className='feature-card'>
            <img
              src={Certification}
              alt='Certification'
              className='feature-icon'
            />
            <h3 className='text-xl font-semibold mt-6 mb-2'>
              Verified Certifications
            </h3>
            <p className='text-gray-600 text-sm px-2'>
              Ensure quality learning with verified certifications.
            </p>
          </div>

          <div className='feature-card'>
            <img
              src={Community}
              alt='Community Challenges'
              className='feature-icon'
            />
            <h3 className='text-xl font-semibold mt-6 mb-2'>
              Community Challenges
            </h3>
            <p className='text-gray-600 text-sm px-2'>
              Participate in challenges to enhance your skills.
            </p>
          </div>
        </div>
      </section>

      <footer className='text-white text-sm mt-auto'>
        © 2025 Skills Swap Community. All rights reserved.
      </footer>

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
