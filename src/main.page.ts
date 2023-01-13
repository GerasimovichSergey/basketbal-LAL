import { AbstractPage } from './router';


const mainPageTemplate = document.createElement('template');
const itemTemplate = document.createElement('template');

mainPageTemplate.innerHTML = `
  <p class="main-text">The Los Angeles Lakers are an American professional basketball team based in Los Angeles. The Lakers compete in the National Basketball Association (NBA) as a member of the league's Western Conference Pacific Division. The Lakers play their home games at Crypto.com Arena, an arena shared with the NBA's Los Angeles Clippers, the Los Angeles Sparks of the Women's National Basketball Association, and the Los Angeles Kings of the National Hockey League. The Lakers are one of the most successful teams in the history of the NBA, and have won 17 NBA championships, tied with the Boston Celtics for the most in NBA history.</p>
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