import Model from '@ember-data/model';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CatalogModel extends Model {
  @tracked
  counter = 0;

  @action
  incrementCount(by) {
    this.counter += by;
  }

  @tracked
  name = '';

  @action
  changeName(to) {
    const name = to.srcElement.value;
    console.info('changed name to', name);
    this.name = name;
  }
}
