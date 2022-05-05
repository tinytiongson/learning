import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, ProfilePage, PipelinePage } from './pages';

const routes = [
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/pipeline',
    component: PipelinePage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
