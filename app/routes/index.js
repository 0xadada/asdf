import Route from '@ember/routing/route';
import Catalog from 'asdf/models/catalog';

export default class IndexRoute extends Route {
  model() {
    const catalog = new Catalog('s-5678', 1);
    return catalog;
  }
}
