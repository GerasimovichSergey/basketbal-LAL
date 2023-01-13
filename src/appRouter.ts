import { Router } from './router';
import { MainPage } from './main.page';


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
]);