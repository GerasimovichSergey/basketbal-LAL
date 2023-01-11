import { ActivatedRoute } from '../routes';
import { RedirectPath } from './RedirectPath';


export interface Guard {
  canVisit(activatedRoute: ActivatedRoute): boolean | Promise<boolean> | RedirectPath | Promise<RedirectPath>;
}
