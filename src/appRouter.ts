import { Router } from './router';
import { MainPage } from './main.page';
import { TeamPage } from './team.page';
import { PlayerPage } from './player.page';
import { SelectedPlayerPage } from './selectedPlayer.page';
import { playerResolver } from './playerResolver';


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
  {
    path: 'player',
    page: PlayerPage,
  },
  {
    path: 'player/:name',
    page: SelectedPlayerPage,
    resolvers: {
      details: playerResolver,
    }
  },
]);