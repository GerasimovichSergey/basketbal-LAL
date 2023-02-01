import { AbstractPage } from './router';
import { getStorageData } from './getStorageData';
import { IMAGES } from './images';


const playerPageTemplate = document.createElement('template');

playerPageTemplate.innerHTML = '<div class="selected-player"></div>';

export class PlayerPage extends AbstractPage {
  render(): DocumentFragment {
    const fragment = playerPageTemplate.content.cloneNode(true) as DocumentFragment;
    const selectedPlayer = fragment.querySelector('.selected-player');

    fragment.querySelector('.main')?.append(playerPageTemplate);

    if (getStorageData('player')) {
      const player = JSON.parse(getStorageData('player')!);

      selectedPlayer!.innerHTML = `
        <h3>${player.firstname} ${player.lastname}</h3>
        <span>Birth: ${player.birth}</span>
        <span>Coutry: ${player.country}</span>
        <span>College: ${player.college}</span>
        <span>Height: ${player.height} meters</span>
        <span>Weight: ${player.weight} kilograms</span>
      `;

      const playerImg = document.createElement('img');

      selectedPlayer!.prepend(playerImg);
      playerImg.classList.add('player-img');
      playerImg.src = IMAGES.get(`img-${player.lastname.toLowerCase()}`);
      playerImg.alt = `Photo ${player.firstname} ${player.lastname}`
    } else {
      selectedPlayer!.innerHTML = 'Choose a player';
    }

    return fragment;
  }

  destroy(): void {
  }
}