import { Router } from './router';
import { MainPage } from './main.page';
import { TeamPage } from './team.page';


export const appRouter = new Router();

appRouter.setRoutes([
  {
    path: '',
    redirectTo: 'main'
  },
  {
    path: 'main',
    page: MainPage,
  },
  {
    path: 'team',
    page: TeamPage,
  },
]);