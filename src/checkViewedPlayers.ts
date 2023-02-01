import { getStorageData } from './getStorageData';


export function checkViewedPlayers(firstName: string, lastName: string, storageName: string) {
  let viewedPlayersArr = JSON.parse(getStorageData(storageName)!);

  if (viewedPlayersArr.includes(`${firstName} ${lastName}`)) {
    return viewedPlayersArr;
  } else {
    viewedPlayersArr.push(`${firstName} ${lastName}`);
  }

  return viewedPlayersArr;
}