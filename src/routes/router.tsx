import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { RootErrorBoundary } from './RootErrorBoundary';
import NotFound from '../views/NotFound/NotFound';
import Dashboard from '../dashboard/dashboard';
import SkillExchange from '../users/skillsExchange';
import Posts from '../users/post';
import Profile from '../users/profile';
import CreateSession from '../users/CreateSession';
import Login from '../views/Auth/Login/Login.tsx';
import Signup from '../views/Auth/Signup/Signup.tsx';
import Private from './Private';
import Public from './Public';
import LandingPage from '@/views/LandingPage/LandingPage.tsx';
import Otp from '@/views/Auth/Otp/Otp.tsx';
import Chat from '@/views/Chat/Chat.tsx';
import EditProfile from '@/views/EditProfile/EditProfile.tsx';
import appRoutes from './appRoutes.ts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<RootErrorBoundary />}>
      {/* Public Routes */}
      <Route element={<Public />}>
        <Route path='/' element={<LandingPage />} />
        <Route path={appRoutes.login} element={<Login />} />
        <Route path={appRoutes.signup} element={<Signup />} />
        <Route path={appRoutes.otp} element={<Otp />} />
      </Route>

      {/* Private / Protected Routes */}
      <Route element={<Private />}>
        <Route path={appRoutes.dashboard} element={<Dashboard />} />
        <Route path={appRoutes.editProfile} element={<EditProfile />} />
        <Route path={appRoutes.findSkills} element={<SkillExchange />} />
        <Route path={appRoutes.chats} element={<Chat />} />
        <Route path={appRoutes.posts} element={<Posts />} />
        <Route path={appRoutes.profile} element={<Profile />} />
        <Route path={appRoutes.createSession} element={<CreateSession />} />
      </Route>

      {/* Not Found Page */}
      <Route path='*' element={<NotFound />} />
    </Route>,
  ),
);

export default router;
