import { AbstractPage } from './router';
import { playerResolver } from './playerResolver';
import { IMAGES } from './images';


const playerPageTemplate = document.createElement('template');

playerPageTemplate.innerHTML = `
    <div class="selected-player"></div>
`;

export class SelectedPlayerPage extends AbstractPage {
  render(): DocumentFragment {
    const fragment = playerPageTemplate.content.cloneNode(true) as DocumentFragment;
    const selectedPlayer = fragment.querySelector('.selected-player');
    const playerData = playerResolver(this.activatedRoute);

    fragment.querySelector('.main')?.append(playerPageTemplate);

    playerData.then(data => {
      selectedPlayer!.innerHTML = `
        <h3>${data.firstname} ${data.lastname}</h3>
        <span>Birth: ${data.birth.date}</span>
        <span>Coutry: ${data.birth.country}</span>
        <span>College: ${data.college}</span>
        <span>Height: ${data.height.meters} meters</span>
        <span>Weight: ${data.weight.kilograms} kilograms</span>
      `;

      const img = document.createElement('img');

      selectedPlayer!.prepend(img);
      img.classList.add('player-img');
      img.src = IMAGES.get(`img-${data.lastname.toLowerCase()}`);
      img.alt = `Photo ${data.firstname} ${data.lastname}`
    });

    return fragment;
  }

  destroy(): void {
  }
}