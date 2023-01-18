import { AbstractPage } from './router';
import { playersData } from './playersData';
import { IMAGES } from './images';


const teamPageTemplate = document.createElement('template');
const playersCards = playersData.map((player, index) => {
  const li = document.createElement('li');
  const img = document.createElement('img');

  li.classList.add('player');
  img.classList.add('player-img');
  img.alt = `Photo ${player.firstName} ${player.lastName}`;
  img.src = IMAGES.get(`img-${index}`);

  li.innerHTML = `
<!--    <img class="player-img" src="assets/images/${player.image}" alt="Photo ${player.firstName} ${player.lastName}">-->
    <span class="player-first-name">${player.firstName}</span>
    <span class="player-last-name">${player.lastName}</span>
    <span class="player-number">#${player.number}</span>
  `;

  li.prepend(img);

  return li;
});

teamPageTemplate.innerHTML = `
    <ul class="players-list"></ul>
`;

export class TeamPage extends AbstractPage {
  render(): DocumentFragment {
    const fragment = teamPageTemplate.content.cloneNode(true) as DocumentFragment;

    fragment.querySelector('.players-list')?.append(...playersCards);
    fragment.querySelector('.main')?.append(teamPageTemplate);

    return fragment;
  }

  destroy(): void {
  }
}