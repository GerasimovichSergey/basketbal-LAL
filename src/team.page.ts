import { AbstractPage } from './router';
import { playersData } from './playersData';
import { IMAGES } from './images';


const teamPageTemplate = document.createElement('template');

const playersCards = playersData.map((player) => {
  const div = document.createElement('div');
  const img = document.createElement('img');

  div.classList.add('player');
  // a.setAttribute('is', 'router-link'); вложил карточку игрока в <a> и задал атрибут is="router-link". Перегружает страницу и ошибка
  // a.href = `/player/${player.lastName.toLowerCase()}`;
  div.dataset.player = player.lastName;

  img.classList.add('player-img');
  img.alt = `Photo ${player.firstName} ${player.lastName}`;
  img.src = IMAGES.get(`img-${player.lastName.toLowerCase()}`);
  div.innerHTML = `
    <span class="player-first-name">${player.firstName}</span>
    <span class="player-last-name">${player.lastName}</span>
    <span class="player-number">#${player.number}</span>
    <a is="router-link" href="/player/${player.lastName.toLowerCase()}">Player info</a>
  `;
  div.prepend(img);

  return div;
});

teamPageTemplate.innerHTML = `
    <div class="players-list"></div>
`;

export class TeamPage extends AbstractPage {
  render(): DocumentFragment {
    const fragment = teamPageTemplate.content.cloneNode(true) as DocumentFragment;
    const playersList = fragment.querySelector('.players-list');

    playersList?.append(...playersCards);

    // playersList?.addEventListener('click', (event) => {
    //   const target = event.target as HTMLElement;
    //   const playerCard = target.closest('a');
    //
    //   if (playerCard) {
    //     console.log(playerCard.getAttribute('data-player'));
    //   }
    // })

    return fragment;
  }

  destroy(): void {
  }
}