import { AbstractPage } from './router';
import { playerResolver } from './playerResolver';
import { IMAGES } from './images';
import { checkViewedPlayers } from './checkViewedPlayers';


const playerPageTemplate = document.createElement('template');

playerPageTemplate.innerHTML = `
    <div class="selected-player"></div>
`;

function addToStorage(storage: string, data: object | string) {
  localStorage.setItem(storage, JSON.stringify(data));
}

export class SelectedPlayerPage extends AbstractPage {
  render(): DocumentFragment {
    const fragment = playerPageTemplate.content.cloneNode(true) as DocumentFragment;
    const selectedPlayer = fragment.querySelector('.selected-player');
    const playerData = playerResolver(this.activatedRoute);

    fragment.querySelector('.main')?.append(playerPageTemplate);

    playerData.then(player => {
      const playerData = {
        firstname: player.firstname,
        lastname: player.lastname,
        birth: player.birth.date,
        country: player.birth.country,
        college: player.college,
        height: player.height.meters,
        weight: player.weight.kilogramms,
      }

      addToStorage('player', playerData);
      addToStorage('viewedPlayers', checkViewedPlayers(playerData.firstname, playerData.lastname, 'viewedPlayers'));

      selectedPlayer!.innerHTML = `
        <h3>${player.firstname} ${player.lastname}</h3>
        <span>Birth: ${player.birth.date}</span>
        <span>Coutry: ${player.birth.country}</span>
        <span>College: ${player.college}</span>
        <span>Height: ${player.height.meters} meters</span>
        <span>Weight: ${player.weight.kilograms} kilograms</span>
      `;

      const img = document.createElement('img');

      selectedPlayer!.prepend(img);
      img.classList.add('player-img');
      img.src = IMAGES.get(`img-${player.lastname.toLowerCase()}`);
      img.alt = `Photo ${player.firstname} ${player.lastname}`
    });

    return fragment;
  }

  destroy(): void {
  }
}