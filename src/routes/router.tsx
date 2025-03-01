import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { RootErrorBoundary } from './RootErrorBoundary';
import Public from './Public';
import Private from './Private';
import NotFound from '../views/NotFound/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<RootErrorBoundary />}>
      {/* Public Routes */}
      <Route element={<Public />}>
        <Route path='/' element={<Public />} />
      </Route>

      {/* Private Routes */}
      <Route element={<Private />}></Route>

      {/* Not Found Page */}
      <Route path='*' element={<NotFound />} />
    </Route>,
  ),
);

export default router;
