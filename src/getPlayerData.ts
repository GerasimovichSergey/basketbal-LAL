import { getData } from './getData';


const API_KEY = 'd4fb58f2dd2917b6f2bd2cd3a2cc6ff1';
const API_URL = 'https://v2.nba.api-sports.io';

export async function getPlayerData(player: string) {
  const playerData = await getData(`${API_URL}/players?search=${player}`, {
    'method': 'GET',
    'headers': {
      'x-rapidapi-host': `${API_URL}`,
      'x-rapidapi-key': `${API_KEY}`
    }
  });

  return playerData;
}