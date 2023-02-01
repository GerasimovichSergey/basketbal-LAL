import { AbstractPage } from './router';
import { getStorageData } from './getStorageData';

const viewedPageTemplate = document.createElement('template');

viewedPageTemplate.innerHTML = `
  <h2 class="title">Recently viewed players</h2>
    <ul class="viewed-players-list">
    
    </ul>
`;

function createViewedPlayersLi() {
  const viewedPlayersArr = JSON.parse(getStorageData('viewedPlayers')!);
  const viewedPlayersLi = viewedPlayersArr?.map((player: string) => {
    const li = document.createElement('li');

    li.classList.add('viewed-player');
    li.textContent = player;

    return li;
  });

  return viewedPlayersLi;
}

export class ViewedPage extends AbstractPage {
  render(): DocumentFragment {
    const fragment = viewedPageTemplate.content.cloneNode(true) as DocumentFragment;
    const viewedPlayersList = fragment.querySelector('.viewed-players-list');

    fragment.querySelector('.main')?.append(viewedPageTemplate);

    viewedPlayersList?.append(...createViewedPlayersLi());

    return fragment;
  }

  destroy(): void {
  }
}