import { ActivatedRoute } from './router';
import { getPlayerDataAPI } from './getPlayerDataAPI';


export async function playerResolver(activatedRoute: ActivatedRoute) {
  const playerData = await getPlayerDataAPI(activatedRoute.params!.name);
  const player = playerData.response[0];

  return player;
}