import { useUser } from '@/context/auth/useUser';
import SideBar from '@/components/Dashboard/SideBar';
import SkillsOffered from '@/components/Dashboard/SkillsOffered';
import ProfileHeader from '@/components/Dashboard/ProfileHeader';
import SuggestedExchange from '@/components/Dashboard/SuggestedExchange';
import ProgressTracker from '@/components/Dashboard/ProgressTracker';

const Dashboard = () => {
  const { skills, name } = useUser().user;
  const skillString = skills.join(', ');

  return (
    <div className='min-h-screen bg-gray-100 flex'>
      <SideBar />

      <main className='flex-1 p-8 space-y-8'>
        <ProfileHeader name={name} skillString={skillString} />

        <SkillsOffered skills={skills} />

        <SuggestedExchange />

        <ProgressTracker />
      </main>
    </div>
  );
};

export default Dashboard;
