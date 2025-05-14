import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { RootErrorBoundary } from './RootErrorBoundary';
import NotFound from '../views/NotFound/NotFound';
import Dashboard from '../dashboard/dashboard';
import SkillExchange from '../users/skillsExchange';
import Chat from '../users/chat';
import Posts from '../users/post';
import Profile from '../users/profile';
import CreateSession from '../users/CreateSession';
import Login from '../users/login';
import Signup from '../users/signup';
import OtpPage from '@/users/otpPage';
import UpdateProfilePage from '@/users/updateDetails';
import Private from './Private';
import Public from './Public';
import LandingPage from '@/LandingPage/LandingPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<RootErrorBoundary />}>
      {/* Public Routes */}
      <Route element={<Public />}>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/otp' element={<OtpPage />} />
      </Route>

      {/* Private / Protected Routes */}
      <Route element={<Private />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/findSkills' element={<SkillExchange />} />
        <Route path='/chats' element={<Chat />} />
        <Route path='/post' element={<Posts />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/createsession' element={<CreateSession />} />
        <Route path='/update' element={<UpdateProfilePage />} />
      </Route>

      {/* Not Found Page */}
      <Route path='*' element={<NotFound />} />
    </Route>,
  ),
);

export default router;
