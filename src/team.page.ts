import { AbstractPage } from './router';
import { playersData } from './playersData';


const teamPageTemplate = document.createElement('template');
const playersCards = playersData.map(player => {
  const li = document.createElement('li');

  li.classList.add('player');
  li.innerHTML = `
    <img class="player-img" src="assets/images/${player.image}" alt="Photo ${player.firstName} ${player.lastName}">
    <span class="player-first-name">${player.firstName}</span>
    <span class="player-last-name">${player.lastName}</span>
    <span class="player-number">#${player.number}</span>
  `;

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