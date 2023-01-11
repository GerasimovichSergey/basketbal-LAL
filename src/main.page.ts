import { AbstractPage } from './router';


const mainPageTemplate = document.createElement('template');
const itemTemplate = document.createElement('template');

mainPageTemplate.innerHTML = `
  <h1>HELLO LALKI</h1>
`;

itemTemplate.innerHTML = `
  <li>
    <a is="router-link" href=""></a>
  </li>
`;

export class MainPage extends AbstractPage {
  render(): DocumentFragment {
    const fragment = mainPageTemplate.content.cloneNode(true) as DocumentFragment;

    fragment.querySelector('.main')?.append(mainPageTemplate);

    return fragment;
  }

  destroy(): void {
  }
}