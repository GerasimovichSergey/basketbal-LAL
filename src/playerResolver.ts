import { ActivatedRoute } from './router';
import { getPlayerData } from './getPlayerData';


export async function playerResolver(activatedRoute: ActivatedRoute) {
  const playerData = await getPlayerData(activatedRoute.params!.name);
  const player = playerData.response[0];

  return player;
}