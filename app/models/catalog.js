import Model from '@ember-data/model';
import { tracked } from '@glimmer/tracking';

export default class CatalogModel extends Model {
  catalogId = '';

  @tracked
  counter = 0;

  constructor(catalogId, count) {
    super();
    this.catalogId = catalogId;
    this.counter = count;
  }

  incrementCount(by) {
    this.counter++;
    return this.counter;
  }
}
