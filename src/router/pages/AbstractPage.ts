import { ActivatedRoute } from '../routes';


export abstract class AbstractPage {
  readonly #activatedRoute: ActivatedRoute;

  constructor(activatedRoute: ActivatedRoute) {
    this.#activatedRoute = activatedRoute;
  }

  get activatedRoute(): ActivatedRoute {
    return this.#activatedRoute;
  }

  abstract render(): DocumentFragment | Element;

  abstract destroy(): void;
}
