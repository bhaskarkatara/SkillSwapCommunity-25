import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { RootErrorBoundary } from './RootErrorBoundary';
import Public from './Public';
import Private from './Private';
import NotFound from '../views/NotFound/NotFound';
import Home from '../LandingPage/landingpage'
import Dashboard from '../dashboard/dashboard';
import SkillExchange from '../users/skillsExchange';
import Chat from '../users/chat';
import Posts from '../users/post';
import Profile from '../users/profile';
import CreateSession from '../users/CreateSession';
import Login from '../users/login';
import Signup from '../users/signup'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<RootErrorBoundary />}>
      {/* Public Routes */}
      <Route element={<Public />}>
        <Route path='/' element={<Public />} />
      </Route>
      <Route element={<Home />}>
        <Route path='/home' element={<Home />} />
      </Route>
      <Route element={<Dashboard />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
      <Route element={<SkillExchange />}>
        <Route path='/findSkills' element={<SkillExchange />} />
      </Route>
      <Route element={<Chat />}>
        <Route path='/chats' element={<Chat />} />
      </Route>
      <Route element={<Posts />}>
        <Route path='/post' element={<Posts />} />
      </Route>
      <Route element={<Profile />}>
        <Route path='/profile' element={<Profile />} />
      </Route>
      <Route element={<CreateSession />}>
        <Route path='/createsession' element={<CreateSession />} />
      </Route>
      <Route element={<Login />}>
        <Route path='/login' element={<Login />} />
      </Route>
      <Route element={<Signup />}>
        <Route path='/signup' element={<Signup />} />
      </Route>

      {/* Private Routes */}
      <Route element={<Private />}></Route>

      {/* Not Found Page */}
      <Route path='*' element={<NotFound />} />
    </Route>,
  ),
);

export default router;
