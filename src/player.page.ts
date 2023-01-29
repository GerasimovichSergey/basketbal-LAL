import { AbstractPage } from './router';


const playerPageTemplate = document.createElement('template');

playerPageTemplate.innerHTML = `TEST`;

export class PlayerPage extends AbstractPage {
  render(): DocumentFragment {
    const fragment = playerPageTemplate.content.cloneNode(true) as DocumentFragment;

    fragment.querySelector('.main')?.append(playerPageTemplate);

    return fragment;
  }

  destroy(): void {
  }
}